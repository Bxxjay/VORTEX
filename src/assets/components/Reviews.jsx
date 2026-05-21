import { useState, useEffect, useRef } from "react";

const reviews = [
  {
    id: 1,
    name: "Amara O.",
    rating: 5,
    text: "Absolutely exceptional service. The attention to detail was unmatched and delivery was faster than expected.",
    date: "March 2025",
    tag: "Verified Buyer",
  },
  {
    id: 2,
    name: "James K.",
    rating: 4,
    text: "Great experience overall. The team was professional and the quality of work exceeded my expectations.",
    date: "February 2025",
    tag: "Verified Buyer",
  },
  {
    id: 3,
    name: "Sofia R.",
    rating: 5,
    text: "Phenomenal. I've used many services but this one stands out completely. Will definitely be returning.",
    date: "January 2025",
    tag: "Repeat Customer",
  },
  {
    id: 4,
    name: "David M.",
    rating: 4,
    text: "Very smooth process from start to finish. Communication was clear and the results speak for themselves.",
    date: "December 2024",
    tag: "Verified Buyer",
  },
  {
    id: 5,
    name: "Chidinma E.",
    rating: 5,
    text: "Top-tier quality. You can feel the care that went into every step. Highly recommend to anyone looking for the best.",
    date: "November 2024",
    tag: "Repeat Customer",
  },
];

const StarRating = ({ rating, max = 5 }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: max }).map((_, i) => (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={i < rating ? "#dc2626" : "none"}
        stroke={i < rating ? "#dc2626" : "#555"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

export default function Reviews({ isDark }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const intervalRef = useRef(null);
  const total = reviews.length;

  const goTo = (index, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 350);
  };

  const next = () => goTo((current + 1) % total, "next");
  const prev = () => goTo((current - 1 + total) % total, "prev");

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [current]);

  const review = reviews[current];

  return (
    <>
      <style>{`
        @keyframes shine {
          0%, 100% { left: -75%; opacity: 0.7; }
          50%       { left: 125%; opacity: 0; }
        }
        @keyframes slideNext {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slidePrev {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .slide-next { animation: slideNext 0.35s ease forwards; }
        .slide-prev { animation: slidePrev 0.35s ease forwards; }
      `}</style>

      <section className={`w-full transition-colors duration-300 ${isDark ? "bg-[#0a0a0a]" : "bg-[#f0f0f0]"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

          {/* ── HEADER ── */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">

            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 border ${
              isDark
                ? "bg-white/5 border-white/10 text-white/60"
                : "bg-black/5 border-black/10 text-black/50"
            }`}>
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-red-500" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              What people say
            </div>

            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 ${
              isDark ? "text-white" : "text-black"
            }`}>
              Client <span className="text-red-500">Reviews</span>
            </h2>

            {/* Counter */}
            <p className={`text-xs font-bold tracking-[0.3em] uppercase font-mono ${
              isDark ? "text-white/30" : "text-black/30"
            }`}>
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
          </div>

          {/* ── REVIEW CARD ── */}
          <div className="max-w-2xl mx-auto">
            <div
              className={`rounded-2xl sm:rounded-3xl border p-6 sm:p-8 lg:p-10 ${
                !animating ? (direction === "next" ? "slide-next" : "slide-prev") : "opacity-0"
              } ${isDark ? "bg-[#111] border-white/8" : "bg-white border-black/8"}`}
            >
              {/* Top row — tag + rating badge */}
              <div className="flex items-center justify-between mb-6">
                <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full ${
                  isDark ? "bg-white/5 text-white/40 border border-white/10" : "bg-black/5 text-black/40 border border-black/10"
                }`}>
                  {review.tag}
                </span>
                <span className="bg-red-600 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full">
                  {review.rating}.0 / 5
                </span>
              </div>

              {/* Quote mark */}
              <div className="text-6xl sm:text-7xl leading-none text-red-500 opacity-20 font-serif mb-0 -mt-2">
                "
              </div>

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Review text */}
              <p className={`text-base sm:text-lg leading-relaxed mb-8 italic ${
                isDark ? "text-white/80" : "text-black/70"
              }`}>
                {review.text}
              </p>

              {/* Divider + author */}
              <div className={`flex items-center justify-between pt-5 border-t ${
                isDark ? "border-white/8" : "border-black/8"
              }`}>
                <div className="flex items-center gap-3">
                  {/* Avatar circle */}
                  <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className={`text-sm font-black ${isDark ? "text-white" : "text-black"}`}>
                      {review.name}
                    </p>
                    <p className={`text-[11px] font-mono ${isDark ? "text-white/30" : "text-black/30"}`}>
                      {review.date}
                    </p>
                  </div>
                </div>

                {/* Verified icon */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
            </div>

            {/* ── NAVIGATION ── */}
            <div className="flex items-center justify-center gap-4 mt-8">

              {/* Prev */}
              <button
                onClick={prev}
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 hover:border-red-500 hover:text-red-500 active:scale-95 ${
                  isDark
                    ? "border-white/10 bg-white/5 text-white"
                    : "border-black/10 bg-black/5 text-black"
                }`}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > current ? "next" : "prev")}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 h-2.5 bg-red-500"
                        : isDark
                          ? "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                          : "w-2.5 h-2.5 bg-black/20 hover:bg-black/40"
                    }`}
                  />
                ))}
              </div>

              {/* Next */}
              <button
                onClick={next}
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 hover:border-red-500 hover:text-red-500 active:scale-95 ${
                  isDark
                    ? "border-white/10 bg-white/5 text-white"
                    : "border-black/10 bg-black/5 text-black"
                }`}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}