import Link from "next/link";

export default function Blog() {
  return (
    <div className="wrapper max-w-4xl mx-auto px-4 py-8">
     
      <main>
        <section className="blog mb-8">
          <iframe 
            src="https://bobchronicles.wordpress.com/"
            frameBorder="0"
            scrolling="yes"
            className="w-full h-[800px] rounded-lg shadow-lg"
          />
        </section>
      </main>

      <footer className="mt-8 text-center">
        <nav>
          <ul className="flex justify-center space-x-6 mb-4">
            <li><Link href="/about" className="text-blue-500 hover:underline">About</Link></li>
            <li><Link href="/" className="text-blue-500 hover:underline">Home</Link></li>
            <li><Link href="/blog" className="text-blue-500 hover:underline">Blogs</Link></li>
            <li><Link href="/contact" className="text-blue-500 hover:underline">Contact Me</Link></li>
            <li><Link href="/projects" className="text-blue-500 hover:underline">Projects</Link></li>
            <li><Link href="/market" className="text-blue-500 hover:underline">Marketplace</Link></li>
          </ul>
        </nav>
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Gichoya Macharia</p>
      </footer>
    </div>
  );
}
