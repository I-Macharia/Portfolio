import Link from "next/link";

export default function Projects() {
  return (
    <div className="wrapper">
      <header>
        <div className="header-content">
          <h1>Projects</h1>
          <h2>Data Science and Machine Learning Projects</h2>
        </div>
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
      </header>

      <main>
        <section className="project-item">
          <h2>Project 1: Data Analysis</h2>
          <p>Description of project 1...</p>

          <h2>Project 2: Machine Learning Model</h2>
          <p>Description of project 2...</p>

          <h2>Project 3: Data Visualization</h2>
          <p>Description of project 3...</p>
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