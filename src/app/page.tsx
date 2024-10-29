import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      
      <main>
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Welcome to My Portfolio</h2>
          <div className="container mx-auto px-4">
            <section className="my-8">
              <h2 className="text-2xl font-semibold">
                My personality type is: <strong>Logician</strong>
              </h2>
              <Image 
                  src="/assets/Images/cover.jpg"
                  alt="A description of the image"
                  width={500}
                  height={300}
                  className="my-4"
              />
              <p className="mt-4">
                Logicians gifts include rationality, innovation, and the ability to envision a better future – but they don&apos;t just want to hear what makes them great. 
                Logicians want to find real, meaningful answers to seemingly impossible problems that haunt their imagination.
                Imaginative and curious, Logician personalities can find endless fascination in the workings of their own mind.
                For Logicians, the best conversations are like brainstorming sessions, with plenty of room for unconventional thoughts and off-the-wall what-ifs.
              </p>
              <p className="mt-4">
                Logicians pride themselves on their unique perspectives and vigorous intellect. They can&apos;t help but puzzle over the mysteries of the universe – 
                which may explain why some of the most influential philosophers and scientists of all time have been Logicians. This personality type is fairly rare, 
                but with their creativity and inventiveness, Logicians aren&apos;t afraid to stand out from the crowd.
              </p>
              <p className="mt-4">
                Logicians often lose themselves in thought – which isn&apos;t necessarily a bad thing. People with this personality type hardly ever stop thinking. 
                From the moment they wake up, their minds buzz with ideas, questions, and insights. At times, they may even find themselves conducting full-fledged 
                debates in their own heads. From the outside, Logicians may seem to live in a never-ending daydream. They have a reputation for being pensive, 
                detached, and a bit reserved. That is, until they try to train all of their mental energy on the moment or the person at hand, which can be a bit 
                uncomfortable for everyone. But regardless of which mode they&apos;re in, Logicians are Introverts and tend to get tired out by extensive socializing. 
                After a long day, they crave time alone to consult their own thoughts.
              </p>
              <p className="mt-4 font-semibold">
                Here is a link to my {' '}
                <Link href="https://www.16personalities.com/profiles/d610c8821603d" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Personality Profile
                </Link>
              </p>
              <div className="my-8">
                <h3 className="text-xl font-semibold">
                  My full personality type code is: <strong>INTP-T</strong>
                </h3>
                <p>Logicians are innovative inventors with an unquenchable thirst for knowledge.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {[
                    {
                      title: "Energy",
                      description: "64% Introverted -- 36% Extraverted",
                      details: "Introverted individuals tend to prefer fewer, yet deep and meaningful, social interactions and often feel drawn to calmer environments."
                    },
                    {
                      title: "Mind",
                      description: "52% Intuitive -- 48% Observant",
                      details: "Intuitive individuals are very imaginative, open-minded, and curious. They value originality and focus on hidden meanings and distant possibilities."
                    },
                    {
                      title: "Nature",
                      description: "52% Thinking -- 48% Feeling",
                      details: "Thinking individuals focus on objectivity and rationality, often dismissing emotions in favor of logic. They tend to see effectiveness as more important than social harmony."
                    },
                    {
                      title: "Tactics",
                      description: "44% Judging -- 56% Prospecting",
                      details: "Prospecting individuals are very good at improvising and adapting to opportunities. They tend to be flexible nonconformists who value novelty above stability."
                    },
                    {
                      title: "Identity",
                      description: "49% Assertive -- 51% Turbulent",
                      details: "Turbulent individuals are self-conscious and sensitive to stress. They feel a sense of urgency in their emotions and tend to be success-driven, perfectionistic, and eager to improve."
                    }
                  ].map((trait, index) => (
                    <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold">{trait.title}</h4>
                      <p>{trait.description}</p>
                      <p className="text-gray-600">{trait.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Uncomment this section for latest blog posts */}
        {/* <section className="blog mb-12">
          <h2 className="text-2xl font-semibold">Latest Blog Posts</h2>
          <iframe 
            src="https://bobchronicles.wordpress.com/"
            frameBorder="0"
            scrolling="yes"
            className="w-full h-96"
          />
        </section> */}

        <section className="playlists mb-12">
          <h2 className="text-2xl font-semibold">My Favorite Playlists</h2>
          <div className="space-y-8">
            {[
              {
                title: "My favorite reggae playlist",
                info: "Compilation - Various Artists, 2014, 24 songs, 1 hr 36 min",
                src: "https://open.spotify.com/embed/album/7dAFOkOHkAFiBVodhFdEsP?utm_source=generator&theme=0"
              },
              {
                title: "My favorite pop playlist",
                info: "Playlist - 279 songs, about 17 hr",
                src: "https://open.spotify.com/embed/playlist/1tdcvTHR3jRGGD8rudAJh3?utm_source=generator"
              },
              {
                title: "All the Hits!!",
                info: "Playlist - 100% clássicos, 60 songs, 3 hr 15 min",
                src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3Kdv0IChEm9?utm_source=generator"
              },
              {
                title: "African Heat Presents Best Afro Songs of 2023",
                info: "Playlist - Our editor’s picks for best Afro songs of the year. Cover: Davido, 75 songs, 4 hr",
                src: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdD040nrEzxm?utm_source=generator&theme=0"
              },
              {
                title: "Best of JumpOff 2023",
                info: "Playlist - Editor's pick: The best of JumpOff songs of 2023. Cover: Drake",
                src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWUxNaiMJ01qn?utm_source=generator"
              }
            ].map((playlist, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-semibold">{playlist.title}</h3>
                <div className="text-gray-600">{playlist.info}</div>
                <iframe 
                  style={{borderRadius: "12px"}}
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
      </main>

      <footer className="py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Gichoya Macharia. All rights reserved.</p>
      </footer>
    </div>
  );
}
