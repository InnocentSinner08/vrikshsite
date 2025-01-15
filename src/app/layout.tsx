import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Sitemap from "@/components/sitemap";
import ParticlesBackground from "@/components/particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vriksh",
  description: "Vriksh: Be The Change",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticlesBackground />
        <Header />
        <Navbar />
        {children}
        <Sitemap />
      </body>
    </html>
  );
}
