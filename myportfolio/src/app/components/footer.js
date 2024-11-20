// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#024] text-white py-6 mt-10">
      <nav>
        <ul className="flex flex-wrap justify-center space-x-4">
          <li>
            <Link href="/about" className="text-white hover:underline">About</Link>
          </li>
          <li>
            <Link href="/" className="text-white hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/blog" className="text-white hover:underline">Blogs</Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:underline">Contact Me</Link>
          </li>
          <li>
            <Link href="/projects" className="text-white hover:underline">Projects</Link>
          </li>
          <li>
            <Link href="/market" className="text-white hover:underline">Marketplace</Link>
          </li>
          <li>
            <a 
              href="https://machariagichoya.substack.com/" 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe
            </a>
          </li>
        </ul>
      </nav>
      <p className="text-center mt-4">&copy; {new Date().getFullYear()} Gichoya Macharia</p>
    </footer>
  );
}
