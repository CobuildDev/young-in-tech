import { Button } from "../components/Button";
import { Typography } from "../components/Typography";
import { ArrowRight, Code, Users, Rocket, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-50 font-sans selection:bg-purple-100 dark:selection:bg-purple-900/50">

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 dark:opacity-20">
          <div className="absolute border border-zinc-100 dark:border-zinc-800 rounded-full w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw]" />
          <div className="absolute border border-zinc-100 dark:border-zinc-800 rounded-full w-[100vw] h-[100vw] md:w-[70vw] md:h-[70vw]" />
          <div className="absolute border border-zinc-100 dark:border-zinc-800 rounded-full w-[140vw] h-[140vw] md:w-[100vw] md:h-[100vw]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center flex flex-col items-center">
          <Typography variant="h1" align="center" className="!text-4xl sm:!text-5xl md:!text-[5rem] !font-bold !tracking-tight !leading-[1.1] mb-6">
            Build your future.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#000000] via-[#522700] to-[#F97316]">Young In Tech.</span>
          </Typography>

          <Typography variant="p" align="center" className="max-w-2xl text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
            We're building a vibrant community to help young people accelerate their careers in tech through learning, collaboration, mentorship, and opportunities.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button as="a" href="/waitlist" variant="primaryone" size="lg" className="rounded-full h-14 px-8 text-base">
              Join the waitlist
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button as="a" href="#features" variant="secondary" size="lg" className="rounded-full h-14 px-8 text-base bg-white dark:bg-zinc-900">
              Learn more
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="!text-3xl md:!text-4xl !font-bold mb-4">
              Everything you need to grow
            </Typography>
            <Typography variant="p" align="center" className="text-zinc-500 max-w-xl mx-auto">
              Our platform is designed to give you the resources, connections, and guidance necessary to succeed in the tech industry.
            </Typography>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <Code className="h-6 w-6" />
              </div>
              <Typography variant="h3" className="!text-xl !font-semibold mb-3">Skill Building</Typography>
              <Typography variant="p" className="text-zinc-600 dark:text-zinc-400">
                Access curated learning paths, project ideas, and resources to level up your technical skills.
              </Typography>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-6 w-6" />
              </div>
              <Typography variant="h3" className="!text-xl !font-semibold mb-3">Community & Networking</Typography>
              <Typography variant="p" className="text-zinc-600 dark:text-zinc-400">
                Connect with like-minded peers, find mentors, and collaborate on real-world projects.
              </Typography>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6">
                <Rocket className="h-6 w-6" />
              </div>
              <Typography variant="h3" className="!text-xl !font-semibold mb-3">Career Opportunities</Typography>
              <Typography variant="p" className="text-zinc-600 dark:text-zinc-400">
                Get access to exclusive job boards, internships, and freelance gigs tailored for young professionals.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto bg-zinc-900 dark:bg-zinc-900 rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden border border-zinc-800">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-black-950 via-orange-400/30 to-transparent blur-3xl rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="relative z-10">
            <Typography variant="h2" align="center" className="!text-4xl md:!text-5xl !font-bold !text-white mb-6 leading-tight">
              Ready to kickstart your tech journey?
            </Typography>
            <Typography variant="p" align="center" className="!text-zinc-300 max-w-2xl mx-auto mb-10 text-lg">
              Join thousands of young Nigerians who are already building the future. Secure your spot on our waitlist to get early access.
            </Typography>
            <Button as="a" href="/waitlist" className="!bg-white text-zinc-950 hover:bg-zinc-100 rounded-full h-14 px-10 text-base font-semibold transition-transform hover:scale-105 active:scale-95">
              Request Early Access
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
