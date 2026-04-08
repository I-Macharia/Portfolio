export default function Projects() {
  const projects = [
    {
      name: "AvaCertify",
      status: "MVP",
      statusColor: "bg-green-100 text-green-800",
      link: "https://certificate-issuance-system-rust.vercel.app/",
      problem:
        "Certificate fraud and manual verification processes make credentials unreliable and slow to validate.",
      solution:
        "Built a blockchain-based certification system issuing credentials as NFTs on Avalanche with on-chain verification and revocation.",
      outcome:
        "Won 1st place at Avalanche Codebase Pitch Competition. Smart contract deployed and MVP in progress.",
      stack: "Solidity · Avalanche · FastAPI · IPFS",
    },
    {
      name: "Inventory Management System",
      status: "Production-Ready",
      statusColor: "bg-blue-100 text-blue-800",
      link: "https://github.com/I-Macharia/inventory_system",
      problem:
        "Small retailers lack systems to track inventory, especially for consignment stock and invoice processing.",
      solution:
        "Developed a full inventory + invoice ingestion system with RBAC, authentication, and export pipelines.",
      outcome:
        "Production-ready system being packaged into a white-label SaaS for East African businesses.",
      stack: "FastAPI · React · PostgreSQL · Python",
    },
    {
      name: "Africura",
      status: "Live",
      statusColor: "bg-purple-100 text-purple-800",
      link: "https://github.com/I-Macharia/travel-destination-recommendation-sys",
      problem:
        "Travel platforms lack Africa-focused recommendation systems tailored to local tourism data.",
      solution:
        "Built a hybrid ML engine using TF-IDF + collaborative filtering trained on TripAdvisor data across 20 countries.",
      outcome:
        "Packaged as an API-ready recommendation engine for tourism platforms and NGOs.",
      stack: "Python · scikit-learn · FastAPI",
    },
    {
      name: "Motivate Me",
      status: "In Progress",
      statusColor: "bg-yellow-100 text-yellow-800",
      link: "https://github.com/I-Macharia/Motivate_Me",
      problem:
        "Centralized apps limit ownership of personal content and identity.",
      solution:
        "Designed a Web3 app using Civic Auth + IPFS for decentralized identity and content storage.",
      outcome:
        "Demonstrates real-world application of decentralized identity systems.",
      stack: "Next.js · TypeScript · IPFS · Civic",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 w-full">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">
          Case Studies
        </h1>
        <p className="text-gray-600">
          How I design and ship systems that solve real problems.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 bg-white"
          >
            {/* Title + Status */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{project.name}</h2>
              <span className={`text-xs px-2 py-1 rounded-full font-semibold ${project.statusColor}`}>
                {project.status}
              </span>
            </div>

            {/* Problem */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">
                Problem
              </h3>
              <p className="text-gray-700">{project.problem}</p>
            </div>

            {/* Solution */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">
                Solution
              </h3>
              <p className="text-gray-700">{project.solution}</p>
            </div>

            {/* Outcome */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">
                Outcome
              </h3>
              <p className="text-gray-700">{project.outcome}</p>
            </div>

            {/* Stack */}
            <p className="text-sm text-gray-500 mb-4">
              {project.stack}
            </p>

            {/* CTA */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#024] font-semibold hover:underline text-sm"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-3">
          Need something like this built?
        </h2>
        <p className="text-gray-600 mb-6">
          I design systems that work in production — not just prototypes.
        </p>

        <a
          href="mailto:gichoya.macharia@gmail.com"
          className="bg-[#024] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#036] transition"
        >
          Let’s Talk
        </a>
      </div>
    </div>
  );
}