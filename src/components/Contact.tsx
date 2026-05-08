function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block w-7 h-px bg-crimson-500 shrink-0" />
      <span className="font-mono text-xs uppercase tracking-widest text-crimson-500">{text}</span>
    </div>
  );
}

const contactItems = [
  {
    label: "EMAIL",
    value: "tbeers10@gmail.com",
    href: "mailto:tbeers10@gmail.com",
    external: false,
    icon: (
      <svg className="h-5 w-5 text-crimson-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "PHONE",
    value: "815-540-5353",
    href: "tel:8155405353",
    external: false,
    icon: (
      <svg className="h-5 w-5 text-crimson-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "FACEBOOK",
    value: "WellOn CPR",
    href: "https://www.facebook.com/share/1B9tdimmLc/?mibextid=wwXlfr",
    external: true,
    icon: (
      <svg className="h-5 w-5 text-crimson-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

function Contact() {
  return (
    <section id="contact" className="bg-paper py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

        {/* Left text */}
        <div className="lg:w-[340px] shrink-0">
          <SectionLabel text="Get in Touch" />
          <h2 className="font-serif text-4xl font-semibold text-ink-900 leading-[1.15]">
            Questions before you register? Reach out.
          </h2>
          <p className="mt-5 text-ink-500 leading-relaxed">
            Have questions about upcoming classes, group bookings, or
            certification? I'm happy to help — message, call, or find me
            on Facebook.
          </p>
        </div>

        {/* Right contact cards */}
        <div className="flex-1 flex flex-col gap-4">
          {contactItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center gap-5 bg-white border border-ink-200 rounded-2xl px-6 py-5 hover:border-crimson-200 hover:shadow-sm transition-all duration-200"
            >
              {/* Icon circle */}
              <div className="w-11 h-11 rounded-full bg-crimson-100 flex items-center justify-center shrink-0 group-hover:bg-crimson-200 transition-colors">
                {item.icon}
              </div>
              {/* Label + value */}
              <div className="flex-1 min-w-0">
                <p className="font-mono text-xs text-ink-400 uppercase tracking-widest">{item.label}</p>
                <p className="font-serif text-base font-medium text-ink-900 mt-0.5">{item.value}</p>
              </div>
              {/* Arrow */}
              <svg className="h-4 w-4 text-ink-300 group-hover:text-crimson-400 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
