import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4">

      {/* HERO */}
      <section className="text-center py-16">
        <p className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-3">
          Nairobi · Web3 · ML · Fullstack
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#024] mb-4 leading-tight">
          I build systems that scale businesses.
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          CTO @ AvaCertify. I design and ship production-ready Web3, ML, and backend systems — from NFT certification platforms to inventory SaaS used by real businesses.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/market"
            className="bg-[#024] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#036] transition-colors text-sm"
          >
            Work With Me
          </Link>

          <Link
            href="/projects"
            className="border border-[#024] text-[#024] font-semibold px-6 py-3 rounded-lg hover:bg-[#024] hover:text-white transition-colors text-sm"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* TRUST / STACK */}
      <section className="text-center mb-12">
        <p className="text-sm text-gray-500 mb-4">
          Tech stack & tools I use in production
        </p>

        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {[
            "Python",
            "FastAPI",
            "React",
            "Next.js",
            "Solidity",
            "Avalanche",
            "MongoDB",
            "PostgreSQL",
            "Docker",
          ].map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 border border-gray-200 rounded-full text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS (OUTCOME-FOCUSED) */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Selected Work
        </h2>

        <div className="space-y-6">

          {/* AvaCertify */}
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-bold mb-1">
              AvaCertify (Web3 Startup)
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              NFT-based certification on Avalanche
            </p>
            <p className="text-gray-700 mb-3">
              Built smart contracts and backend infrastructure for issuing,
              verifying, and revoking certificates on-chain. Designed for
              institutions and scalable credential verification.
            </p>
            <p className="text-sm text-gray-500">
              Stack: Solidity · FastAPI · IPFS · Avalanche
            </p>
          </div>

          {/* Inventory */}
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-bold mb-1">
              Inventory Management System
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              SaaS for retailers & consignment businesses
            </p>
            <p className="text-gray-700 mb-3">
              Built a full inventory + stock tracking system with invoice
              ingestion, product management, and export tools. Designed for
              monetization and white-label deployment.
            </p>
            <p className="text-sm text-gray-500">
              Stack: FastAPI · MongoDB · React
            </p>
          </div>

          {/* Africura */}
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-bold mb-1">
              Africura (ML Recommendation Engine)
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Travel recommendations across 20 African countries
            </p>
            <p className="text-gray-700 mb-3">
              Trained ML models on TripAdvisor data to deliver personalized
              travel recommendations. Packaged as an API for tourism platforms.
            </p>
            <p className="text-sm text-gray-500">
              Stack: Python · ML · FastAPI
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">
          Let’s build something useful.
        </h2>

        <p className="text-gray-600 mb-6">
          If you need a system that actually works in production — not just a demo — let’s talk.
        </p>

        <a
          href="mailto:gichoya.macharia@gmail.com"
          className="bg-[#024] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#036] transition-colors text-sm"
        >
          Get in Touch
        </a>
      </section>

    </div>
  );
}