import Image from "next/image";
import { Button } from "../components/Button";
import { Typography } from "../components/Typography";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-12 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="w-full max-w-5xl rounded-[2rem] border border-zinc-200 bg-white p-10 shadow-2xl shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/20">
        <div className="flex flex-col items-center gap-8 text-center">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <div className="space-y-4">
            <Typography variant="h1" size="2xl" weight="bold" align="center" className="leading-tight">
              A cleaner design system for your product
            </Typography>
            <Typography variant="p" size="lg" weight="normal" align="center" className="max-w-2xl text-zinc-600 dark:text-zinc-400">
              Typography, buttons, and form controls built to work with device theme defaults and reusable design patterns.
            </Typography>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="grid gap-3 sm:grid-cols-3">
            <Button variant="primary" size="lg" className="w-full">
              Primary action
            </Button>
            <Button variant="secondary" size="lg" className="w-full">
              Secondary action
            </Button>
            <Button variant="ghost" size="lg" className="w-full">
              Ghost action
            </Button>
          </div>
          <Button as="a" href="/waitlist" variant="primary" size="lg" className="w-full sm:w-auto">
            Visit waitlist page
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <Typography variant="h2" size="xl" weight="semibold" className="mb-3">
              Typography system
            </Typography>
            <Typography variant="p" size="md" weight="normal" className="text-zinc-600 dark:text-zinc-400">
              Control text with `variant`, `size`, `weight`, `align`, and custom `className` when you need visual harmony.
            </Typography>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <Typography variant="h2" size="xl" weight="semibold" className="mb-3">
              Button tokens
            </Typography>
            <Typography variant="p" size="md" weight="normal" className="text-zinc-600 dark:text-zinc-400">
              Variant, size, full width, and disabled state support give your UI consistent button behavior.
            </Typography>
          </div>
        </div>
      </main>
    </div>
  );
}
