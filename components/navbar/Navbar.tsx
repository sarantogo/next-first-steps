import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "..";

export const Navbar = () => {
  const navItems = [
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
    { path: "/pricing", name: "Pricing" },
  ];
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link className="flex items-center" href="/">
        <HomeIcon className="mr-2" />
        Home
      </Link>
      <div className="flex-1"></div>
      {navItems.map((navItem) => (
        <ActiveLink
          key={navItem.path}
          path={navItem.path}
          name={navItem.name}
        />
      ))}
    </nav>
  );
};
