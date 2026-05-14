"use client";

import Link from "next/link";
import { Button } from "./Button";
import { Typography } from "./Typography";
import { Code2 } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-6 z-50 mx-auto mt-6 w-[calc(100%-3rem)] max-w-4xl rounded-full border border-zinc-200 bg-white/80 backdrop-blur-md shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black">
            <Code2 className="h-5 w-5" />
          </div>
          <Typography variant="span" weight="bold" className="text-lg">
            Young In Tech.
          </Typography>
        </Link>
        <div className="flex items-center gap-4">
          <Button as="a" href="/waitlist" variant="primary" size="sm" className="hidden sm:inline-flex">
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}
