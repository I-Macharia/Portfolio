// src/app/resume/page.tsx
import Link from "next/link";

export default function Resume() {
  return (
    <div className="flex flex-col min-h-screen">
    
      <main className="flex-grow container mx-auto my-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <section className="blog-iframe">
            <iframe 
              src="https://onedrive.live.com/embed?resid=DB3A14197928C44E%211205&authkey=!AEU7Mi9jR-VkFrU&em=2" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              className="rounded"
            />
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
            <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
            <li><Link href="/blog" className="text-gray-300 hover:text-white">Blogs</Link></li>
            <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Me</Link></li>
            <li><Link href="/projects" className="text-gray-300 hover:text-white">Projects</Link></li>
            <li><Link href="/market" className="text-gray-300 hover:text-white">Marketplace</Link></li>
            <li><a href="https://machariagichoya.substack.com/" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">Subscribe</a></li>
          </ul>
        </nav>
        <p className="text-center">&copy; {new Date().getFullYear()} Gichoya Macharia</p>
      </footer>
    </div>
  );
}
