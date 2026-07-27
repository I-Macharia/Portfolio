// src/app/resume/page.tsx
import Link from "next/link";
import ResumeViewerLoader from "@/components/ResumeViewerLoader";

export default function Resume() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="rounded-lg bg-white p-4 shadow-md md:p-6">
          <ResumeViewerLoader />
        </div>
      </main>

      <footer className="bg-gray-800 py-4 text-white">
        <nav>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-4">
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-300 hover:text-white">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                Contact Me
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-300 hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/market" className="text-gray-300 hover:text-white">
                Marketplace
              </Link>
            </li>
            <li>
              <a
                href="https://machariagichoya.substack.com/"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe
              </a>
            </li>
          </ul>
        </nav>
        <p className="mt-2 text-center">
          &copy; {new Date().getFullYear()} Gichoya Macharia
        </p>
      </footer>
    </div>
  );
}
