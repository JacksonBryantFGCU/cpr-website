import { useState, useEffect } from "react";
import logo from "../assets/wellon-cpr-logo.png";

const navLinks = [
  { label: "About",          href: "#about" },
  { label: "What to Expect", href: "#learn" },
  { label: "Pricing",        href: "#pricing" },
  { label: "Classes",        href: "#register" },
  { label: "Reviews",        href: "#testimonials" },
  { label: "Contact",        href: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-ink-200 shadow-sm"
          : "bg-paper border-b border-ink-200"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo + wordmark */}
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="WellOn CPR logo" className="h-12 w-auto" style={{ mixBlendMode: 'multiply' }} />
          <p className="hidden sm:block font-serif text-lg font-semibold text-ink-900">WellOn CPR</p>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-700 hover:text-crimson-500 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://atlas.heart.org"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-crimson-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-crimson-600 transition-colors"
        >
          Register →
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          <span className={`block w-6 h-0.5 bg-ink-900 transition-transform origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-ink-900 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-ink-900 transition-transform origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-ink-200 bg-paper">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-6 py-3 text-sm font-medium text-ink-700 hover:text-crimson-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-6 py-3">
              <a
                href="https://atlas.heart.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-crimson-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-crimson-600 transition-colors"
              >
                Register →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
