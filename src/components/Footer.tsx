'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#060606',
        borderTop: '1px solid rgba(245,245,220,0.06)',
      }}
    >
      {/* Top separator accent */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(196,30,58,0.4), transparent)' }} />

      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Col 1: Show info */}
          <div>
            <p
              className="font-display text-lg font-bold mb-2"
              style={{ color: 'var(--color-cream)' }}
            >
              Front Porch America
            </p>
            <p
              className="font-body text-sm mb-1"
              style={{ color: 'rgba(245,245,220,0.4)', lineHeight: 1.7 }}
            >
              Hosted by Rick White
            </p>
            <p
              className="font-body text-sm"
              style={{ color: 'rgba(245,245,220,0.3)', lineHeight: 1.7 }}
            >
              Est. 2020 · Real conversations from the American front porch.
            </p>
          </div>

          {/* Col 2: Links */}
          <div>
            <p
              className="font-body text-xs uppercase mb-4"
              style={{
                color: 'rgba(245,245,220,0.35)',
                letterSpacing: '0.15em',
              }}
            >
              Explore
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Watch on YouTube', href: 'https://www.youtube.com/@FRONTPORCHAMERICA-g7b', external: true },
                { label: 'Episodes', href: '#episodes' },
                { label: 'About the Show', href: '#about' },
                { label: 'Join Newsletter', href: '#community' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="font-body text-sm transition-colors duration-200"
                    style={{ color: 'rgba(245,245,220,0.5)' }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLAnchorElement).style.color = 'var(--color-cream)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLAnchorElement).style.color = 'rgba(245,245,220,0.5)';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social */}
          <div>
            <p
              className="font-body text-xs uppercase mb-4"
              style={{
                color: 'rgba(245,245,220,0.35)',
                letterSpacing: '0.15em',
              }}
            >
              Follow Along
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.youtube.com/@FRONTPORCHAMERICA-g7b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-sm transition-colors duration-200"
                style={{ color: 'rgba(245,245,220,0.5)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-cream)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,245,220,0.5)';
                }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube
              </a>
              <a
                href="#"
                className="flex items-center gap-3 font-body text-sm transition-colors duration-200"
                style={{ color: 'rgba(245,245,220,0.5)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-cream)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,245,220,0.5)';
                }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                X / Twitter
              </a>
              <a
                href="#"
                className="flex items-center gap-3 font-body text-sm transition-colors duration-200"
                style={{ color: 'rgba(245,245,220,0.5)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-cream)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,245,220,0.5)';
                }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(245,245,220,0.06)' }}
        >
          <p
            className="font-body text-xs"
            style={{ color: 'rgba(245,245,220,0.25)' }}
          >
            &copy; {year} Front Porch America. All rights reserved.
          </p>
          <a
            href="https://connectinfinitely.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs transition-colors duration-200"
            style={{ color: 'rgba(245,245,220,0.2)' }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.color = 'var(--color-cream)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.color = 'rgba(245,245,220,0.2)';
            }}
          >
            Built by Infinite Horizons Solutions
          </a>
        </div>
      </div>
    </footer>
  );
}
