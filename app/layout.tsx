import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Kabuage Portfolio",
  description: "Project portfolio of Michael Kabuage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MQK3QHJG" />
      <GoogleAnalytics gaId="G-TFPEMZ1VS1" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
