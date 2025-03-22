import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mysticprofolio.netlify.app/"),
  title: "Mystic | Editor",
  description:
    "Professional Digital Design/Video Producer from Florida with 3+ years of expertise.",
  keywords: [
    "Video Editor",
    "Portfolio",
    "Edit Portflio",
    "Mystic Edits",
    "Mystic",
    "Edit Tutorial",
    "Video Editing",
    "Video editing",
    "Next.js",
    "ReactNative",
    "Android",
  ],
  openGraph: {
    title: "Mystic | Editor",
    description:
      "Professional Digital Design/Video Producer from Florida with 3+ years of expertise.",
    images: "/OpenGraph.jpg",
  },
  alternates: {
    canonical: "https://mysticprofolio.netlify.app/",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Ibrahim Memon",
              jobTitle: "Digital Design/Video Producer",
              url: "https://mysticprofolio.netlify.app/",
              sameAs: [
                "https://discord.gg/dhvKyd7w5k",
                "https://youtube.com/@mysticsaetutorials",
              ],
            }),
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PRIVATE_GTID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-${process.env.NEXT_PRIVATE_GTID}');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
