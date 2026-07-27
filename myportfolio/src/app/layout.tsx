// Local fallback NavBar to avoid module not found for './components/NavBar'
function NavBar() {
  return (
    <nav className="py-3">
      <div className="flex gap-6 text-sm">
        {['/', '/about', '/projects', '/market', '/blog', '/contact'].map((href, i) => (
          <a key={i} href={href} className="hover:opacity-100 transition-opacity text-white/90">
            {['Home', 'About', 'Projects', 'Market', 'Blog', 'Contact'][i]}
          </a>
        ))}
      </div>
    </nav>
  );
}

import './globals.css';

export const metadata = {
  title: 'Gichoya Macharia — Web3 Builder & ML Engineer',
  description: 'CTO of AvaCertify. Building production-grade Web3, ML, and fullstack systems from Nairobi.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>

        {/* Header */}
        <header style={{ background: 'var(--navy)' }} className="text-white px-6 py-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div>
              <p className="text-lg font-bold tracking-tight" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
                Gichoya Macharia
              </p>
              <p className="text-xs opacity-60 tracking-widest uppercase mt-0.5">
                CTO · Web3 · ML · Nairobi
              </p>
            </div>
            <a
              href="https://machariagichoya.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block text-xs font-semibold border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-[var(--navy)] transition-colors"
            >
              Subscribe →
            </a>
          </div>
        </header>

        {/* Nav */}
        <div style={{ background: 'var(--navy)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="max-w-5xl mx-auto">
            <NavBar />
          </div>
        </div>

        {/* Page content */}
        <main className="flex-grow w-full">
          {children}
        </main>

        {/* Footer */}
        <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.7)' }} className="py-8 mt-16">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: 'white' }} className="text-base">
              Gichoya Macharia
            </p>
            <div className="flex gap-6 text-xs opacity-70">
              {['/', '/about', '/projects', '/market', '/blog', '/contact'].map((href, i) => (
                <a key={i} href={href} className="hover:opacity-100 transition-opacity" style={{ color: 'inherit' }}>
                  {['Home', 'About', 'Projects', 'Market', 'Blog', 'Contact'][i]}
                </a>
              ))}
            </div>
            <p className="text-xs opacity-50">&copy; {new Date().getFullYear()}</p>
          </div>
        </footer>

      </body>
    </html>
  );
}