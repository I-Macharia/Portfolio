// src/app/layout.tsx

import NavBar from './components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans m-2 p-5 flex flex-col min-h-screen">
        <header className="bg-[#024] text-white text-center py-2">
          <h1 className="text-3xl font-bold">Gichoya Macharia</h1>
          <h2 className="text-xl">Data Scientist</h2>
        </header>

        {/* Use the NavBar component here */}
        <NavBar />

        <main id="main" className="flex-grow flex flex-col items-center justify-start border border-black w-full p-5">
          {children}
        </main>

        <footer className="bg-[#024] text-white text-center py-4 mt-4">
          <p>&copy; {new Date().getFullYear()} Gichoya Macharia</p>
        </footer>
      </body>
    </html>
  );
}
