import type { Metadata } from "next";
import { portfolio } from "~/portfolio.config";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
} from "lucide-react";
import { BlogLikeButton } from "@/components/BlogLikeButton";
import { CurrentTime } from "@/components/CurrentTime";
import { FooterBackground } from "@/components/FooterBackground";
import { Navbar } from "@/components/Navbar";
import { BlogArticleContent } from "@/components/BlogArticleContent";
import {
  BlogBlock,
  blogPosts,
  getBlogPostBySlug,
} from "@/data/blogsData";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

const horizontalDashes = {
  maskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
  WebkitMaskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
};

const verticalDashes = {
  maskImage:
    "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
  WebkitMaskImage:
    "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: `Posts | ${portfolio.name}`,
    };
  }

  return {
    title: `${post.title} | ${portfolio.name}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      images: [
        {
          url: post.image || "/og-image.jpg",
          width: 1024,
          height: 576,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image || "/og-image.jpg"],
    },
  };
}

function BlueprintFrame() {
  return (
    <>
      <div
        className="absolute top-0 bottom-0 left-[30%] hidden w-0 border-r border-black/30 pointer-events-none dark:border-white/[0.15] md:block"
        style={verticalDashes}
      />
      <div
        className="absolute top-0 bottom-0 right-[30%] hidden w-0 border-r border-black/30 pointer-events-none dark:border-white/[0.15] md:block"
        style={verticalDashes}
      />

      <div
        className="absolute left-0 right-0 top-14 h-0 border-b border-black/30 pointer-events-none dark:border-white/[0.15]"
        style={horizontalDashes}
      />
      <div
        className="absolute left-0 right-0 top-[104px] h-0 border-b border-black/30 pointer-events-none dark:border-white/[0.15]"
        style={horizontalDashes}
      />

      {[
        { top: "56px", left: "30%" },
        { top: "56px", right: "30%" },
        { top: "104px", left: "30%" },
        { top: "104px", right: "30%" },
      ].map((position, index) => (
        <div
          key={index}
          className="absolute hidden h-[2px] w-[2px] bg-black/50 pointer-events-none dark:bg-white/[0.25] md:block"
          style={{
            top: position.top,
            left: position.left,
            right: position.right,
            transform: `translate(${position.right ? "50%" : "-50%"}, -50%)`,
          }}
        />
      ))}
    </>
  );
}

function BlueprintDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 pointer-events-none dark:border-white/[0.15]"
        style={horizontalDashes}
      />
      <div className="absolute left-0 h-[2px] w-[2px] -translate-x-1/2 translate-y-[-1px] bg-black/50 pointer-events-none dark:bg-white/[0.25]" />
      <div className="absolute right-0 h-[2px] w-[2px] translate-x-1/2 translate-y-[-1px] bg-black/50 pointer-events-none dark:bg-white/[0.25]" />
    </div>
  );
}

function BlogContentBlock({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <section className="relative mt-10 pt-6">
          <div
            className="absolute left-[-100vw] right-[-100vw] top-0 h-0 border-b border-black/20 pointer-events-none dark:border-white/[0.1]"
            style={horizontalDashes}
          />
          <div className="absolute left-0 top-0 h-[2px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-black/40 pointer-events-none dark:bg-white/[0.22]" />
          <h2 className="text-[18px] font-bold leading-snug tracking-tight text-zinc-900 dark:text-zinc-50">
            {block.text}
          </h2>
        </section>
      );

    case "paragraph":
      return (
        <p className="text-[15px] leading-7 text-zinc-700 dark:text-zinc-300 sm:text-[16px]">
          {block.text}
        </p>
      );

    case "quote":
      return (
        <blockquote className="relative my-7 border-l border-black/30 py-1 pl-5 text-[15px] font-medium leading-7 text-zinc-800 dark:border-white/[0.18] dark:text-zinc-200 sm:text-[16px]">
          {block.text}
        </blockquote>
      );

    case "image":
      return (
        <figure className="my-8">
          <div className="relative overflow-hidden rounded-[6px] border border-black/20 bg-zinc-100 shadow-sm shadow-black/10 dark:border-white/[0.12] dark:bg-[#09090b] dark:shadow-black/50">
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <figcaption className="mt-2 text-[11px] leading-5 text-zinc-500 dark:text-zinc-500">
            {block.caption}
          </figcaption>
        </figure>
      );

    case "list":
      return (
        <ul className="my-5 space-y-2.5 text-[15px] leading-7 text-zinc-700 dark:text-zinc-300 sm:text-[16px]">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[12px] h-[3px] w-[3px] shrink-0 rounded-full bg-zinc-500 dark:bg-zinc-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "links":
      return (
        <div className="my-7 grid gap-3">
          {block.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-[6px] border border-black/20 bg-zinc-50 px-4 py-3 transition-colors hover:bg-zinc-100 dark:border-white/[0.12] dark:bg-[#09090b] dark:hover:bg-[#121214]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[13px] font-bold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-5 text-zinc-500 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-900 dark:text-zinc-600 dark:group-hover:text-zinc-200" />
              </div>
            </a>
          ))}
        </div>
      );
  }
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white transition-colors duration-300 dark:bg-black">
      {/* Top Navbar */}
      <Navbar />
      <BlueprintFrame />

      {/* Compact Time Strip (just enough for time to fit with micro-dot background) */}
      <div className="absolute left-0 right-0 top-14 h-12 -z-0 pointer-events-auto overflow-hidden md:left-[30%] md:right-[30%]">
        <FooterBackground />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-auto">
          <CurrentTime />
        </div>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 ml-0 mr-0 flex flex-col px-4 pb-16 pt-[124px] sm:pt-[132px] md:ml-[30%] md:mr-[30%]">
        {/* Top Back Navigation */}
        <div className="flex items-center justify-between mb-4">
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>See all posts</span>
          </Link>
          <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            blogs/{post.slug}
          </span>
        </div>

        <article className="relative">
          <header className="relative py-7">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[4px] border border-black/30 bg-white/50 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:border-white/[0.15] dark:bg-black/20 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-[26px] font-bold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-[32px]">
              {post.title}
            </h1>

            {post.description && (
              <p className="mt-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-300 sm:text-[16px]">
                {post.description}
              </p>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              {post.readingTime && (
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTime}
                </span>
              )}
              <BlogLikeButton slug={post.slug} initialLikes={post.claps} />
            </div>
          </header>

          <BlueprintDivider />

          {/* Full Article Content */}
          <div className="py-7">
            {post.contentHtml ? (
              <BlogArticleContent contentHtml={post.contentHtml} />
            ) : post.content ? (
              <div className="space-y-5">
                {post.content.map((block, index) => (
                  <BlogContentBlock key={`${block.type}-${index}`} block={block} />
                ))}
              </div>
            ) : null}
          </div>

          <BlueprintDivider className="mt-2" />
        </article>

        <div className="relative mt-12 h-[220px] w-[calc(100%+32px)] -mx-4 overflow-hidden">
          <div
            className="absolute left-[-100vw] right-[-100vw] top-0 z-10 h-0 border-t border-black/30 pointer-events-none dark:border-white/[0.15]"
            style={horizontalDashes}
          />
          <div className="absolute left-0 top-0 z-20 h-[2px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-black/50 pointer-events-none dark:bg-white/[0.25]" />
          <div className="absolute right-0 top-0 z-20 h-[2px] w-[2px] translate-x-1/2 -translate-y-1/2 bg-black/50 pointer-events-none dark:bg-white/[0.25]" />
          <FooterBackground />
        </div>
      </main>
    </div>
  );
}
