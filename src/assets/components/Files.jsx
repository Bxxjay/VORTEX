export default function StyleSection({ isDark }) {
  const categories = [
    {
      id: 1,
      label: "Everyday Comfort",
      desc: "Designed to feel natural on the body throughout long, active days.",
      tags: ["All-day wear", "Comfort", "Relaxed fit"],
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80",
      ],
      rotate: ["-rotate-6", "rotate-3"],
      float: "float-1",
    },
    {
      id: 2,
      label: "Modern Silhouettes",
      desc: "Contemporary shapes balance structure & ease for confident everyday styling.",
      tags: ["Balanced fit", "Modern", "Structured"],
      images: [
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80",
      ],
      rotate: ["-rotate-3", "rotate-6"],
      float: "float-2",
    },
    {
      id: 3,
      label: "Effortless Styling",
      desc: "Pieces work together naturally, making daily outfit choices simple & intuitive.",
      tags: ["Versatile", "Easy to style", "Layered"],
      images: [
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&q=80",
        "images/largeb.jpg",
      ],
      rotate: ["-rotate-5", "rotate-2"],
      float: "float-3",
    },
    {
      id: 4,
      label: "Street Culture",
      desc: "Raw energy meets refined craft — gear built for those who move with purpose.",
      tags: ["Streetwear", "Bold", "Urban"],
      images: [
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&q=80",
        "images/w1.jpg",
      ],
      rotate: ["-rotate-4", "rotate-5"],
      float: "float-4",
    },
    {
      id: 5,
      label: "Premium Drops",
      desc: "Limited runs crafted with precision — exclusive pieces for those who know.",
      tags: ["Exclusive", "Limited", "Luxury"],
      images: [
        "images/largec.jpg",
        "images/larged.jpg",
      ],
      rotate: ["-rotate-6", "rotate-3"],
      float: "float-5",
    },
    {
      id: 6,
      label: "Classic Icons",
      desc: "Timeless staples that anchor any wardrobe — refined, restocked, always relevant.",
      tags: ["Timeless", "Staples", "Refined"],
      images: [
        "images/w4.jpg",
        "images/w5.jpg",
      ],
      rotate: ["-rotate-3", "rotate-6"],
      float: "float-6",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
        .float-1 { animation: floatCard 4s ease-in-out infinite 0.0s; }
        .float-2 { animation: floatCard 4s ease-in-out infinite 0.5s; }
        .float-3 { animation: floatCard 4s ease-in-out infinite 1.0s; }
        .float-4 { animation: floatCard 4s ease-in-out infinite 1.5s; }
        .float-5 { animation: floatCard 4s ease-in-out infinite 2.0s; }
        .float-6 { animation: floatCard 4s ease-in-out infinite 2.5s; }
      `}</style>

      <section className={`w-full transition-colors duration-300 ${isDark ? "bg-[#0a0a0a]" : "bg-[#f0f0f0]"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

          {/* ── HEADER ── */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 border ${
              isDark
                ? "bg-white/5 border-white/10 text-white/60"
                : "bg-black/5 border-black/10 text-black/50"
            }`}>
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-red-500" fill="currentColor">
                <path d="M12 3C7 3 3 7 3 12v4a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H5v-1a7 7 0 0114 0v1h-1a2 2 0 00-2 2v3a2 2 0 002 2h1a2 2 0 002-2v-4c0-5-4-9-9-9z"/>
              </svg>
              What defines our wear
            </div>

            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 ${
              isDark ? "text-white" : "text-black"
            }`}>
              Where style meets ease
            </h2>

            <p className={`text-sm sm:text-base max-w-md leading-relaxed ${
              isDark ? "text-white/40" : "text-black/40"
            }`}>
              Thoughtful design blending modern style, comfort, and
              versatility for everyday living across lifestyles.
            </p>
          </div>

          {/* ── GRID ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden border p-5 sm:p-6 lg:p-7 ${
                  isDark
                    ? "bg-[#111] border-white/8"
                    : "bg-white border-black/8"
                }`}
              >

                {/* Stacked images */}
                <div className={`relative w-full h-[200px] sm:h-[220px] lg:h-[240px] mb-6 ${cat.float}`}>

                  {/* Back image */}
                  <div
                    className={`absolute rounded-2xl overflow-hidden shadow-md ${cat.rotate[0]}`}
                    style={{ top: "6%", left: "3%", width: "70%", height: "88%" }}
                  >
                    <img
                      src={cat.images[0]}
                      alt={cat.label}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Front image */}
                  <div
                    className={`absolute rounded-2xl overflow-hidden shadow-xl ${cat.rotate[1]}`}
                    style={{ top: "6%", left: "28%", width: "70%", height: "88%" }}
                  >
                    <img
                      src={cat.images[1]}
                      alt={cat.label}
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>

                {/* Label */}
                <h3 className={`text-lg sm:text-xl font-black tracking-tight mb-2 ${
                  isDark ? "text-white" : "text-black"
                }`}>
                  {cat.label}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-5 ${
                  isDark ? "text-white/40" : "text-black/40"
                }`}>
                  {cat.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full border ${
                        isDark
                          ? "bg-white/5 border-white/10 text-white/60"
                          : "bg-black/5 border-black/10 text-black/50"
                      }`}
                    >
                      {/* Small dot icon */}
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}