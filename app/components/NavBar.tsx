"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  NavbarMenuToggle,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { DarkMode } from "./DarkMode";
import { categories } from "@/constants";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-gray-100 dark:bg-zinc-950"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:flex text-amber-500"
        />
      </NavbarContent>

      <NavbarContent className=" gap-4" justify="center">
        <NavbarItem>
          <NavbarBrand>
            <Link href="/" color="foreground">
              <h1 className="text-md md:text=xl">
                The <span className="text-amber-600">KABARIN</span> News
              </h1>
            </Link>
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <DarkMode />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className="bg-amber-200 text-amber-600"
            size="sm"
            radius="full"
            href="#"
            variant="flat"
          >
            Subscribe
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-gray-100 dark:bg-zinc-950">
        {categories.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-amber-500 capitalize"
              href={`/news/${item}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
