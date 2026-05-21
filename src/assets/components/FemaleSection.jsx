import { useNavigate } from "react-router-dom";
import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "images/largeb.jpg",
    badge: "New",
    category: "Women's Sneakers",
    title: "Elegant steps for the modern woman",
    desc: "Crafted for her. Every silhouette blends feminine grace with street-ready edge — from dawn to dusk.",
    priceFrom: "$50.00",
    priceTo: "$190.00",
  },
  {
    id: 2,
    image: "images/larged.jpg",
    badge: "Hot",
    category: "Street Queens",
    title: "Own the block in every pair",
    desc: "Bold. Fearless. Unapologetic. Our street queen collection is built for women who lead, not follow.",
    priceFrom: "$65.00",
    priceTo: "$230.00",
  },
  {
    id: 3,
    image: "images/w3.jpg",
    badge: "Limited",
    category: "Exclusive Her Drop",
    title: "Limited drops made just for her",
    desc: "Rare. Refined. Made for the woman who knows her worth. These drops don't wait — and neither should you.",
    priceFrom: "$130.00",
    priceTo: "$360.00",
  },
  {
    id: 4,
    image: "images/w4.jpg",
    badge: "New",
    category: "Everyday Glam",
    title: "Comfort meets glam every single day",
    desc: "From coffee runs to city strolls — these pairs keep up with her pace without skipping a beat.",
    priceFrom: "$55.00",
    priceTo: "$175.00",
  },
  {
    id: 5,
    image: "images/w5.jpg",
    badge: "Sale",
    category: "Classic Femme",
    title: "Timeless feminine style never fades",
    desc: "The classics, reimagined for her. Restocked and refined — because great style should never be out of reach.",
    priceFrom: "$40.00",
    priceTo: "$150.00",
  },
];

export default function FemaleSection({ isDark }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const slide = slides[active];

  const badgeColor =
    slide.badge === "Sale"    ? "bg-green-500"  :
    slide.badge === "Hot"     ? "bg-orange-500" :
    slide.badge === "Limited" ? "bg-purple-600" :
                                "bg-black";

  return (
    <>
      <style>{`
        @keyframes shine {
          0%, 100% { left: -75%; opacity: 0.7; }
          50%       { left: 125%; opacity: 0; }
        }
        @keyframes collection-glow {
          0%, 100% { box-shadow: 0 0 0 2px #dc2626, 0 4px 20px rgba(220,38,38,0.45); }
          50%       { box-shadow: 0 0 0 2px #dc2626, 0 6px 32px rgba(220,38,38,0.85); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 2px #dc2626, 0 4px 20px rgba(220,38,38,0.45); }
          50%       { box-shadow: 0 0 0 2px #dc2626, 0 6px 32px rgba(220,38,38,0.85); }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes imgFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .slide-text-f { animation: fadeSlide 0.4s ease forwards; }
        .slide-img-f  { animation: imgFade 0.5s ease forwards; }
      `}</style>

      <div className={`w-full transition-colors duration-300 ${isDark ? "bg-[#0a0a0a]" : "bg-[#f5f5f5]"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

          {/* ── HEADER ── */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div>
              {/* Spinning badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 sm:mb-5 border ${
                isDark
                  ? "bg-white/5 border-white/10 text-white/70"
                  : "bg-black/5 border-black/10 text-black/60"
              }`}>
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-red-500 animate-spin"
                  style={{ animationDuration: "4s" }}
                  fill="currentColor"
                >
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
                Her Collections
              </div>

              {/* Heading */}
              <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight ${
                isDark ? "text-white" : "text-black"
              }`}>
                Feminine power
                <br />
                <span className="text-red-500">styled for</span> her world
              </h2>
            </div>

            {/* Shop all button */}
            <div className="sm:pb-2 flex-shrink-0">
              <button
                onClick={() => navigate("/sneakers")}
                className="relative overflow-hidden px-6 sm:px-7 h-11 sm:h-12 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase text-white transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto"
                style={{
                  background: "#dc2626",
                  animation: "collection-glow 2s ease-in-out infinite",
                }}
              >
                <span className="relative z-10">Shop all items</span>
                <span
                  className="absolute top-0 h-full w-1/3 bg-white/20 -skew-x-12"
                  style={{ animation: "shine 2.5s ease-in-out infinite", left: "-75%" }}
                />
              </button>
            </div>
          </div>

          {/* ── CARD — content LEFT, image RIGHT ── */}
          <div className={`flex flex-col lg:flex-row rounded-2xl sm:rounded-3xl overflow-hidden border ${
            isDark ? "border-white/8 bg-[#111]" : "border-black/8 bg-white"
          }`}>

            {/* IMAGE — order-1 on mobile (top), order-2 on desktop (right) */}
            <div className="relative w-full lg:w-1/2 aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[520px] overflow-hidden order-1 lg:order-2">
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.title}
                className="slide-img-f absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Dot indicators */}
              <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      active === i
                        ? "w-6 sm:w-7 h-2 sm:h-2.5 bg-white"
                        : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CONTENT — order-2 on mobile (below image), order-1 on desktop (left) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14 order-2 lg:order-1">
              <div key={slide.id} className="slide-text-f">

                {/* Badge + category */}
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <span className={`${badgeColor} text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full`}>
                    {slide.badge}
                  </span>
                  <span className={`text-xs sm:text-sm font-medium ${isDark ? "text-white/50" : "text-black/50"}`}>
                    {slide.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-[1.1] tracking-tight mb-3 sm:mb-4 ${
                  isDark ? "text-white" : "text-black"
                }`}>
                  {slide.title}
                </h3>

                {/* Description */}
                <p className={`text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md ${
                  isDark ? "text-white/50" : "text-black/50"
                }`}>
                  {slide.desc}
                </p>

                {/* Pricing bar */}
                <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-4 border ${
                  isDark ? "bg-white/5 border-white/8" : "bg-black/5 border-black/8"
                }`}>

                  {/* Price info */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isDark ? "bg-white/10" : "bg-black/10"
                    }`}>
                      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" fill="currentColor">
                        <path d="M12 2C9.8 2 8 3.8 8 6H4C4 6 3 6 3 7L3 8C3 8 4 9 5 9L5.5 9C5.8 11.6 7.2 13.8 9 15.2V18H15V15.2C16.8 13.8 18.2 11.6 18.5 9H19C20 9 21 8 21 8V7C21 6 20 6 20 6H16C16 3.8 14.2 2 12 2ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM9 18V20C9 21.1 9.9 22 11 22H13C14.1 22 15 21.1 15 20V18H9Z" />
                      </svg>
                    </div>
                    <div>
                      <p className={`text-[10px] font-semibold tracking-widest uppercase mb-0.5 ${
                        isDark ? "text-white/30" : "text-black/30"
                      }`}>
                        Pricing start from
                      </p>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className={`text-sm sm:text-base font-black ${isDark ? "text-white" : "text-black"}`}>
                          {slide.priceFrom}
                        </span>
                        <span className={`text-sm sm:text-base font-black ${isDark ? "text-white/40" : "text-black/40"}`}>
                          {slide.priceTo}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => navigate("/sneakers")}
                    className="relative overflow-hidden bg-red-600 text-white text-[10px] sm:text-xs font-black tracking-widest uppercase px-5 sm:px-6 h-9 sm:h-10 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 flex-shrink-0 w-full sm:w-auto"
                    style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
                  >
                    <span className="relative z-10">All collections</span>
                    <span
                      className="absolute top-0 h-full w-1/3 bg-white/20 -skew-x-12"
                      style={{ animation: "shine 2.5s ease-in-out infinite", left: "-75%" }}
                    />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}