import { useState } from 'react';

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="block w-7 h-px bg-crimson-500 shrink-0" />
      <span className="font-mono text-xs uppercase tracking-widest text-crimson-500">{text}</span>
    </div>
  );
}

const testimonials = [
  {
    quote: "Highly recommend — clear, hands-on Pediatric CPR training from a very skilled instructor.",
    attribution: "Pediatric OT Professional",
    initial: "P",
  },
  {
    quote: "This instructor does an outstanding job teaching CPR in a way that's easy to understand and remember under pressure.",
    attribution: "Firefighter / Paramedic",
    initial: "F",
  },
  {
    quote: "Easy to follow, hands-on and focused on real situations — highly recommend.",
    attribution: "Cardiac Rehab Nurse",
    initial: "C",
  },
  {
    quote: "I'm a nurse and I prefer hands-on training. Terry's focus on practicing skills like AED pad application made the training much more realistic.",
    attribution: "Registered Nurse, Wound Care Clinic",
    initial: "R",
  },
  {
    quote: "Very good teacher — makes the course understandable.",
    attribution: "Registered Nurse, Home Health",
    initial: "R",
  },
  {
    quote: "I prefer classroom learning. This class is hands-on, visual and more personal — highly recommend!",
    attribution: "Nurse, Outpatient Setting",
    initial: "N",
  },
  {
    quote: "The course was very thorough and direct. I would like to see more hands-on courses like this. Fast and efficient.",
    attribution: "Registered Nurse, ICU",
    initial: "R",
  },
  {
    quote: "Really, the best class I've taken in my career. Thank you for not offering it virtual! I came home to my cup not half empty — I came home to it full again because of your class.",
    attribution: "Registered Nurse, Outpatient Pain Clinic",
    initial: "R",
  },
];

const PAGE_SIZE = 3;

function chunk<T>(arr: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < arr.length; i += size) pages.push(arr.slice(i, i + size));
  return pages;
}

const pages = chunk(testimonials, PAGE_SIZE);

function TestimonialCard({ quote, attribution, initial }: { quote: string; attribution: string; initial: string }) {
  return (
    <div className="bg-white border border-ink-200 rounded-2xl p-7 flex flex-col h-full">
      <div className="mb-5">
        <span className="font-serif text-3xl leading-none text-crimson-300">"</span>
      </div>
      <p className="text-ink-700 leading-relaxed flex-1">{quote}</p>
      <div className="mt-6 pt-5 border-t border-ink-200 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-ocean-200 flex items-center justify-center shrink-0">
          <span className="font-serif text-sm font-semibold text-ocean-700">{initial}</span>
        </div>
        <p className="font-serif text-sm font-semibold text-ink-900">{attribution}</p>
      </div>
    </div>
  );
}

function Testimonials() {
  const [page, setPage] = useState(0);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(pages.length - 1, p + 1));

  return (
    <section id="testimonials" className="bg-ocean-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel text="What Students Say" />
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink-900">
            From the people who've been in the class.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pages[page].map((item, i) => (
            <TestimonialCard key={i} {...item} />
          ))}
        </div>

        {/* Carousel controls */}
        {pages.length > 1 && (
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border border-ink-200 bg-white flex items-center justify-center text-ink-500 hover:border-crimson-300 hover:text-crimson-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    i === page ? "w-6 bg-crimson-500" : "w-2 bg-ink-200 hover:bg-ink-300"
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={page === pages.length - 1}
              className="w-10 h-10 rounded-full border border-ink-200 bg-white flex items-center justify-center text-ink-500 hover:border-crimson-300 hover:text-crimson-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
