// src/app/components/NavBar.tsx

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
              className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-md
                ${pathname === href
                  ? "bg-white/20 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/10"
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
