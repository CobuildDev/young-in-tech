import Link from "next/link";
import { Typography } from "./Typography";
import Image from "next/image";
// import { Code2, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto mb-8 mx-auto w-[calc(100%-2rem)] max-w-5xl rounded-4xl border border-gray-100/50 py-10 px-8 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Brand & Mission */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div>
              <Image src="/yit.svg" alt="Logo" width={40} height={40} />
            </div>
            <Typography variant="span" weight="bold" className="text-lg">
              Young In Tech.
            </Typography>
          </Link>
          <Typography variant="p" size="sm" className="text-zinc-500 text-center md:text-left max-w-sm leading-relaxed">
            Empowering the next generation of tech talents to learn, collaborate, and build the future.
          </Typography>
        </div>

        {/* Copyright & Attribution */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <Typography variant="p" size="sm" weight="medium" className="text-zinc-400">
            &copy; {new Date().getFullYear()} Young In Tech. All rights reserved.
          </Typography>

          <div className="px-4 py-2">
            <Typography variant="span" size="sm" className="text-zinc-500 flex items-center gap-1.5">
              Built with <span className="text-red-500 text-base animate-pulse">❤️</span> by{" "}
              <Link
                href="https://teamcobuild.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-400 hover:opacity-80 transition-opacity"
              >
                Teamcobuild
              </Link>{" "}
              for YIT
            </Typography>
          </div>
        </div>

      </div>
    </footer>
  );
}
