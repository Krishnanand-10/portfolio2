import { ThemeToggle } from "@/components/theme-toggle";
import { GithubGraph } from "@/components/GithubGraph";
import { CurrentTime } from "@/components/CurrentTime";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { BlogList } from "@/components/BlogList";
import { FooterBackground } from "@/components/FooterBackground";
import { RightNavbar } from "@/components/RightNavbar";
import { CommandMenu } from "@/components/command-menu";
import Link from "next/link";
import { portfolio } from "~/portfolio.config";
import { CleanHash } from "@/components/CleanHash";
import { skillGroups } from "@/data/skillsData";
import { getSocialProfiles } from "@/lib/stats/socials";
import SoftPillButton from "@/components/pixel-perfect/soft-pill-button";
import { FlipCoverButton } from "@/components/pixel-perfect/flip-cover-button";
import SocialHoverCard from "@/components/pixel-perfect/social-hover-card";
import { BannerParticles } from "@/components/BannerParticles";
import Image from "next/image";
import { SiGithub, SiX, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { Mail, ArrowRight, ExternalLink } from "lucide-react";

const lightBannerPlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 11'%3E%3Crect width='32' height='11' fill='%23d9e5e7'/%3E%3C/svg%3E";
const darkBannerPlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 11'%3E%3Crect width='32' height='11' fill='%23071329'/%3E%3C/svg%3E";

export default async function Home() {
  const socialProfiles = await getSocialProfiles();

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative overflow-x-hidden transition-colors duration-300">
      <CleanHash />

      {/* Right Side Blueprint Navigation */}
      <RightNavbar />

      {/* Vertical Lines - Ultra-fine Micro Dots */}
      <div
        className="absolute top-0 bottom-0 left-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block"
        style={{
          maskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />
      <div
        className="absolute top-0 bottom-0 right-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block"
        style={{
          maskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      {/* Horizontal Lines - Ultra-fine Micro Dots */}
      <div
        className="absolute left-0 right-0 top-[22vh] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
        style={{
          maskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />
      <div
        className="absolute left-0 right-0 top-[calc(22vh+112px)] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
        style={{
          maskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      {/* Ultra-Tiny Solid Nodes */}
      {[
        { top: "22vh", left: "30%" },
        { top: "22vh", right: "30%" },
        { top: "calc(22vh + 112px)", left: "30%" },
        { top: "calc(22vh + 112px)", right: "30%" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            transform: `translate(${pos.right ? "50%" : "-50%"}, -50%)`,
          }}
        />
      ))}

      {/* Cell 1: Top Hero Banner with interactive particles */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-0 h-[22vh] -z-0 pointer-events-auto overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/banner-light.jpg"
            alt="Banner light"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            quality={60}
            priority
            placeholder="blur"
            blurDataURL={lightBannerPlaceholder}
            className="object-cover object-center dark:hidden opacity-90 saturate-[0.85] contrast-[1.05]"
          />
          <Image
            src="/banner-dark.jpg"
            alt="Banner dark"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            quality={60}
            priority
            placeholder="blur"
            blurDataURL={darkBannerPlaceholder}
            className="hidden dark:block object-cover object-center opacity-85 contrast-[1.15]"
          />
        </div>

        <BannerParticles />

        <div className="absolute bottom-3 right-2 z-10 pointer-events-auto">
          <CurrentTime />
        </div>
      </div>

      {/* Cell 2: Profile Section */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-[22vh] h-[112px] flex items-center px-4 z-50">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative p-[3px] rounded-[6px] sm:rounded-[8px] border-[1.5px] border-black/30 dark:border-white/[0.15] shrink-0">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[3px] sm:rounded-[5px] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src="/avatar.jpg"
                  alt={portfolio.name}
                  width={240}
                  height={240}
                  quality={90}
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 640px) 120px, 96px"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center pt-8">
              <h1 className="text-[20px] sm:text-[24px] font-bold text-zinc-800 dark:text-zinc-100 tracking-tight leading-none mb-0.5">
                Krishna Nand Tiwari
              </h1>
              <p className="text-[13px] sm:text-[14px] text-zinc-500 dark:text-zinc-400">
                Full Stack Developer · Bengaluru, India
              </p>
            </div>
          </div>

          <div className="flex items-start justify-end gap-2 sm:gap-3 h-20 sm:h-24 py-1">
            <CommandMenu />
            <ThemeToggle className="dark:text-zinc-400 hover:dark:text-zinc-300" />
          </div>
        </div>
      </div>

      {/* Flowing Content Section */}
      <div className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(22vh+112px)] pb-0 px-4 flex flex-col z-10 relative min-h-screen">
        
        {/* Hero Bio */}
        <div id="about" className="mt-4 scroll-mt-24">
          <p className="text-[14px] sm:text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Full-stack developer building production-oriented web applications using React, Next.js, TypeScript, Node.js, and Supabase. Focused on fast execution, scalable architecture, and turning ideas into production-ready software.
          </p>

          {/* Action Buttons: Book an intro call + Send an email */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <FlipCoverButton href={portfolio.bookingLink || `mailto:${portfolio.email}`} label="Book an intro call" />
            <Link href="/contact">
              <SoftPillButton
                as="span"
                variant="secondary"
                className="px-3 py-1.5 !text-[12px]"
              >
                <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Send an email
                </div>
              </SoftPillButton>
            </Link>
          </div>

          {/* Socials */}
          <div id="contact" className="mt-6 scroll-mt-24">
            <h2 className="text-[14px] text-zinc-500 mb-2">
              Here are my <span className="font-medium text-zinc-800 dark:text-zinc-200">socials</span>
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {[
                { name: "GitHub", href: `https://github.com/${portfolio.handles.github}`, icon: <SiGithub className="w-3.5 h-3.5" /> },
                { name: "Twitter", href: `https://x.com/${portfolio.handles.x}`, icon: <SiX className="w-3.5 h-3.5" /> },
                { name: "LinkedIn", href: `https://www.linkedin.com/in/${portfolio.handles.linkedin}/`, icon: <FaLinkedin className="w-3.5 h-3.5" /> },
                ...(portfolio.handles.leetcode ? [{ name: "LeetCode", href: `https://leetcode.com/u/${portfolio.handles.leetcode}`, icon: <SiLeetcode className="w-3.5 h-3.5" /> }] : []),
              ].map((social, i) => (
                <SocialHoverCard key={i} socialName={social.name} profile={socialProfiles[social.name]}>
                  <SoftPillButton
                    as="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    className="px-3 py-1.5 !text-[12px]"
                  >
                    <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      {social.icon}
                      {social.name}
                    </div>
                  </SoftPillButton>
                </SocialHoverCard>
              ))}

              <SoftPillButton
                as="a"
                href={portfolio.resume}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="px-3 py-1.5 !text-[12px]"
              >
                <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                  Résumé
                </div>
              </SoftPillButton>
            </div>
          </div>
        </div>

        {/* A bit about me */}
        <div id="about-me" className="mt-8 flex flex-col relative z-10 scroll-mt-24">
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />
          <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <div className="py-2 relative mt-1">
            <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">A bit about me</h2>

            <div
              className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
              style={{
                maskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          <div className="py-4 flex flex-col gap-3">
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
              I&apos;m a 22 year-old student living in <strong className="font-semibold text-zinc-900 dark:text-white">Bengaluru, India</strong>, currently pursuing my <strong className="font-semibold text-zinc-900 dark:text-white">MCA at Dayananda Sagar University</strong>. Passionate about exploring modern web technologies, I enjoy crafting interactive tools and shipping software that actually works.
            </p>
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
              Outside of tech, I love playing football and analyzing tactics on the chessboard.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div id="projects" className="mt-8 flex flex-col relative z-10 scroll-mt-24">
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />
          <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <div className="py-2 relative mt-1">
            <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Projects</h2>

            <div
              className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
              style={{
                maskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage: "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          <div className="relative pt-6 pb-2">
            <div className="absolute top-0 bottom-0 left-1/2 w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none -translate-x-1/2 hidden md:block" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

            <ProjectsGrid />

            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          <div className="flex justify-center -mt-[19px] pb-0 relative z-20">
            <Link href="/projects" className="relative group block">
              <div className="absolute -inset-[5px] border border-black/5 dark:border-white/5 rounded-[11px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />
              <div className="relative flex items-center gap-1.5 px-4 py-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#09090b] dark:hover:bg-[#121214] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-[6px] text-[13px] font-medium transition-all duration-300 border border-black/5 dark:border-white/5 shadow-sm shadow-black/20 dark:shadow-lg dark:shadow-black/80">
                View All Projects
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors" />
              </div>
            </Link>
          </div>
        </div>

        {/* Github Graph */}
        <div id="github" className="scroll-mt-24">
          <GithubGraph />
        </div>

        {/* Skills */}
        <div id="skills" className="mt-6 flex flex-col relative z-10 scroll-mt-24">
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <div className="py-2 relative mt-1">
            <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Skills &amp; Technologies</h2>

            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          <div className="relative flex flex-col gap-5 pt-6 pb-2">
            {skillGroups.map((group) => (
              <div key={group.group}>
                <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-600">
                  {group.group}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div key={skill.name} className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#0a0a0a] dark:hover:bg-[#121214] border border-black/30 dark:border-white/[0.15] rounded-[6px] transition-colors duration-200 cursor-default">
                        <SkillIcon aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-zinc-500 opacity-80" />
                        <span className="text-[13px] font-medium text-zinc-600 dark:text-zinc-400">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blogs */}
        <div id="blogs" className="mt-6 flex flex-col relative z-10 scroll-mt-24">
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <div className="py-2 relative mt-1">
            <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Engineering Notes &amp; Blogs</h2>

            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          <BlogList />
        </div>

        {/* Contact & Discussion */}
        <div id="contact" className="mt-8 flex flex-col relative z-10 scroll-mt-24">
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <div className="py-6 flex flex-col items-center text-center">
            <h3 className="text-[17px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Hey, you scrolled this far, let&apos;s talk.
            </h3>
            <p className="mt-1.5 text-[13px] text-zinc-500 dark:text-zinc-400 max-w-[420px]">
              Need help building your next project or MVP? Let&apos;s connect and discuss ideas.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href={`mailto:${portfolio.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-900 rounded-[6px] text-[13px] font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email me</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 rounded-[6px] text-[13px] font-medium transition-colors"
              >
                <span>Send message</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Minimal Bhagavad Gita Quote Section from old portfolio */}
        <div className="mt-2 flex flex-col items-center justify-center relative py-6">
          <div className="max-w-[480px] w-full flex flex-col items-center text-center">
            <h3 className="text-[14px] sm:text-[15px] font-medium leading-relaxed text-zinc-500 dark:text-zinc-400 mb-4 italic">
              &ldquo;You have a right to perform your prescribed duty, but you are not entitled to the fruits of action.&rdquo;
            </h3>

            <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.2em] text-zinc-400 dark:text-zinc-600 uppercase">
              <div className="w-4 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
              BHAGAVAD GITA, CHAPTER 2, VERSE 47
              <div className="w-4 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
        </div>

        {/* Fading Grid Filler */}
        <div className="flex-grow w-[calc(100%+32px)] -mx-4 h-[240px] relative mt-4">
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          <div className="absolute top-0 left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <FooterBackground />
        </div>

      </div>
    </div>
  );
}
