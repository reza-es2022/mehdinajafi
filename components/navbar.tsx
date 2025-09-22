"use client";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { ThemeSwitch } from "@/components/theme-switch";
import { useEffect } from "react";
export const Navbar = () => {
  useEffect(() => {
    // Force light theme
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-theme", "light");
  }, []);
  return (
    <HeroUINavbar className="bg-white shadow-md px-4">
      <NavbarBrand>
        <img
          src="/logo.jpg" // <-- replace with your logo path
          alt="Company Logo"
          className="h-10 w-auto"
        />
      </NavbarBrand>
      {/* <NavbarItem className="hidden sm:flex gap-2">
        <ThemeSwitch />
      </NavbarItem> */}
    </HeroUINavbar>
  );
};
