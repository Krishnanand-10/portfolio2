"use client"

import * as React from "react"
import { portfolio } from "~/portfolio.config";
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import {
    LayoutDashboard,
    FileText,
    Moon,
    Sun,
    Laptop,
    Code,
    ArrowUp,
    ArrowDown,
    CornerDownLeft,
    Copy,
    BookOpen,
    Mail,
    Download,
    Send,
} from "lucide-react"
import { SiGithub, SiX } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa6"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { projectsData } from "@/data/projectsData"
import { blogsData } from "@/data/blogsData"
import { handles, email, resume } from "@/data/links"

const itemClass = "rounded-lg py-3 cursor-pointer"
const kbdClass =
    "font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700"

const SECTIONS = [
    { id: "about-me", label: "About Me", icon: LayoutDashboard, key: "A" },
    { id: "projects", label: "Projects", icon: Code, key: "P" },
    { id: "skills", label: "Skills", icon: BookOpen, key: "S" },
    { id: "blogs", label: "Blogs", icon: FileText, key: "B" },
    { id: "contact", label: "Contact", icon: Send, key: "C" },
] as const

const PROFILES = [
    { label: "GitHub", icon: SiGithub, href: `https://github.com/${handles.github}`, handle: handles.github },
    { label: "LinkedIn", icon: FaLinkedin, href: `https://www.linkedin.com/in/${handles.linkedin}/`, handle: handles.linkedin },
    { label: "X", icon: SiX, href: `https://x.com/${handles.x}`, handle: `@${handles.x}` },
] as const

interface CommandMenuProps {
    hideTrigger?: boolean
}

export function CommandMenu({ hideTrigger = false }: CommandMenuProps = {}) {
    const [open, setOpen] = React.useState(false)
    const { setTheme } = useTheme()
    const router = useRouter()

    const openExternal = React.useCallback((url: string) => {
        const opened = window.open(url, "_blank", "noopener,noreferrer")
        if (!opened) window.location.assign(url)
    }, [])

    React.useEffect(() => {
        const handleOpen = () => setOpen(true)
        window.addEventListener("open-command-menu", handleOpen)
        return () => window.removeEventListener("open-command-menu", handleOpen)
    }, [])

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (!open || !e.shiftKey) return

            const key = e.key.toUpperCase()
            const section = SECTIONS.find((s) => s.key === key)
            if (section) {
                e.preventDefault()
                runCommand(() => { window.location.hash = `#${section.id}` })
                return
            }

            if (key === "E") {
                e.preventDefault()
                runCommand(() => navigator.clipboard.writeText(email))
            } else if (key === "R") {
                e.preventDefault()
                runCommand(() => openExternal(resume))
            } else if (key === "T") {
                e.preventDefault()
                runCommand(() => setTheme("light"))
            } else if (key === "Y") {
                e.preventDefault()
                runCommand(() => setTheme("dark"))
            } else if (key === "U") {
                e.preventDefault()
                runCommand(() => setTheme("system"))
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [open, runCommand, openExternal, setTheme])

    return (
        <>
            {!hideTrigger && (
                <button
                    onClick={() => setOpen(true)}
                    className="group relative flex items-center justify-between w-9 sm:w-44 h-8 px-2 sm:px-2.5 rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-all text-[12px] font-medium"
                >
                    <div className="flex items-center gap-2">
                        <kbd className="hidden sm:inline-flex items-center gap-0.5 pointer-events-none font-mono text-[10px] text-zinc-400 dark:text-zinc-500 font-medium tracking-tight">
                            <span className="text-[11px]">&gt;</span> Search
                        </kbd>
                        <span className="sm:hidden font-mono text-[11px]">&gt;</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-0.5 font-mono text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">
                        <span className="text-[9px]">⌘</span>K
                    </div>
                </button>
            )}

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList className="max-h-[330px]">
                    <CommandEmpty>No results found.</CommandEmpty>

                    <CommandGroup heading="Sections">
                        {SECTIONS.map((section) => {
                            const Icon = section.icon
                            return (
                                <CommandItem
                                    key={section.id}
                                    value={`section ${section.label}`}
                                    onSelect={() => runCommand(() => { window.location.hash = `#${section.id}` })}
                                    className={itemClass}
                                >
                                    <Icon className="mr-2 h-4 w-4 text-zinc-500" />
                                    <span>{section.label}</span>
                                    <CommandShortcut className={kbdClass}>shift + {section.key}</CommandShortcut>
                                </CommandItem>
                            )
                        })}
                    </CommandGroup>

                    <CommandSeparator className="my-2" />

                    <CommandGroup heading="Projects">
                        {projectsData.map((project) => (
                            <CommandItem
                                key={project.slug}
                                value={`project ${project.title}`}
                                onSelect={() => runCommand(() => router.push(`/projects/${project.slug}`))}
                                className={itemClass}
                            >
                                <Code className="mr-2 h-4 w-4 text-zinc-500" />
                                <span>{project.title}</span>
                                <CommandShortcut className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
                                    {project.status}
                                </CommandShortcut>
                            </CommandItem>
                        ))}
                    </CommandGroup>

                    <CommandSeparator className="my-2" />

                    <CommandGroup heading="Blogs">
                        {blogsData.map((blog) => (
                            <CommandItem
                                key={blog.slug}
                                value={`blog ${blog.title}`}
                                onSelect={() => runCommand(() => router.push(`/blogs/${blog.slug}`))}
                                className={itemClass}
                            >
                                <FileText className="mr-2 h-4 w-4 text-zinc-500" />
                                <span className="truncate">{blog.title}</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>

                    <CommandSeparator className="my-2" />

                    <CommandGroup heading="Profiles">
                        {PROFILES.map((p) => {
                            const Icon = p.icon
                            return (
                                <CommandItem
                                    key={p.label}
                                    value={`profile ${p.label}`}
                                    onSelect={() => runCommand(() => openExternal(p.href))}
                                    className={itemClass}
                                >
                                    <Icon className="mr-2 h-4 w-4 text-zinc-500" />
                                    <span>{p.label}</span>
                                    <CommandShortcut className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
                                        {p.handle}
                                    </CommandShortcut>
                                </CommandItem>
                            )
                        })}
                    </CommandGroup>

                    <CommandSeparator className="my-2" />

                    <CommandGroup heading="Actions">
                        <CommandItem value="action copy email address" onSelect={() => runCommand(() => navigator.clipboard.writeText(email))} className={itemClass}>
                            <Copy className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Copy email</span>
                            <CommandShortcut className={kbdClass}>shift + E</CommandShortcut>
                        </CommandItem>
                        <CommandItem value="action send email write" onSelect={() => runCommand(() => openExternal(`mailto:${email}`))} className={itemClass}>
                            <Mail className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Send an email</span>
                        </CommandItem>
                        <CommandItem value="action resume cv download" onSelect={() => runCommand(() => openExternal(resume))} className={itemClass}>
                            <Download className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Download résumé</span>
                            <CommandShortcut className={kbdClass}>shift + R</CommandShortcut>
                        </CommandItem>
                        <CommandItem value="action copy link url share" onSelect={() => runCommand(() => navigator.clipboard.writeText(window.location.href))} className={itemClass}>
                            <Copy className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Copy link to page</span>
                        </CommandItem>
                    </CommandGroup>

                    <CommandSeparator className="my-2" />

                    <CommandGroup heading="Theme">
                        <CommandItem value="theme light" onSelect={() => runCommand(() => setTheme("light"))} className={itemClass}>
                            <Sun className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Light Mode</span>
                            <CommandShortcut className={kbdClass}>shift + T</CommandShortcut>
                        </CommandItem>
                        <CommandItem value="theme dark" onSelect={() => runCommand(() => setTheme("dark"))} className={itemClass}>
                            <Moon className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Dark Mode</span>
                            <CommandShortcut className={kbdClass}>shift + Y</CommandShortcut>
                        </CommandItem>
                        <CommandItem value="theme system auto" onSelect={() => runCommand(() => setTheme("system"))} className={itemClass}>
                            <Laptop className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>System</span>
                            <CommandShortcut className={kbdClass}>shift + U</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>

                {/* Footer */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                    <div className="flex items-center gap-4 text-[10px] text-zinc-500">
                        <div className="flex items-center gap-1">
                            <ArrowUp className="w-3 h-3" />
                            <ArrowDown className="w-3 h-3" />
                            <span>to navigate</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <CornerDownLeft className="w-3 h-3" />
                            <span>to select</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-zinc-500">
                        <span className="font-mono">esc</span>
                        <span>to close</span>
                    </div>
                </div>
            </CommandDialog>
        </>
    )
}
