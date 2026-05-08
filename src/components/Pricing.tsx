function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="block w-7 h-px bg-crimson-500 shrink-0" />
      <span className="font-mono text-xs uppercase tracking-widest text-crimson-500">{text}</span>
    </div>
  );
}

const checkIcon = (
  <svg className="h-4 w-4 text-crimson-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const plans = [
  {
    label: "Full Classroom",
    price: "$90",
    description: "Complete in-person BLS certification with full classroom instruction and hands-on skills training.",
    features: [
      "Initial and renewal classes",
      "Classroom + hands-on skills",
      "Small class size",
      "Real-time instructor–student interaction",
      "Same-day certification",
    ],
    highlighted: true,
  },
  {
    label: "Skills Only",
    price: "$70",
    description: "Focused hands-on skills session for those who have completed the online portion.",
    features: [
      "Small class size",
      "Same-day certification",
      "Manikins with feedback devices",
      "Personalized hands-on instruction",
    ],
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel text="Pricing" />
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink-900">
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 text-ink-500 max-w-xl mx-auto leading-relaxed">
            Choose the class format that fits your needs. Both options include
            same-day AHA certification and small-group instruction.
          </p>
          <p className="mt-3 font-mono text-xs text-ink-400">
            Payment accepted via cash or online payment platforms — credit cards are not accepted.
          </p>
        </div>

        {/* Two-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.label}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-ink-900 border border-ink-700"
                  : "bg-white border border-ink-200"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-crimson-500 text-white font-mono text-xs uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              {/* Plan name */}
              <p className={`font-mono text-xs uppercase tracking-widest mb-4 ${plan.highlighted ? "text-crimson-400" : "text-ink-400"}`}>
                {plan.label}
              </p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-3">
                <span className={`font-serif text-5xl font-semibold ${plan.highlighted ? "text-white" : "text-ink-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm mb-2 ${plan.highlighted ? "text-ocean-300" : "text-ink-400"}`}>/ person</span>
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-7 ${plan.highlighted ? "text-ocean-200" : "text-ink-500"}`}>
                {plan.description}
              </p>

              {/* Divider */}
              <div className={`h-px mb-7 ${plan.highlighted ? "bg-ink-700" : "bg-ink-100"}`} />

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    {checkIcon}
                    <span className={`text-sm ${plan.highlighted ? "text-ocean-100" : "text-ink-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://atlas.heart.org"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-lg transition-colors ${
                  plan.highlighted
                    ? "bg-crimson-500 text-white hover:bg-crimson-600"
                    : "bg-ink-900 text-white hover:bg-ink-800"
                }`}
              >
                Register through the AHA →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
