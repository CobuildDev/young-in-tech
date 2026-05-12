import Link from "next/link";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Typography } from "../../components/Typography";

export default function WaitlistPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-12 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="w-full max-w-3xl rounded-[2rem] border border-zinc-200 bg-white p-10 shadow-2xl shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/20">
        <div className="flex flex-col gap-8 text-center">
          <div className="space-y-3">
            <Typography variant="h1" size="2xl" weight="bold" className="leading-tight">
              Join the waitlist
            </Typography>
            <Typography variant="p" size="lg" weight="normal" className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">
              Reserve your spot using your name, email, and phone number. We’ll notify you first when the experience is ready.
            </Typography>
          </div>

          <form className="grid gap-5" method="post">
            <Input label="Full name" name="name" placeholder="Jane Doe" required />
            <Input label="Email address" type="email" name="email" placeholder="jane@example.com" required />
            <Input label="Phone number" type="tel" name="phone" placeholder="(555) 123-4567" required />
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Join the waitlist
            </Button>
          </form>

          <Typography variant="p" size="sm" weight="normal" className="text-zinc-500 dark:text-zinc-400">
            Please use your device’s default theme settings to view the page in light or dark mode.
          </Typography>

          <Link href="/" className="mx-auto mt-2 inline-flex rounded-full border border-zinc-300 bg-transparent px-5 py-3 text-sm font-medium text-zinc-950 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-500">
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
