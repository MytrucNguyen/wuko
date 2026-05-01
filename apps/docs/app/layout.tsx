import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { Footer } from "@/components/shell/footer";
import { Header } from "@/components/shell/header";
import { MobileNavProvider } from "@/components/shell/mobile-nav-provider";

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
  title: "VexKit — A themeable React component library",
  description:
    "Accessible, composable, themeable React components distributed as a shadcn-compatible registry.",
};

const themeScript = `(function(){try{var t=localStorage.getItem('vex-theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased flex min-h-screen flex-col">
        <MobileNavProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MobileNavProvider>
      </body>
    </html>
  );
}
