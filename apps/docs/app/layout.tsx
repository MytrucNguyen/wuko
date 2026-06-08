import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { ConditionalFooter } from "@/components/shell/conditional-footer";
import { Header } from "@/components/shell/header";
import { MobileNavDrawer } from "@/components/shell/mobile-nav-drawer";
import { MobileNavProvider } from "@/components/shell/mobile-nav-provider";
import { SearchDialog } from "@/components/shell/search-dialog";
import { SearchProvider } from "@/components/shell/search-provider";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wuko.dev"),
  title: "Wuko | A themeable React component library",
  description:
    "Accessible, composable, themeable React components distributed as a shadcn-compatible registry.",
  openGraph: {
    title: "Wuko | A themeable React component library",
    description:
      "Accessible, composable, themeable React components distributed as a shadcn-compatible registry.",
    url: "https://wuko.dev",
    siteName: "Wuko",
    images: [
      {
        url: "/brand/wuko.png", // ideally a 1200x630 image
        width: 1200,
        height: 630,
        alt: "Wuko",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wuko | A themeable React component library",
    description:
      "Accessible, composable, themeable React components distributed as a shadcn-compatible registry.",
    images: ["/brand/wuko.png"],
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('wuko-theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased flex min-h-screen flex-col">
        <SearchProvider>
          <MobileNavProvider>
            <Header />
            <SearchDialog />
            <MobileNavDrawer />
            <main className="flex-1">{children}</main>
            <ConditionalFooter />
          </MobileNavProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
