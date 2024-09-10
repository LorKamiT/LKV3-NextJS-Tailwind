import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans, fontMono, fontPixel, fontCinzel } from "@/config/fonts";
import Navbar from "../components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/LogoLK.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "min-h-screen antialiased bg-gradient-to-br from-[#ffffff] via-[#f3f3f3] to-[#eeeeee] dark:bg-gradient-to-br dark:from-[#0D1117] dark:via-[#111727] dark:to-[#190c29]",
          fontSans.variable,
          fontMono.variable,
          fontPixel.variable,
          fontCinzel.variable
        )}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
