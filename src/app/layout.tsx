"use client";

import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from 'react-hot-toast';
import ConsentBanner from "@/components/ConsentBanner";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";
import { CookiesProvider } from 'react-cookie';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CookiesProvider>
          {children}
          <AnalyticsWrapper />
          <ConsentBanner />
          <Toaster />
        </CookiesProvider>
      </body>
    </html>
  );
}