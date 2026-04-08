"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/market", label: "Marketplace" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <nav className="mt-4">
      <ul className="navigation list-none flex flex-wrap justify-center gap-1">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`font-bold transition-colors duration-200 px-3 py-2 rounded text-sm
                ${pathname === href
                  ? "bg-[#024] text-white"
                  : "text-[#52024f] hover:bg-[#024] hover:text-white"
                }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
