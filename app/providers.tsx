"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as ThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Providers({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <NextUIProvider navigate={router.push}>
          <ThemesProvider attribute="class" defaultTheme="light" {...props}>
            {children}
          </ThemesProvider>
        </NextUIProvider>
      ) : (
        <></>
      )}
    </>
  );
}
