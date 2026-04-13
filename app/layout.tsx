import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { detail } from "@/utils/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL! || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: detail.seo.title,
    template: "%s | Vishwajeet Kumar",
  },

  description: detail.seo.description,
  keywords: detail.seo.keywords,
  authors: [{ name: detail.seo.author }],

  openGraph: {
    ...detail.seo.openGraph,
    url: siteUrl,
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Vishwajeet Kumar Portfolio",
      },
    ],
  },

  twitter: {
    ...detail.seo.twitter,
    images: ["/profile.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#0A0A0A] antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vishwajeet Kumar",
              url: siteUrl,
              image: `${siteUrl}/profile.png`,
              sameAs: [
                detail.profile.social.github,
                detail.profile.social.linkedin,
              ],
              jobTitle: "MERN Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Full Stack Developer",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
