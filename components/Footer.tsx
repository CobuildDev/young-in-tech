import Link from "next/link";
import { Typography } from "./Typography";
// import { Code2, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto mb-6 mx-auto w-[calc(100%-3rem)] max-w-4xl rounded-3xl sm:rounded-full border border-zinc-200 bg-white/80 backdrop-blur-md shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80 py-4 px-6">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          {/* <Code2 className="h-5 w-5 text-zinc-900 dark:text-zinc-100" /> */}
          <Typography variant="span" weight="semibold" className="text-sm">
            Young In Tech
          </Typography>
        </div>
        <Typography variant="p" size="sm" className="text-zinc-500">
          &copy; {new Date().getFullYear()} Young In Tech. All rights reserved.
        </Typography>
        <div className="flex gap-4 text-zinc-400">
          <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            <span className="sr-only">Twitter</span>
            {/* <Twitter className="h-5 w-5" /> */}
          </Link>
          <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            <span className="sr-only">GitHub</span>
            {/* <Github className="h-5 w-5" /> */}
          </Link>
          <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            <span className="sr-only">LinkedIn</span>
            {/* <Linkedin className="h-5 w-5" /> */}
          </Link>
        </div>
      </div>
    </footer>
  );
}
