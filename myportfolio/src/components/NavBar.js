// src/app/components/NavBar.tsx

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="mt-4">
      <ul className="navigation list-none flex justify-center space-x-4">
        <li>
          <Link 
            href="/about" 
            className="text-[#52024f] font-bold transition-colors duration-500 hover:bg-blue-500 hover:text-[#52024f] p-2 rounded"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            href="/" 
            className="text-[#52024f] font-bold transition-colors duration-500 hover:bg-blue-500 hover:text-[#52024f] p-2 rounded"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/blog" 
            className="text-[#52024f] font-bold transition-colors duration-500 hover:bg-blue-500 hover:text-[#52024f] p-2 rounded"
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link 
            href="/contact" 
            className="text-[#52024f] font-bold transition-colors duration-500 hover:bg-blue-500 hover:text-[#52024f] p-2 rounded"
          >
            Contact Me
          </Link>
        </li>
        <li>
          <Link 
            href="/projects" 
            className="text-[#52024f] font-bold transition-colors duration-500 hover:bg-blue-500 hover:text-[#52024f] p-2 rounded"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            href="/market" 
            className="text-[#52024f] font-bold transition-colors duration-500 hover:bg-blue-500 hover:text-[#52024f] p-2 rounded"
          >
            Marketplace
          </Link>
        </li>
      </ul>
    </nav>
  );
}
