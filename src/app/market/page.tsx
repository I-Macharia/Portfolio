import Link from "next/link";

export default function Market() {
  return (
    <div className="wrapper">
      <header>
        <div className="header-content">
          <h1>Marketplace</h1>
          <h2>Products and Services</h2>
        </div>
        <nav>
          <ul className="navigation">
            <li><Link href="/about">About</Link ></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blogs</Link></li>
            <li><Link href="/contact">Contact Me</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/market">Marketplace</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="market-item">
          <h2>Product 1</h2>
          <p>Description of product 1...</p>

          <h2>Product 2</h2>
          <p>Description of product 2...</p>

          <h2>Product 3</h2>
          <p>Description of product 3...</p>
        </section>
      </main>

      <footer>
        <nav>
          <ul className="navigation">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blogs</Link></li>
            <li><Link href="/contact">Contact Me</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/market">Marketplace</Link></li>
          </ul>
        </nav>
        <p>&copy; {new Date().getFullYear()} Gichoya Macharia</p>
      </footer>
    </div>
  );
}