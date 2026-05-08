const siteLinks = [
  { label: "About the instructor",    href: "#about" },
  { label: "What to expect",          href: "#learn" },
  { label: "Classes & registration",  href: "#register" },
  { label: "Reviews",                 href: "#testimonials" },
];

function Footer() {
  return (
    <footer className="bg-ink-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-ink-700">

          {/* Brand */}
          <div>
            <p className="font-serif text-xl font-semibold text-white">WellOn CPR</p>
            <p className="mt-3 text-sm text-ink-400 leading-relaxed max-w-xs">
              BLS &amp; CPR certification taught hands-on by a Registered Nurse
              and AHA-certified instructor. Same-day certification, recognized
              nationwide.
            </p>
          </div>

          {/* Site links */}
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest text-ink-500 mb-4">Site</h5>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest text-ink-500 mb-4">Contact</h5>
            <ul className="space-y-2">
              <li>
                <a href="mailto:tbeers10@gmail.com" className="text-sm text-ink-400 hover:text-white transition-colors">
                  tbeers10@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:8155405353" className="text-sm text-ink-400 hover:text-white transition-colors">
                  815-540-5353
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1B9tdimmLc/?mibextid=wwXlfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-400 hover:text-white transition-colors"
                >
                  Facebook / WellOnCPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-ink-500">
            &copy; {new Date().getFullYear()} WellOn CPR. All rights reserved.
          </p>
          <p className="font-mono text-xs text-ink-500 text-center max-w-md">
            Class registration is conducted through the American Heart
            Association. WellOn CPR is not directly affiliated with the AHA.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
