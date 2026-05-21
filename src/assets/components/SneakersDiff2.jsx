import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: 'Air Phantom Elite',
    href: '#',
    price: '$148',
    imageSrc: 'images/w1.jpg',
    hoverSrc: 'images/b1.jpg',
    imageAlt: 'Sneaker front view',
  },
  {
    id: 2,
    name: 'Vortex Runner Pro',
    href: '#',
    price: '$135',
    imageSrc: 'images/w2.jpg',
    hoverSrc: 'images/b2.jpg',
    imageAlt: 'Sneaker side view',
  },
  {
    id: 3,
    name: 'Shadow Boost 3.0',
    href: '#',
    price: '$189',
    imageSrc: 'images/w3.jpg',
    hoverSrc: 'images/b3.jpg',
    imageAlt: 'Sneaker top view',
  },
  {
    id: 4,
    name: 'Carbon Strike X',
    href: '#',
    price: '$235',
    imageSrc: 'images/w4.jpg',
    hoverSrc: 'images/b4.jpg',
    imageAlt: 'Sneaker back view',
  },
  {
    id: 5,
    name: 'Lunar Glide SE',
    href: '#',
    price: '$164',
    imageSrc: 'images/w5.jpg',
    hoverSrc: 'images/b5.jpg',
    imageAlt: 'Sneaker angle view',
  },
  {
    id: 6,
    name: 'Stealth Force Low',
    href: '#',
    price: '$139',
    imageSrc: 'images/s1.jpg',
    hoverSrc: 'images/b7.jpg',
    imageAlt: 'Sneaker detail view',
  },
  {
    id: 7,
    name: 'Apex Thunder Mid',
    href: '#',
    price: '$250',
    imageSrc: 'images/s2.jpg',
    hoverSrc: 'images/b8.jpg',
    imageAlt: 'Sneaker sole view',
  },
  {
    id: 8,
    name: 'Flux Drift OG',
    href: '#',
    price: '$132',
    imageSrc: 'images/s3.jpg',
    hoverSrc: 'images/b9.jpg',
    imageAlt: 'Sneaker lifestyle view',
  },
];

export default function ProductGrid2({ isDark }) {
  const navigate = useNavigate();

  return (
    <div className={`transition-colors duration-300 ${isDark ? "bg-[#0a0a0a]" : "bg-[#f5f5f5]"}`}>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">

        {/* ── HERO HEADER SECTION ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 border ${
              isDark
                ? "bg-white/5 border-white/10 text-white/70"
                : "bg-black/5 border-black/10 text-black/60"
            }`}>
              {/* Spinning icon */}
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-red-500 animate-spin"
                style={{ animationDuration: "4s" }}
                fill="currentColor"
              >
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
              Best Sellers
            </div>

            {/* Main heading */}
            <h2 className={`text-5xl sm:text-6xl font-black leading-[1.05] tracking-tight ${
              isDark ? "text-white" : "text-black"
            }`}>
              Our signature<br />
              <span className="text-red-500">best selling</span> pieces
            </h2>
          </div>

          {/* See all collections button */}
          <div className="sm:pb-2">
            <button
              onClick={() => navigate("/sneakers")}
              className="relative overflow-hidden px-7 h-12 rounded-full text-sm font-bold tracking-widest uppercase text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: "#dc2626",
                animation: "collection-glow 2s ease-in-out infinite",
              }}
            >
              <span className="relative z-10">See all collections</span>
              {/* shine */}
              <span
                className="absolute top-0 h-full w-1/3 bg-white/20 -skew-x-12"
                style={{ animation: "shine 2.5s ease-in-out infinite", left: "-75%" }}
              />
            </button>
          </div>
        </div>

        {/* ── PRODUCT GRID ── */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            
            <a  key={product.id}
              href={product.href}
              className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-[0_0_28px_rgba(220,38,38,0.25)] hover:border-red-500/40 hover:-translate-y-1 ${
                isDark
                  ? "border-white/8 bg-[#111]"
                  : "border-black/8 bg-white"
              }`}
            >
              {/* Image with hover swap */}
              <div className="relative overflow-hidden aspect-square xl:aspect-[7/8]">
                {/* Default image */}
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Hover image */}
                <img
                  alt={product.imageAlt}
                  src={product.hoverSrc}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105"
                />

                {/* NEW badge on card */}
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full z-10">
                  New
                </span>
              </div>

              {/* Card info */}
              <div className={`p-4 border-t ${isDark ? "border-white/5" : "border-black/5"}`}>
                <h3 className={`text-sm font-bold tracking-wide ${
                  isDark ? "text-white/80" : "text-gray-800"
                }`}>
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-base font-black text-red-500">{product.price}</p>
                  <span className={`text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded-full ${
                    isDark ? "bg-white/5 text-white/40" : "bg-black/5 text-black/40"
                  }`}>
                    In Stock
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0%, 100% { left: -75%; opacity: 0.7; }
          50%       { left: 125%; opacity: 0;   }
        }
        @keyframes collection-glow {
          0%, 100% { box-shadow: 0 0 0 2px #dc2626, 0 4px 20px rgba(220,38,38,0.5), 0 2px 8px rgba(220,38,38,0.3); }
          50%       { box-shadow: 0 0 0 2px #dc2626, 0 6px 32px rgba(220,38,38,0.85), 0 2px 16px rgba(220,38,38,0.5); }
        }
      `}</style>
    </div>
  );
}