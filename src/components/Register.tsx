function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block w-7 h-px bg-crimson-400 shrink-0" />
      <span className="font-mono text-xs uppercase tracking-widest text-crimson-400">{text}</span>
    </div>
  );
}

const classDetails = [
  { label: "Course",        value: "BLS Certification" },
  { label: "Instructor",    value: "Terry Beers, RN" },
  { label: "Format",        value: "In-person, hands-on" },
  { label: "Certification", value: "Same-day, AHA" },
];

function Register() {
  return (
    <section id="register" className="bg-ocean-800 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-14">

        {/* Text */}
        <div className="flex-1">
          <SectionLabel text="Enrollment" />
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-[1.1]">
            Register for a{" "}
            <em className="italic text-crimson-400">BLS class</em>
            {" "}through the American Heart Association.
          </h2>
          <p className="mt-5 text-ocean-200 leading-relaxed max-w-md">
            Class registration is handled directly through the AHA. This ensures
            a secure, official enrollment process — and guarantees your
            certification is recognized nationwide.
          </p>
          <div className="mt-8">
            <a
              href="https://atlas.heart.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-crimson-500 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-crimson-600 transition-colors"
            >
              Register through the AHA →
            </a>
            <p className="mt-3 font-mono text-xs text-ocean-400">
              ↗ Opens AHA Atlas — official enrollment
            </p>
          </div>
        </div>

        {/* Class details card */}
        <div className="w-full lg:w-[380px] shrink-0 bg-ocean-700/60 border border-ocean-600 rounded-2xl p-7">
          <p className="font-mono text-xs uppercase tracking-widest text-crimson-400 mb-6">Class Details</p>
          <ul className="space-y-0">
            {classDetails.map((d, i) => (
              <li
                key={d.label}
                className={`flex items-center justify-between py-4 ${
                  i < classDetails.length - 1 ? "border-b border-ocean-600" : ""
                }`}
              >
                <span className="text-ocean-100 text-sm">{d.label}</span>
                <span className="font-serif font-semibold text-white text-sm text-right">{d.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Register;
