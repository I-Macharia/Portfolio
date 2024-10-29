import Link from "next/link";
import Image from "next/image"; // Add this import

export default function Contact() {
  return (
    <div className="wrapper max-w-4xl mx-auto px-4 py-8">
      <main>
        <section className="contact-item mb-8">
          <h2 className="text-3xl font-semibold mb-4">Contact Details</h2>
          <p className="text-gray-700">Email: <a href="mailto:macharia.gichoya@gmail.com" className="text-blue-500 hover:underline">macharia.gichoya@gmail.com</a></p>
          <p className="text-gray-700">Phone: <span className="text-gray-800">+254 718 338 439</span></p>
          <p className="text-gray-700">Address: <span className="text-gray-800">Nairobi, Kenya</span></p>

          <section className="social-media mt-6">
            <h2 className="text-3xl font-semibold mb-4">Follow Me on Social Media</h2>
            <ul className="flex justify-center space-x-6 social-icons">
              <li>
                <a href="https://web.facebook.com/Macharia.Gichoya/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/Images/facebook-logo.png" // Remove /public from path
                    alt="Facebook"
                    width={50}
                    height={50}
                    className="social-icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/GichoyaIan" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/Images/X-logo.png" // Remove /public from path
                    alt="X"
                    width={50}
                    height={50}
                    className="social-icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/gichoya-macharia/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/Images/linkedin-logo.png" // Remove /public from path
                    alt="LinkedIn"
                    width={50}
                    height={50}
                    className="social-icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/bobby_shoya/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/Images/instagram-logo.png" // Remove /public from path
                    alt="Instagram"
                    width={50}
                    height={50}
                    className="social-icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://t.me/B0bbyB0b" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/Images/telegram-logo.png" // Remove /public from path
                    alt="Telegram"
                    width={50}
                    height={50}
                    className="social-icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/machariagichoya/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/Images/pinterest-logo.png" // Remove /public from path
                    alt="Pinterest"
                    width={50}
                    height={50}
                    className="social-icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://wa.me/+254718338439" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/Images/busniesswhatsapp-logo.png" // Remove /public from path
                    alt="WhatsApp"
                    width={50} 
                    height={50}
                    className="social-icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.tumblr.com/blog/bobbybobsthoughts/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/Images/tumblr-logo.png" // Remove /public from path
                    alt="Tumblr"
                    width={50}
                    height={50}
                    className="social-icon"
                  />
                </a>
              </li>
            </ul>
          </section>
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
