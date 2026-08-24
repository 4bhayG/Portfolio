import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name}, ${profile.role}`,
  description:
    "Computer Engineering student at NIT Kurukshetra. Backend and systems work, most recently on Splunk SOAR connectors at Cisco.",
  openGraph: {
    title: `${profile.name}, ${profile.role}`,
    description:
      "Backend and systems engineering. Splunk SOAR connector migration at Cisco, a Redis server in C++, and real-time collaborative tooling.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <noscript>
          {/* Scroll reveals render at opacity 0 until Motion hydrates.
              Without JS the content must still be visible. */}
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-surface text-primary">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[var(--radius)] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-contrast"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
