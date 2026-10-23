import { NextResponse } from 'next/server';
import { portfolio } from '~/portfolio.config';

interface ContributionDayApi {
  date: string;
  count: number;
  level: number;
}

interface JogruberResponse {
  total?: {
    lastYear?: number;
    [year: string]: number | undefined;
  };
  contributions?: ContributionDayApi[];
}

async function fetchFromJogruber(username: string) {
  const url = `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; PortfolioBot/1.0)',
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Public contribution API returned ${res.status}`);
  }

  const json: JogruberResponse = await res.json();
  const contribs = json.contributions || [];

  const weeks: Array<{ contributionDays: Array<{ contributionCount: number; date: string }> }> = [];
  let currentWeek: Array<{ contributionCount: number; date: string }> = [];
  const monthMap = new Map<string, boolean>();

  for (const day of contribs) {
    const d = new Date(`${day.date}T00:00:00`);
    const mName = d.toLocaleString('en-US', { month: 'short' });
    if (!monthMap.has(mName)) {
      monthMap.set(mName, true);
    }

    if (d.getDay() === 0 && currentWeek.length > 0) {
      weeks.push({ contributionDays: currentWeek });
      currentWeek = [];
    }
    currentWeek.push({
      contributionCount: day.count,
      date: day.date,
    });
  }
  if (currentWeek.length > 0) {
    weeks.push({ contributionDays: currentWeek });
  }

  const months = Array.from(monthMap.keys()).map((name) => ({ name }));
  const totalContributions =
    json.total?.lastYear ?? contribs.reduce((sum, d) => sum + (d.count || 0), 0);

  return {
    data: {
      user: {
        contributionsCollection: {
          contributionCalendar: {
            totalContributions,
            months,
            weeks,
          },
        },
      },
    },
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const username = body.username || portfolio.handles.github || 'Krishnanand-10';
    const query = body.query;
    const token = process.env.GITHUB_TOKEN || '';

    if (token && query) {
      try {
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ query }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data?.data?.user?.contributionsCollection) {
            return NextResponse.json(data);
          }
        }
      } catch (graphError) {
        console.warn('GitHub GraphQL failed, falling back to public contribution API:', graphError);
      }
    }

    // Fallback: fetch directly from public contribution API
    const fallbackData = await fetchFromJogruber(username);
    return NextResponse.json(fallbackData);
  } catch (error) {
    console.error('GitHub API Proxy Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub contributions' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username') || portfolio.handles.github || 'Krishnanand-10';
    const fallbackData = await fetchFromJogruber(username);
    return NextResponse.json(fallbackData);
  } catch (error) {
    console.error('GitHub API Proxy GET Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub contributions' },
      { status: 500 }
    );
  }
}
