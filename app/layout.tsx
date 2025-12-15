import type { Metadata } from "next";
import { Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ShipLayout from "@/components/layout/ShipLayout";

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keith Salzman - Blockchain & ML Engineer",
  description:
    "Portfolio of Keith Salzman - Blockchain Developer, Machine Learning Engineer, and Full-Stack Developer",
  keywords: [
    "Keith Salzman",
    "Blockchain",
    "Machine Learning",
    "Full-Stack Developer",
    "Web3",
    "AI",
    "Software Engineer",
  ],
  authors: [{ name: "Keith Salzman" }],
  creator: "Keith Salzman",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Keith Salzman - Blockchain & ML Engineer",
    description:
      "Portfolio of Keith Salzman - Blockchain Developer, Machine Learning Engineer, and Full-Stack Developer",
    siteName: "Keith Salzman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keith Salzman - Blockchain & ML Engineer",
    description:
      "Portfolio of Keith Salzman - Blockchain Developer, Machine Learning Engineer, and Full-Stack Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <ShipLayout>{children}</ShipLayout>
      </body>
    </html>
  );
}
