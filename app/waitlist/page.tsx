import { Button } from "../../components/Button";
import { Typography } from "../../components/Typography";

export default function WaitlistPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden text-zinc-900 font-sans selection:bg-purple-100">
      {/* Concentric circles background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-75 md:opacity-100">
        <div className="absolute border border-zinc-100 rounded-full w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw]" />
        <div className="absolute border border-zinc-100 rounded-full w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw]" />
        <div className="absolute border border-zinc-100 rounded-full w-[110vw] h-[110vw] md:w-[70vw] md:h-[70vw]" />
        <div className="absolute border border-zinc-100 rounded-full w-[140vw] h-[140vw] md:w-[90vw] md:h-[90vw]" />
        <div className="absolute border border-zinc-100 rounded-full w-[170vw] h-[170vw] md:w-[110vw] md:h-[110vw]" />
        <div className="absolute border border-zinc-100 rounded-full w-[200vw] h-[200vw] md:w-[130vw] md:h-[130vw]" />
      </div>

      {/* Floating tags */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none max-w-[1400px] mx-auto w-full">
        {/* Templates */}
        <div className="absolute top-[20%] left-[5%] md:left-[10%] bg-white px-4 py-2.5 rounded-2xl shadow-sm shadow-zinc-200/50 border border-zinc-100 flex items-center gap-3">
          <div className="w-5 h-5 bg-blue-50 text-blue-500 rounded-md flex items-center justify-center">
            {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg> */}
          </div>
          <span className="text-sm font-semibold text-zinc-700">Networking</span>
        </div>


        <div className="absolute bottom-[25%] left-[5%] md:left-[12%] bg-white px-4 py-2.5 rounded-2xl shadow-sm shadow-zinc-200/50 border border-zinc-100 flex items-center gap-3">
          <div className="w-5 h-5 bg-purple-50 text-purple-500 rounded-md flex items-center justify-center">
            {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> */}
          </div>
          <span className="text-sm font-semibold text-zinc-700">Learning</span>
        </div>


        <div className="absolute top-[15%] right-[5%] md:right-[15%] bg-white px-4 py-2.5 rounded-2xl shadow-sm shadow-zinc-200/50 border border-zinc-100 flex items-center gap-3">
          <div className="w-5 h-5 bg-orange-50 text-orange-500 rounded-md flex items-center justify-center">
            {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> */}
          </div>
          <span className="text-sm font-semibold text-zinc-700">Building</span>
        </div>


        <div className="absolute bottom-[30%] right-[5%] md:right-[12%] bg-white px-4 py-2.5 rounded-2xl shadow-sm shadow-zinc-200/50 border border-zinc-100 flex items-center gap-3">
          <div className="w-5 h-5 bg-red-50 text-red-500 rounded-md flex items-center justify-center">
            {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg> */}
          </div>
          <span className="text-sm font-semibold text-zinc-700">Career Growth</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6">
        <Typography variant="h1" align="center" className="!text-5xl sm:!text-7xl md:!text-[5.5rem] !font-bold !tracking-tight !text-zinc-900 !leading-[1.1] mb-6">
          Young in Tech
        </Typography>

        <Typography variant="p" align="center" className="mt-2 text-[1.05rem] md:text-lg text-zinc-500 max-w-2xl mx-auto">
          We're building a community to help young people grow in tech through learning, collaboration, mentorship, and opportunities. Be part of the movement!</Typography>

        <form className="mt-10 flex flex-col gap-3 w-full max-w-sm mx-auto relative pointer-events-auto">
          {/* Full name */}
          <input
            type="text"
            placeholder="Full Name"
            required
            className="flex-1 w-full px-6 py-4 rounded-full border border-zinc-200 bg-zinc-50/50 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all text-sm text-zinc-900 placeholder:text-zinc-400"
          />
          {/* email */}
          <input
            type="email"
            placeholder="designer@example.com"
            required
            className="flex-1 w-full px-6 py-4 rounded-full border border-zinc-200 bg-zinc-50/50 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all text-sm text-zinc-900 placeholder:text-zinc-400"
          />
          {/* whatsapp number */}
          <input
            type="tel"
            placeholder="Whastapp Number"
            required
            className="flex-1 w-full px-6 py-4 rounded-full border border-zinc-200 bg-zinc-50/50 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all text-sm text-zinc-900 placeholder:text-zinc-400"
          />
          <Button type="submit" variant="primaryone" size="lg" className="w-full bg-orange-400 rounded-full shadow-md whitespace-nowrap">
            Request early access
          </Button>
        </form>

        <div className="mt-12 flex items-center justify-center gap-6 text-zinc-400 pointer-events-auto">
          <a href="#" className="hover:text-zinc-900 transition-colors" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          <a href="#" className="hover:text-zinc-900 transition-colors" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className="hover:text-zinc-900 transition-colors" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z" /></svg>
          </a>
        </div>
      </main>
    </div>
  );
}
