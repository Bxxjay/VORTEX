import { useState } from "react";
import { NavLink } from "react-router-dom";

const heroSlides = [
  {
    id: 1,
    label: "Shadow",
    bg: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
  },
  {
    id: 2,
    label: "Phantom",
    bg: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300&q=80",
  },
  {
    id: 3,
    label: "Arctic",
    bg: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&q=80",
  },
  {
    id: 4,
    label: "Stealth",
    bg: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&q=80",
  },
  {
    id: 5,
    label: "Vortex",
    bg: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=300&q=80",
  },
  {
    id: 7,
    label: "Carbon",
    bg: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300&q=80",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  return (
    <>
      <style>{`
        @keyframes shine {
          0%, 100% { left: -75%; opacity: 0.7; }
          50%       { left: 125%; opacity: 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 2px #dc2626, 0 4px 24px rgba(220,38,38,0.5); }
          50%       { box-shadow: 0 0 0 2px #dc2626, 0 6px 36px rgba(220,38,38,0.9); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-text { animation: slideUp 0.7s ease forwards; }

        /* Scrollable thumbnail row on very small screens */
        .thumb-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: none;
          -ms-overflow-style: none;
          justify-content: center;
        }
        .thumb-row::-webkit-scrollbar { display: none; }

        @media (max-width: 400px) {
          .thumb-row { justify-content: flex-start; padding-left: 4px; }
        }
      `}</style>

      <div className="relative w-full min-h-[100svh] overflow-hidden">

        {/* ── BACKGROUND IMAGES ── */}
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: active === i ? 1 : 0, zIndex: active === i ? 1 : 0 }}
          >
            <img
              src={slide.bg}
              alt={slide.label}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>
        ))}

        {/* ── HERO CONTENT ── */}
        <div className="relative z-10 flex flex-col justify-between min-h-[100svh] px-5 sm:px-10 lg:px-16 pt-20 pb-8 sm:pt-28 sm:pb-10">

          {/* ── TEXT BLOCK ── */}
          <div className="hero-text w-full max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto sm:mx-0 text-center sm:text-left mt-4 sm:mt-8">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-red-600/20 border border-red-500/40 text-red-400 mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
              New Drop — {heroSlides[active].label}
            </span>

            {/* Heading */}
            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-4 sm:mb-6">
              Step Into<br />
              <span className="text-red-500">Your Era.</span>
            </h1>

            {/* Subtext */}
            <p className="text-white/60 text-sm sm:text-base lg:text-lg font-medium mb-6 sm:mb-8 max-w-xs sm:max-w-sm mx-auto sm:mx-0 leading-relaxed">
              Engineered for the bold. Built for the streets.
              Find your next signature pair.
            </p>

            {/* CTA Button */}
            <NavLink to="/sneakers">
              <button
                className="relative overflow-hidden bg-red-600 text-white text-[10px] sm:text-xs font-black tracking-widest uppercase px-6 sm:px-8 h-10 sm:h-12 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
              >
                <span className="relative z-10">Check Out The Store!</span>
                <span
                  className="absolute top-0 h-full w-1/3 bg-white/20 -skew-x-12"
                  style={{ animation: "shine 2.5s ease-in-out infinite", left: "-75%" }}
                />
              </button>
            </NavLink>
          </div>

          {/* ── THUMBNAIL CAROUSEL ── */}
          <div className="w-full mt-8 sm:mt-0">

            {/* Slide counter — mobile only */}
            <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase text-center mb-3 sm:hidden">
              {active + 1} / {heroSlides.length}
            </p>

            <div className="thumb-row">
              {heroSlides.map((slide, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setActive(i)}
                    className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 flex-shrink-0 ${
                      isActive
                        ? "border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.6)]"
                        : "border-white/20 hover:border-white/50 opacity-50 hover:opacity-80"
                    }`}
                    style={{
                      /* Smaller on mobile, normal on desktop */
                      width:  isActive ? "clamp(72px, 14vw, 100px)" : "clamp(48px, 10vw, 72px)",
                      height: isActive ? "clamp(88px, 17vw, 120px)" : "clamp(60px, 13vw, 88px)",
                    }}
                    aria-label={`View ${slide.label}`}
                  >
                    <img
                      src={slide.thumb}
                      alt={slide.label}
                      className="w-full h-full object-cover"
                    />

                    {/* Active label */}
                    {isActive && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-1 py-1.5">
                        <p className="text-white text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-center truncate">
                          {slide.label}
                        </p>
                      </div>
                    )}

                    {/* Active red top bar */}
                    {isActive && (
                      <div className="absolute top-0 inset-x-0 h-[3px] bg-red-500 rounded-t-xl" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Dot indicators — mobile only */}
            <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    active === i
                      ? "w-5 h-1.5 bg-red-500"
                      : "w-1.5 h-1.5 bg-white/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}