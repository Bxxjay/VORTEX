const stats = [
  {
    id: 1,
    value: "10M+",
    label: "Pairs worn daily",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9c-.55 0-1-.45-1-1s.45-1 1-1h9c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 7 4 8.57 4 10.5S5.57 14 7.5 14H18c.55 0 1 .45 1 1s-.45 1-1 1H7.5C4.46 16 2 13.54 2 10.5v2z"/>
      </svg>
    ),
  },
  {
    id: 2,
    value: "98%",
    label: "Customer Satisfaction",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    ),
  },
  {
    id: 3,
    value: "500+",
    label: "Shoe Styles Available",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
      </svg>
    ),
  },
  {
    id: 4,
    value: "500K+",
    label: "Community worldwide",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
  },
];

export default function StatsSection({ isDark }) {
  return (
    <section className={`w-full transition-colors duration-300 ${isDark ? "bg-[#0a0a0a]" : "bg-[#f0f0f0]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

        {/* ── QUOTE TEXT ── */}
        <p className={`text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight tracking-tight max-w-4xl mx-auto mb-14 sm:mb-18 lg:mb-20 ${
          isDark ? "text-white" : "text-black"
        }`}>
          More than sneakers, VorteX is a commitment to
          intentional design. Our curated collections focus
          on sleek silhouettes, empowering your{" "}
          <span className="text-red-500">unique</span> and personal
          journey with modern ease.
        </p>

        {/* ── STATS GRID ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] sm:aspect-[4/5]"
            >
              {/* Background image */}
              <img
                src={stat.image}
                alt={stat.label}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />

              {/* Dark gradient overlay — stronger at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 lg:p-6">

                {/* Icon circle */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white mb-3 sm:mb-4">
                  {stat.icon}
                </div>

                {/* Stat value */}
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-none mb-1 sm:mb-2">
                  {stat.value}
                </p>

                {/* Stat label */}
                <p className="text-xs sm:text-sm text-white/70 font-medium leading-snug">
                  {stat.label}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}