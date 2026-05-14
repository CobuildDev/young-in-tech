import type { Metadata } from "next";
import { Montserrat, Roboto_Slab } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Young in Tech",
  description: "A modern waitlist page built with reusable components and device theme defaults.",
};


import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${robotoSlab.variable} ${montserrat.className} h-full tracking-tighter antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
