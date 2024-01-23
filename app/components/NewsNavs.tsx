"use client";
import { categories } from "@/constants";
import { usePathname } from "next/navigation";
import NewsNav from "./NewsNav";

export default function NewsNavs() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };
  return (
    <div
      className="news-navs__container grid items-center grid-cols-4 
    md:grid-cols-7 text-xs md:text-sm gap-2 py-10 max-w-4xl mx-auto"
    >
      {categories.map((category) => (
        <NewsNav
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </div>
  );
}
