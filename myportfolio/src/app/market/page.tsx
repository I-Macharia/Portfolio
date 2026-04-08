export default function Market() {
  const services = [
    {
      title: "Small Business Website",
      price: "$150 setup + $50/mo",
      turnaround: "3–5 days",
      description:
        "A clean, mobile-first one-page website for your physical business. Includes your services, location, contact details, and WhatsApp/social links. No templates that look like everyone else — built to convert foot traffic into online presence.",
      ideal: "Beauty shops, salons, retail stores, service providers",
      cta: "https://wa.me/+254718338439",
    },
    {
      title: "Inventory Management System",
      price: "Custom pricing",
      turnaround: "Consultation required",
      description:
        "A production-grade inventory and stock management platform tailored for small retailers. Handles consignment stock, invoice uploads, product management, and PDF/Excel exports. White-label deployment available for distributors.",
      ideal: "Retailers, wholesalers, consignment shops in East Africa",
      cta: "mailto:gichoya.macharia@gmail.com",
    },
    {
      title: "ML Recommendation Engine (Africura)",
      price: "License / API access",
      turnaround: "Consultation required",
      description:
        "A ready-to-integrate travel recommendation engine trained on TripAdvisor data from 20 African countries. Available for licensing by tourism boards, NGOs, and travel startups. FastAPI-ready for direct integration.",
      ideal: "Tourism boards, travel startups, NGOs in Africa",
      cta: "mailto:gichoya.macharia@gmail.com",
    },
    {
      title: "Web3 / Blockchain Consulting",
      price: "From $500",
      turnaround: "Scoped per project",
      description:
        "Smart contract development, NFT-based systems, Avalanche integrations, and Web3 architecture consulting. Built for companies entering the blockchain space who need a technical co-pilot — not a generic agency.",
      ideal: "Startups, institutions, fintech companies",
      cta: "mailto:gichoya.macharia@gmail.com",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 w-full">
      <h2 className="text-3xl font-semibold mb-2">Marketplace</h2>
      <p className="text-gray-500 mb-8 text-sm">
        Services and products available for hire, license, or partnership.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-[#024] font-semibold mb-1">
                {service.price}
              </p>
              <p className="text-xs text-gray-400 mb-3">
                Turnaround: {service.turnaround}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                {service.description}
              </p>
              <p className="text-xs text-gray-500 italic">
                Best for: {service.ideal}
              </p>
            </div>

            {/* ✅ FIXED: added missing <a> */}
            <a
              href={service.cta}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-[#024] text-white text-sm text-center font-semibold px-4 py-2 rounded-lg hover:bg-[#036] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
