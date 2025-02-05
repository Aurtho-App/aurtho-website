import type { Metadata } from "next";
import localFont from "next/font/local";
import { CircleBackground } from "@/components/CircleBackground";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aurtho",
  description: "The future of [your app description]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <CircleBackground 
          numberOfCircles={30} 
          minRadius={400} 
          maxRadius={400}
          blurStrength={50}
          opacity={1.0}
          speed={2.0}
        />
        {children}
      </body>
    </html>
  );
}
