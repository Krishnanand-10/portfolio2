/** Normalized calendar cell shared by heatmaps. */
export type HeatmapDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type GithubStats = {
  login: string;
  totalContributions: number;
  mergedPullRequests: number;
  publicRepos: number;
  calendar: HeatmapDay[];
  stale: boolean;
};
