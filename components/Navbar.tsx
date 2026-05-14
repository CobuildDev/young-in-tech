"use client";

import Link from "next/link";
import { Button } from "./Button";
import { Typography } from "./Typography";
import { Code2 } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-6 z-50 mx-auto mt-6 w-[calc(100%-3rem)] max-w-4xl rounded-full border border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div>
            <Image src="/yit.svg" alt="Logo" width={40} height={40} />
          </div>
          <Typography variant="span" weight="bold" className="text-lg">
            Young In Tech.
          </Typography>
        </Link>
        <div className="flex items-center gap-4">
          <Button as="a" href="/waitlist" variant="primary" size="sm" className="hidden bg-orange-400 sm:inline-flex">
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}
