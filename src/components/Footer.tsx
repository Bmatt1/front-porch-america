export default function Footer() {
  return (
    <footer className="relative py-14 px-6 bg-charcoal-900 border-t border-porch-cream/5">
      <div className="max-w-5xl mx-auto">
        {/* Social links */}
        <div className="flex justify-center gap-6 mb-8">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@FRONTPORCHAMERICA-g7b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-porch-cream/40 hover:text-porch-red transition-colors duration-300"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.9 31.9 0 000 12a31.9 31.9 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.9 31.9 0 0024 12a31.9 31.9 0 00-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
            </svg>
          </a>
          {/* Twitter/X */}
          <a
            href="#"
            className="text-porch-cream/40 hover:text-porch-red transition-colors duration-300"
            aria-label="X (Twitter)"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="#"
            className="text-porch-cream/40 hover:text-porch-red transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>

        {/* Logo text */}
        <div className="text-center mb-6">
          <span className="font-display text-xl text-porch-cream/70 font-bold tracking-wide">
            Front Porch America
          </span>
        </div>

        {/* Copyright & production */}
        <div className="text-center space-y-2">
          <p className="text-porch-cream/30 text-sm">
            &copy; {new Date().getFullYear()} Front Porch America. All rights reserved.
          </p>
          <p className="text-porch-cream/20 text-xs">
            Hosted by Rick White &middot; A production of Front Porch America
          </p>
        </div>

        {/* Bottom accent */}
        <div className="flex justify-center mt-8 gap-2">
          <div className="w-8 h-0.5 bg-porch-red/30 rounded" />
          <div className="w-8 h-0.5 bg-porch-cream/10 rounded" />
          <div className="w-8 h-0.5 bg-porch-blue/30 rounded" />
        </div>
      </div>
    </footer>
  );
}
