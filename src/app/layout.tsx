import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DirectionalyStickyHeader from "@/components/DirectionalyStickyHeader";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CompTIA - Study",
  description: "A web resource for people striving to get a CompTIA Cert",
};

type RootProperties = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootProperties) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <DirectionalyStickyHeader />
          {children}
      </body>
    </html>
  );
}
