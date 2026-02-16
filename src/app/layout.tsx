import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { BackgroundColorizer } from "@/components/BackgroundColorizer";

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
});

export const metadata: Metadata = {
  title: "tests | byamadeus",
  description: "experiments by amadeus",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      noarchive: true,
      nosnippet: true,
    },  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased`}>
        <BackgroundColorizer />
        {children}
      </body>
    </html>
  );
}