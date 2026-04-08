// import Link from "next/link";
export default function Projects() {
  const projects = [
    {
      name: "AvaCertify",
      tags: ["Web3", "Avalanche", "NFT", "TypeScript", "Solidity"],
      status: "MVP",
      statusColor: "bg-green-100 text-green-800",
      link: "https://certificate-issuance-system-rust.vercel.app/",
      description:
        "We built AvaCertify to eliminate certificate fraud by issuing, verifying, and revoking credentials as NFTs on the Avalanche blockchain. \
        Institutions get tamper-proof, on-chain verification without third-party intermediaries. Won 1st place at the Avalanche Codebase Pitch Competition — smart contract live, full MVP in progress.",
    },
    {
      name: "Inventory Management System",
      tags: ["FastAPI", "React", "PostgreSQL", "JWT", "Python"],
      status: "Production-Ready",
      statusColor: "bg-blue-100 text-blue-800",
      link: "https://github.com/I-Macharia/inventory_system",
      description:
        "A production-grade inventory system built for small retailers handling consignment stock, invoice uploads (PDF/Excel), and multi-user access control. \
        The FastAPI backend features Argon2 auth, RBAC, rate limiting, and full export pipelines. \
        Currently being packaged as a white-label SaaS for East African retail businesses.",
    },
    {
      name: "Africura",
      tags: ["ML", "Python", "scikit-learn", "FastAPI", "Streamlit"],
      status: "Live",
      statusColor: "bg-purple-100 text-purple-800",
      link: "https://github.com/I-Macharia/travel-destination-recommendation-sys",
      description:
        "Africura recommends African travel destinations using a hybrid ML engine — TF-IDF content-based filtering combined with collaborative filtering (SVD, KNNWithMean) trained on TripAdvisor data from 20 countries. \
        Built for tourism boards, NGOs, and travel startups that need intelligent, Africa-first recommendation infrastructure.",
    },
    {
      name: "Motivate Me",
      tags: ["Next.js", "Civic Auth", "IPFS", "TypeScript", "Web3"],
      status: "In Progress",
      statusColor: "bg-yellow-100 text-yellow-800",
      link: "https://github.com/I-Macharia/Motivate_Me",
      description:
        "A Web3 motivation app where users authenticate via Civic Pass and store personalized content on IPFS via Pinata. \
        Built on Next.js 15 with a SQLite persistence layer — designed to demonstrate decentralized identity and content ownership in a consumer-facing context.",
    },
    {
      name: "Movie Recommendation System",
      tags: ["Python", "scikit-learn", "Collaborative Filtering", "ML"],
      status: "Complete",
      statusColor: "bg-gray-100 text-gray-700",
      link: "https://i-macharia-movie-recommender-app-hd51mp.streamlit.app/",
      description:
        "A hybrid recommendation engine combining demographic, content-based, and collaborative filtering approaches to surface personalized movie suggestions.\
        Built in Python using pandas and the Surprise library — demonstrates practical ML recommendation architecture and serves as a consulting demo for data-driven product teams.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 w-full">
      <h2 className="text-3xl font-semibold mb-2">Projects</h2>
      <p className="text-gray-500 mb-8 text-sm">
        Production code. Real users. Shipped under pressure.
      </p>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
              <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${project.statusColor}`}>
                {project.status}
              </span>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
