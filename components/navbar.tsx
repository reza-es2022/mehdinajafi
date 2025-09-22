import { Navbar as HeroUINavbar, NavbarBrand } from "@heroui/navbar";

export const Navbar = () => {
  return (
    <HeroUINavbar className="bg-white shadow-md px-4">
      <NavbarBrand>
        <img
          src="/logo.jpg" // <-- replace with your logo path
          alt="Company Logo"
          className="h-10 w-auto"
        />
      </NavbarBrand>
    </HeroUINavbar>
  );
};
