import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4">

      {/* Hero */}
      <section className="w-full text-center py-12 mb-6">
        <p className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-3">
          Nairobi, Kenya · Web3 · ML · Fullstack
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#024] mb-4 leading-tight">
          Gichoya Macharia
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          CTO of AvaCertify — building NFT-based certification on Avalanche.
          ML engineer. Photojournalist. I ship real things across Web3, data,
          and operational systems.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/projects"
            className="bg-[#024] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#036] transition-colors text-sm"
          >
            View Projects
          </Link>

          <Link
            href="/market"
            className="border border-[#024] text-[#024] font-semibold px-6 py-3 rounded-lg hover:bg-[#024] hover:text-white transition-colors text-sm"
          >
            Work With Me
          </Link>

          <a
            href="https://machariagichoya.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 text-gray-600 font-semibold px-6 py-3 rounded-lg hover:border-gray-500 transition-colors text-sm"
          >
            Subscribe on Substack
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-t border-gray-200 mb-12" />

      {/* Personality */}
      <section className="mb-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          My personality type is: <strong>Logician</strong>
        </h2>

        <div className="space-y-4 text-gray-700 max-w-3xl mx-auto">
          <p>
            Logicians gifts include rationality, innovation, and the ability
            to envision a better future – but they don&apos;t just want to hear
            what makes them great. Logicians want to find real, meaningful
            answers to seemingly impossible problems.
          </p>

          <p>
            They pride themselves on unique perspectives and intellectual depth,
            often exploring complex ideas and abstract concepts.
          </p>

          <p>
            They tend to live in their minds — constantly analyzing, questioning,
            and refining ideas — while valuing independence and deep focus.
          </p>
        </div>

        <p className="mt-6 font-semibold">
          <Link
            href="https://www.16personalities.com/profiles/d610c8821603d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Full Personality Profile
          </Link>
        </p>

        <div className="mt-10">
          <h3 className="text-xl font-bold mb-2">
            INTP-T
          </h3>
          <p className="text-gray-600">
            Innovative, analytical, and driven by curiosity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[
              {
                title: "Energy",
                description: "64% Introverted — 36% Extraverted",
              },
              {
                title: "Mind",
                description: "52% Intuitive — 48% Observant",
              },
              {
                title: "Nature",
                description: "52% Thinking — 48% Feeling",
              },
              {
                title: "Tactics",
                description: "44% Judging — 56% Prospecting",
              },
              {
                title: "Identity",
                description: "49% Assertive — 51% Turbulent",
              },
            ].map((trait, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg"
              >
                <h4 className="font-semibold">{trait.title}</h4>
                <p className="text-gray-600 text-sm">{trait.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Playlists */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          My Favorite Playlists
        </h2>

        <div className="space-y-8">
          {[
            {
              title: "My favorite reggae playlist",
              info: "24 songs · 1 hr 36 min",
              src: "https://open.spotify.com/embed/album/7dAFOkOHkAFiBVodhFdEsP?utm_source=generator&theme=0",
            },
            {
              title: "My favorite pop playlist",
              info: "279 songs · ~17 hr",
              src: "https://open.spotify.com/embed/playlist/1tdcvTHR3jRGGD8rudAJh3",
            },
            {
              title: "All the Hits!!",
              info: "60 songs · 3 hr 15 min",
              src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3Kdv0IChEm9",
            },
          ].map((playlist, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4"
            >
              <h3 className="text-lg font-semibold mb-1">
                {playlist.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {playlist.info}
              </p>

              <iframe
                style={{ borderRadius: "12px" }}
                src={playlist.src}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
