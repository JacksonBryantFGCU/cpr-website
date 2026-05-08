function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="block w-7 h-px bg-crimson-500 shrink-0" />
      <span className="font-mono text-xs uppercase tracking-widest text-crimson-500">{text}</span>
    </div>
  );
}

const modules = [
  {
    category: "Hands-on",
    title: "Hands-On CPR Practice",
    description:
      "Practice on training manikins with real-time instructor feedback to build muscle memory and the confidence to act when the moment comes.",
    icon: (
      <svg className="h-6 w-6 text-crimson-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    category: "Recognized",
    title: "AHA-Recognized Certification",
    description:
      "Earn an American Heart Association BLS certification accepted by hospitals, EMS, and healthcare organizations nationwide.",
    icon: (
      <svg className="h-6 w-6 text-crimson-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    category: "Personal",
    title: "Small-Class Instruction",
    description:
      "Small class sizes mean personalized attention — no rushing, no shortcuts. Every student masters each skill before leaving.",
    icon: (
      <svg className="h-6 w-6 text-crimson-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    category: "Same-day",
    title: "Same-Day Certification",
    description:
      "Complete your course and walk away certified the same day — no waiting, no delays, no follow-up appointments.",
    icon: (
      <svg className="h-6 w-6 text-crimson-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function WhatYoullLearn() {
  return (
    <section id="learn" className="bg-ocean-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel text="What to Expect" />
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink-900">
            A class built around hands-on<br className="hidden md:block" /> practice and real-world readiness.
          </h2>
          <p className="mt-4 text-ink-500 max-w-xl mx-auto leading-relaxed">
            Every class is structured to give you direct, supportive instruction — the
            kind of focused, in-person training that turns first-timers into confident
            responders.
          </p>
        </div>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {modules.map((m) => (
            <div key={m.title} className="bg-white border border-ink-200 rounded-2xl p-7">
              <p className="font-mono text-xs text-ink-400 tracking-wider mb-5">{m.category}</p>
              <div className="w-12 h-12 rounded-full bg-crimson-100 flex items-center justify-center mb-5">
                {m.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-ink-900 mb-2">{m.title}</h3>
              <p className="text-ink-500 leading-relaxed text-sm">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatYoullLearn;
