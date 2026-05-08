function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block w-7 h-px bg-crimson-500 shrink-0" />
      <span className="font-mono text-xs uppercase tracking-widest text-crimson-500">{text}</span>
    </div>
  );
}

const credentials = [
  {
    label: "Registered Nurse",
    sub: "Active clinical experience informs every class.",
    icon: (
      <svg className="h-5 w-5 text-ink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    label: "Hands-On CPR Training",
    sub: "Manikins, real-time correction, muscle memory.",
    icon: (
      <svg className="h-5 w-5 text-ink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    label: "Same-Day Certification",
    sub: "Walk out certified — recognized nationwide.",
    icon: (
      <svg className="h-5 w-5 text-ink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function About() {
  return (
    <section id="about" className="bg-paper py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">

        {/* Left column */}
        <div className="lg:w-[360px] shrink-0">
          <SectionLabel text="About the Instructor" />
          <h2 className="font-serif text-4xl font-semibold text-ink-900 leading-[1.15]">
            Taught with the patience of a nurse — and the rigor of an emergency.
          </h2>
          <div className="mt-8 flex flex-col gap-3">
            {credentials.map((c) => (
              <div key={c.label} className="flex items-start gap-4 bg-white border border-ink-200 rounded-xl px-4 py-3.5">
                <span className="mt-0.5 shrink-0">{c.icon}</span>
                <div>
                  <p className="font-serif text-sm font-semibold text-ink-900">{c.label}</p>
                  <p className="text-sm text-ink-500 mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1">
          <div className="text-ink-700 leading-relaxed space-y-5">
            <p className="drop-cap">
              My classes emphasize hands-on learning, allowing students to practice
              critical skills such as high-quality CPR, airway management, and
              team-based response under direct instructor guidance. Classroom
              instruction ensures immediate feedback, skill correction, and
              meaningful interaction — creating a supportive learning environment
              where students can ask questions and gain confidence. This
              face-to-face approach leads to stronger skill retention and a deeper
              understanding of life-saving techniques.
            </p>
            <p>
              I'm known for clear explanations, an excellent teaching style, and strong
              student–instructor interaction, ensuring every participant feels prepared
              and competent by the end of the course. Whether you're renewing your
              certification or obtaining BLS for the first time, my goal is to make the
              learning experience efficient, engaging, and practical.
            </p>
            <p>
              For the convenience of busy healthcare professionals, same-day
              certification is provided upon successful course completion. Students
              leave not only certified, but confident in their ability to respond
              effectively during cardiac and respiratory emergencies.
            </p>
          </div>

          {/* Pull-quote */}
          <div className="mt-10 pt-8 border-t border-ink-200">
            <p className="font-serif text-xl italic text-ink-700 leading-snug">
              "Choose professional instruction you can trust — focused on quality,
              confidence, and real-world readiness."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
