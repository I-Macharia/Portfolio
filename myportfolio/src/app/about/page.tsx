import Link from "next/link";

export default function About() {
  return (
    <div className="wrapper max-w-4xl mx-auto px-4 py-8">
      <main>
        <section className="about-item mb-8">
          <h2 className="text-3xl font-semibold mb-4">Background</h2>
          <div className="about-content text-black-700 space-y-4">
            <p>
              I&apos;m a Web3 builder and ML engineer based in Nairobi, Kenya. I serve as CTO and co-founder
              of AvaCertify — an NFT-based certificate issuance and verification platform on the Avalanche
              blockchain — and as an Operations Engineer at Prodapt. AvaCertify won 1st place at the
              Avalanche Codebase Pitch Competition.
            </p>
            <p>
              My work sits at the intersection of blockchain, data science, and operational systems.
              I&apos;ve shipped production-grade inventory management tools, ML recommendation engines trained
              on African travel data, and Web3 authentication flows using Civic Pass and IPFS. I build
              for real users in African and global markets, not just for portfolios.
            </p>
            <p>
              Outside of engineering, I&apos;m a photographer and photojournalist — which means I think about
              systems and stories simultaneously. I&apos;m also an Ambassador for the Project 360 IWFL Program,
              where I mentor young leaders in community contexts.
            </p>
            <p>
              I write regularly on Substack about Web3, data, and building in Africa.
              If you want to follow the work, subscribe below.
            </p>
            <p className="resume-link">
              <strong>
                View my{" "}
                <Link href="/resume" className="text-blue-500 hover:underline">
                  Resume
                </Link>
              </strong>
            </p>
          </div>

          <h2 className="text-3xl font-semibold mt-8 mb-4">Skills</h2>
          <ul className="list-disc list-inside mb-4 text-black-700 space-y-1">
            <li>Web3 & Blockchain — Solidity, Avalanche (C-Chain), ethers.js, Civic Auth, IPFS</li>
            <li>Backend — FastAPI, Python, SQLAlchemy, PostgreSQL, JWT, Pydantic</li>
            <li>Frontend — Next.js, React, TypeScript, TailwindCSS, TanStack Query</li>
            <li>ML & Data — scikit-learn, Surprise, pandas, NLTK, TF-IDF, collaborative filtering</li>
            <li>Operations — Microsoft Power Platform, data pipelines, reporting automation</li>
            <li>Creative — Photography, photojournalism, visual storytelling</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-8 mb-4">Experience</h2>

          <div className="experience-item mb-4">
            <h3 className="text-xl font-bold">AvaCertify — CTO & Co-founder</h3>
            <p className="text-black-500 text-sm"><em>2024 – Present</em></p>
            <ul className="list-disc list-inside text-black-700 mt-2 space-y-1">
              <li>Architected and shipped NFT-based certificate issuance on Avalanche C-Chain.</li>
              <li>Led technical pitch to win 1st place at the Avalanche Codebase Pitch Competition.</li>
              <li>Driving MVP development toward active users and early revenue.</li>
            </ul>
          </div>

          <div className="experience-item mb-4">
            <h3 className="text-xl font-bold">Prodapt — Operations Engineer</h3>
            <p className="text-black-500 text-sm"><em>2024 – Present</em></p>
            <ul className="list-disc list-inside text-black-700 mt-2 space-y-1">
              <li>Support operational workflows and systems across engineering functions.</li>
              <li>Work with data pipelines, reporting, and process automation tools.</li>
            </ul>
          </div>

          <div className="experience-item mb-4">
            <h3 className="text-xl font-bold">YellowDot — Data Entry Controller & CRM Admin</h3>
            <p className="text-black-500 text-sm"><em>August 2023 – March 2024</em></p>
            <ul className="list-disc list-inside text-black-700 mt-2 space-y-1">
              <li>Migrated and cleaned 1,200+ product records across platforms within tight deadlines.</li>
              <li>Transformed PDF catalogue data into structured formats for website upload.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-semibold mt-8 mb-4">Education</h2>

          <div className="education-item mb-4">
            <h3 className="text-xl font-bold">Moringa School, Nairobi</h3>
            <p className="text-black-500 text-sm"><em>Data Science & Machine Learning — July 2023</em></p>
          </div>

          <div className="education-item mb-4">
            <h3 className="text-xl font-bold">Egerton University, Nakuru</h3>
            <p className="text-black-500 text-sm"><em>Procurement & Supplies Management — December 2017</em></p>
          </div>
        </section>
      </main>

      <footer className="mt-8">
        <nav>
          <ul className="flex flex-wrap justify-center space-x-6 gap-y-2">
            <li><Link href="/about" className="text-blue-500 hover:underline">About</Link></li>
            <li><Link href="/" className="text-blue-500 hover:underline">Home</Link></li>
            <li><Link href="/blog" className="text-blue-500 hover:underline">Blogs</Link></li>
            <li><Link href="/contact" className="text-blue-500 hover:underline">Contact Me</Link></li>
            <li><Link href="/projects" className="text-blue-500 hover:underline">Projects</Link></li>
            <li><Link href="/market" className="text-blue-500 hover:underline">Marketplace</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
