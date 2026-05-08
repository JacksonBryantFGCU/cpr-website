import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20,  suffix: "+", label: "Years experience" },
  { value: 500, suffix: "+", label: "Students certified" },
  { value: 100, suffix: "%", label: "Same-day certification" },
];

function useCountUp(target: number, active: boolean, duration = 1000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, active, duration]);
  return count;
}

function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, active);
  return (
    <div className="text-center">
      <p className="font-mono text-4xl md:text-5xl font-medium text-white">
        {count}{suffix}
      </p>
      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-crimson-200">{label}</p>
    </div>
  );
}

function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-crimson-500 py-16 px-6">
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} active={active} />
        ))}
      </div>
    </section>
  );
}

export default Stats;
