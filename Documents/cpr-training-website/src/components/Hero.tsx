import instructorImg from "../assets/instructor.jpg";

const features = [
  {
    label: "Hands-on CPR practice",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    label: "AHA-recognized certification",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    label: "Small-class instruction",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Same-day certification",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function Hero() {
  return (
    <section id="hero" className="bg-paper pt-28 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Text column */}
        <div className="flex-1 lg:max-w-[600px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-ink-200 rounded-full px-4 py-1.5 mb-8 bg-white">
            <span className="w-2 h-2 rounded-full bg-crimson-500 shrink-0" />
            <span className="text-sm text-ink-700">AHA-Recognized Training · Registered Nurse Instructor</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-ink-900 leading-[1.08]">
            BLS certification for{" "}
            <em className="italic text-crimson-500">healthcare professionals</em>
            {" "}— taught the way it's actually used.
          </h1>

          {/* Sub */}
          <p className="mt-5 text-base text-ink-500 leading-relaxed max-w-lg">
            Hands-on Basic Life Support training for nurses, students, EMTs, and
            medical office staff. Led by a Registered Nurse and AHA-certified
            instructor — small classes, real practice, same-day certification.
          </p>

          {/* Feature mini-cards */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2.5 bg-white border border-ink-200 rounded-xl px-3.5 py-3"
              >
                <span className="text-crimson-500 shrink-0">{f.icon}</span>
                <span className="text-sm font-medium text-ink-900">{f.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-7 flex items-center gap-5 flex-wrap">
            <a
              href="https://atlas.heart.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-crimson-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-crimson-600 transition-colors"
            >
              Register for a class →
            </a>
            <a href="#about" className="inline-flex items-center text-sm font-medium text-ocean-600 border border-ocean-300 px-5 py-3 rounded-lg hover:border-ocean-500 hover:text-ocean-700 transition-colors">
              Meet the instructor
            </a>
          </div>
        </div>

        {/* Image column */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[440px]">
            {/* Pink accent block behind bottom-right */}
            <div className="absolute -bottom-4 -right-4 w-4/5 h-3/5 bg-crimson-100 rounded-2xl" />
            {/* Instructor photo */}
            <img
              src={instructorImg}
              alt="Terry Beers, RN — CPR instructor"
              className="relative rounded-2xl w-full object-cover shadow-lg"
            />
            {/* Floating credential card */}
            <div className="absolute bottom-6 -left-4 md:-left-8 bg-white rounded-xl shadow-md px-4 py-3 border border-ink-200 flex items-center gap-3 min-w-[200px]">
              <div className="w-8 h-8 rounded-full bg-crimson-100 flex items-center justify-center shrink-0">
                <svg className="h-4 w-4 text-crimson-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className="font-serif text-sm font-semibold text-ink-900 leading-tight">Terry Beers, RN</p>
                <p className="font-mono text-xs text-ink-500 mt-0.5">AHA Certified · BLS Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
