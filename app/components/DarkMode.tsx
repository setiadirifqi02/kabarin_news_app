"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export function DarkMode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="dark-mode__button cursor-pointer">
      {theme === "light" ? (
        <MoonIcon
          className="h-8 w-8 bg-amber-200 text-amber-600 p-1 
          rounded-full hover:bg-amber-100 hover:text-amber-500 
          hover:scale-110  transition-transform duration-200 ease-in-out"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <SunIcon
          className="h-8 w-8 bg-amber-200 text-amber-600 p-1 
          rounded-full hover:bg-amber-100 hover:text-amber-500 
          hover:scale-110  transition-transform duration-200 ease-in-out"
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
}
