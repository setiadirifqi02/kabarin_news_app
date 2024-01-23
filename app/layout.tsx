import type { Metadata } from "next";
import "./globals.css";

import NavBar from "./components/NavBar";
import NewsNavs from "./components/NewsNavs";
import SearchBox from "./components/SearchBox";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "KabarIn",
  description: "Latest World Information for you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-zinc-950 transition-all duration-700">
        <Providers>
          <NavBar />
          <NewsNavs />
          <SearchBox />
          <div className="max-w-4xl mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
