import { useNavigate } from "react-router-dom";

const communityImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
    alt: "Community look 1",
    size: "large",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
    alt: "Community look 2",
    size: "medium",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    alt: "Community look 3",
    size: "small",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
    alt: "Community look 4",
    size: "medium",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&q=80",
    alt: "Community look 5",
    size: "large",
  },
];

export default function CommunitySection({ isDark }) {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @keyframes shine {
          0%, 100% { left: -75%; opacity: 0.7; }
          50%       { left: 125%; opacity: 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 2px #dc2626, 0 4px 20px rgba(220,38,38,0.45); }
          50%       { box-shadow: 0 0 0 2px #dc2626, 0 6px 32px rgba(220,38,38,0.85); }
        }
        @keyframes slideLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-track {
          display: flex;
          width: max-content;
          animation: slideLeft 18s linear infinite;
        }
        .scroll-track:hover { animation-play-state: paused; }
      `}</style>

      <section className={`w-full overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#0a0a0a]" : "bg-[#f0f0f0]"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-0">

          {/* ── HEADER ── */}
          <div className="flex flex-col items-center text-center mb-10 sm:mb-14">

            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 border ${
              isDark
                ? "bg-white/5 border-white/10 text-white/60"
                : "bg-black/5 border-black/10 text-black/50"
            }`}>
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-red-500" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              </svg>
              Stay connected
            </div>

            {/* Heading */}
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 max-w-2xl ${
              isDark ? "text-white" : "text-black"
            }`}>
              See our community
              <br />in modern silhouettes
            </h2>

            {/* Subtext */}
            <p className={`text-sm sm:text-base max-w-md leading-relaxed mb-8 sm:mb-10 ${
              isDark ? "text-white/40" : "text-black/40"
            }`}>
              Connect with us on social media for a daily dose of fresh
              style, featuring exclusive looks from our community.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => navigate("/sneakers")}
                className="relative overflow-hidden bg-red-600 text-white text-xs font-black tracking-widest uppercase px-7 h-11 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 w-44 sm:w-auto"
                style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
              >
                <span className="relative z-10">See collections</span>
                <span
                  className="absolute top-0 h-full w-1/3 bg-white/20 -skew-x-12"
                  style={{ animation: "shine 2.5s ease-in-out infinite", left: "-75%" }}
                />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className={`text-xs font-bold tracking-widest uppercase px-7 h-11 rounded-full border transition-all duration-200 hover:scale-105 active:scale-95 w-44 sm:w-auto ${
                  isDark
                    ? "border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                    : "border-black/20 text-black/60 hover:border-black/50 hover:text-black"
                }`}
              >
                Contact us
              </button>
            </div>
          </div>
        </div>

        {/* ── IMAGE STRIP ── full width, overflows edges */}
        <div className="relative w-full">

          {/* Left fade */}
          <div className={`absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none ${
            isDark
              ? "bg-gradient-to-r from-[#0a0a0a] to-transparent"
              : "bg-gradient-to-r from-[#f0f0f0] to-transparent"
          }`} />

          {/* Right fade */}
          <div className={`absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none ${
            isDark
              ? "bg-gradient-to-l from-[#0a0a0a] to-transparent"
              : "bg-gradient-to-l from-[#f0f0f0] to-transparent"
          }`} />

          {/* Scrolling track — duplicated for seamless loop */}
          <div className="overflow-hidden">
            <div className="scroll-track gap-3 sm:gap-4 px-3 sm:px-4 py-2">
              {[...communityImages, ...communityImages].map((img, i) => {
                const height =
                  img.size === "large"  ? "h-[280px] sm:h-[340px] lg:h-[400px]" :
                  img.size === "medium" ? "h-[230px] sm:h-[280px] lg:h-[330px]" :
                                          "h-[190px] sm:h-[230px] lg:h-[270px]";
                const width =
                  img.size === "large"  ? "w-[180px] sm:w-[220px] lg:w-[260px]" :
                  img.size === "medium" ? "w-[150px] sm:w-[180px] lg:w-[210px]" :
                                          "w-[130px] sm:w-[155px] lg:w-[180px]";
                const mt =
                  img.size === "large"  ? "mt-0" :
                  img.size === "medium" ? "mt-10 sm:mt-14" :
                                          "mt-20 sm:mt-28";

                return (
                  <div
                    key={`${img.id}-${i}`}
                    className={`flex-shrink-0 ${width} ${height} ${mt} rounded-2xl sm:rounded-3xl overflow-hidden`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}