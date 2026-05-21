import { useState } from "react";
import { useCart } from "../../context/CartContext";

const allProducts = [
  // MEN
  {
    id: 201, name: "Air Phantom Elite", price: "$148", category: "men", sizes: [30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],
    image: "images/s1.jpg", hover: "images/s2.jpg", badge: "New",
  },
  {
    id: 202, name: "Vortex Runner Pro", price: "$135", category: "men", sizes: [30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],
    image: "images/s3.jpg", hover: "images/s4.jpg", badge: "Hot",
  },
  {
    id: 203, name: "Carbon Strike X", price: "$235", category: "men", sizes: [32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],
    image: "images/s5.jpg", hover: "images/sapp.jpg", badge: "Limited",
  },
  {
    id: 204, name: "Stealth Force Low", price: "$139", category: "men", sizes: [30,31,32,33,34,35,36,37,38,39,40,41,42],
    image: "images/w1.jpg", hover: "images/w2.jpg", badge: "New",
  },
  {
    id: 205, name: "Apex Thunder Mid", price: "$250", category: "men", sizes: [33,34,35,36,37,38,39,40,41,42,43,44,45,46],
    image: "images/w3.jpg", hover: "images/w4.jpg", badge: "Sale",
  },
  {
    id: 206, name: "Shadow Boost 3.0", price: "$189", category: "men", sizes: [30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],
    image: "images/largea.jpg", hover: "images/largeb.jpg", badge: "New",
  },

  // WOMEN
  {
    id: 207, name: "Luna Glide SE", price: "$164", category: "women", sizes: [20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],
    image: "images/largec.jpg", hover: "images/larged.jpg", badge: "New",
  },
  {
    id: 208, name: "Femme Drift OG", price: "$132", category: "women", sizes: [20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],
    image: "images/large.jpg", hover: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80", badge: "Hot",
  },
  {
    id: 209, name: "Blaze Her Edition", price: "$175", category: "women", sizes: [22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
    image: "images/b5.jpg", hover: "images/b7.jpg", badge: "Limited",
  },
  {
    id: 210, name: "Sleek Queen Low", price: "$120", category: "women", sizes: [20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
    image: "images/b6.jpg", hover: "images/b8.jpg", badge: "Sale",
  },
  {
    id: 211, name: "Aura Street Femme", price: "$155", category: "women", sizes: [24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],
    image: "images/b1.jpg", hover: "images/b2.jpg", badge: "New",
  },
  {
    id: 212, name: "Velvet Phantom", price: "$198", category: "women", sizes: [20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
    hover: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80", badge: "Hot",
  },

  // CHILDREN
  {
    id: 213, name: "Mini Vortex Kid", price: "$75", category: "children", sizes: [10,11,12,13,14,15,16,17,18,19,20],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    hover: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80", badge: "New",
  },
  {
    id: 214, name: "Tiny Phantom Jr", price: "$65", category: "children", sizes: [10,11,12,13,14,15,16,17,18],
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80",
    hover: "images/b9.jpg", badge: "Hot",
  },
  {
    id: 215, name: "Junior Strike", price: "$80", category: "children", sizes: [12,13,14,15,16,17,18,19,20],
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
    hover: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80", badge: "New",
  },
  {
    id: 216, name: "Little Legend Low", price: "$60", category: "children", sizes: [10,11,12,13,14,15,16],
    image: "images/b4.jpg", hover: "images/b3.jpg", badge: "Sale",
  },
];

const badgeColor = (badge) =>
  badge === "Sale"    ? "bg-green-500"  :
  badge === "Hot"     ? "bg-orange-500" :
  badge === "Limited" ? "bg-purple-600" :
  "bg-red-600";

const SIZE_RANGES = {
  all:      { min: 10, max: 46 },
  men:      { min: 30, max: 46 },
  women:    { min: 20, max: 46 },
  children: { min: 10, max: 20 },
};

function ProductCard({ product, isDark, selectedSize }) {
  const { addToCart, cartItems, updateQty } = useCart();

  const cartKey = selectedSize !== "all"
    ? `${product.id}-${selectedSize}`
    : `${product.id}-nosize`;

  const cartItem = cartItems.find((i) => i.cartKey === cartKey);
  const qty = cartItem ? cartItem.qty : 0;
  const inCart = qty > 0;
  const sizeSelected = selectedSize !== "all";

  const handleAddToCart = () => {
    if (!sizeSelected) return;
    addToCart({
      ...product,
      cartKey,
      selectedSize: selectedSize,
    });
  };

  return (
    <div className={`product-card group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-[0_0_24px_rgba(220,38,38,0.2)] hover:border-red-500/30 hover:-translate-y-1 ${
      isDark ? "bg-[#111] border-white/8" : "bg-white border-black/8"
    }`}>

      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          src={product.hover}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105"
        />

        {/* Badge */}
        <span className={`absolute top-2 left-2 sm:top-3 sm:left-3 ${badgeColor(product.badge)} text-white text-[9px] sm:text-[10px] font-black tracking-widest uppercase px-2 sm:px-3 py-1 rounded-full z-10`}>
          {product.badge}
        </span>

        {/* Selected size badge */}
        {sizeSelected && (
          <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/70 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-black tracking-widest uppercase px-2 sm:px-3 py-1 rounded-full z-10">
            Sz {selectedSize}
          </span>
        )}
      </div>

      {/* Info */}
      <div className={`p-3 sm:p-4 border-t ${isDark ? "border-white/5" : "border-black/5"}`}>
        <h3 className={`text-xs sm:text-sm font-black tracking-tight mb-2 truncate ${isDark ? "text-white/80" : "text-gray-800"}`}>
          {product.name}
        </h3>

        {/* Price + category */}
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm sm:text-base font-black text-red-500">{product.price}</p>
          <span className={`text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-full capitalize ${
            isDark ? "bg-white/5 text-white/30" : "bg-black/5 text-black/30"
          }`}>
            {product.category}
          </span>
        </div>

        {/* Buy Now / Qty controls */}
        {!inCart ? (
          <button
            onClick={handleAddToCart}
            disabled={!sizeSelected}
            title={!sizeSelected ? "Please select a size first" : ""}
            className={`relative overflow-hidden w-full h-9 rounded-full text-[10px] font-black tracking-widest uppercase transition-all duration-200 ${
              !sizeSelected
                ? isDark
                  ? "bg-white/8 text-white/25 cursor-not-allowed border border-white/10"
                  : "bg-black/8 text-black/25 cursor-not-allowed border border-black/10"
                : "bg-red-600 text-white hover:scale-105 active:scale-95"
            }`}
            style={sizeSelected ? { animation: "btn-glow 2s ease-in-out infinite" } : {}}
          >
            <span className="relative z-10">
              {sizeSelected ? "Buy Now" : "Select a Size"}
            </span>
            {sizeSelected && (
              <span
                className="absolute top-0 h-full w-1/3 bg-white/20 -skew-x-12"
                style={{ animation: "shine 2.5s ease-in-out infinite", left: "-75%" }}
              />
            )}
          </button>
        ) : (
          <div className={`flex items-center justify-between rounded-full border px-1 h-9 ${
            isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"
          }`}>
            {/* Minus */}
            <button
              onClick={() => updateQty(cartKey, -1)}
              disabled={qty <= 1}
              className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-base transition-all duration-200 ${
                qty <= 1
                  ? isDark ? "text-white/20 cursor-not-allowed" : "text-black/20 cursor-not-allowed"
                  : "text-red-500 hover:bg-red-500/10 active:scale-95"
              }`}
            >
              −
            </button>

            {/* Count */}
            <span className={`text-sm font-black min-w-[20px] text-center ${isDark ? "text-white" : "text-black"}`}>
              {qty}
            </span>

            {/* Plus */}
            <button
              onClick={() => updateQty(cartKey, 1)}
              className="w-7 h-7 rounded-full flex items-center justify-center font-black text-base text-red-500 hover:bg-red-500/10 active:scale-95 transition-all duration-200"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Store({ isDark }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");

  const handleFilterClick = (filter) => {
    if (activeFilter === filter) {
      setActiveFilter("all");
      setSelectedSize("all");
    } else {
      setActiveFilter(filter);
      setSelectedSize("all");
    }
  };

  const { min, max } = SIZE_RANGES[activeFilter];
  const sizeOptions = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  const filtered = allProducts.filter((p) => {
    const categoryMatch = activeFilter === "all" || p.category === activeFilter;
    const sizeMatch = selectedSize === "all" || p.sizes.includes(Number(selectedSize));
    return categoryMatch && sizeMatch;
  });

  const filters = [
    { key: "all",      label: "All Products" },
    { key: "men",      label: "Men" },
    { key: "women",    label: "Women" },
    { key: "children", label: "Children" },
  ];

  const btnClass = (key) =>
    `px-5 sm:px-7 h-11 rounded-full text-xs sm:text-sm font-black tracking-widest uppercase transition-all duration-200 hover:scale-105 active:scale-95 border ${
      activeFilter === key
        ? "bg-red-600 text-white border-red-600 shadow-[0_0_16px_rgba(220,38,38,0.5)]"
        : isDark
          ? "bg-transparent border-white/15 text-white/60 hover:border-red-500 hover:text-red-500"
          : "bg-transparent border-black/15 text-black/50 hover:border-red-500 hover:text-red-500"
    }`;

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shine {
          0%, 100% { left: -75%; opacity: 0.7; }
          50%       { left: 125%; opacity: 0; }
        }
        @keyframes btn-glow {
          0%, 100% { box-shadow: 0 0 0 1px #dc2626, 0 2px 12px rgba(220,38,38,0.4); }
          50%       { box-shadow: 0 0 0 1px #dc2626, 0 4px 20px rgba(220,38,38,0.7); }
        }
        .product-card { animation: fadeIn 0.35s ease forwards; }

        /* Size select option colors */
        select option {
          background-color: ${isDark ? "#111111" : "#ffffff"};
          color: ${isDark ? "#ffffff" : "#000000"};
          font-weight: 700;
        }
        select option:not([value="all"]) {
          color: #dc2626;
        }
      `}</style>

      <div className={`w-full min-h-screen transition-colors duration-300 ${isDark ? "bg-[#0a0a0a]" : "bg-[#f0f0f0]"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

          {/* ── HEADER ── */}
          <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 border ${
              isDark ? "bg-white/5 border-white/10 text-white/60" : "bg-black/5 border-black/10 text-black/50"
            }`}>
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-red-500 animate-spin" style={{ animationDuration: "4s" }} fill="currentColor">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
              The Collection
            </div>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-3 ${
              isDark ? "text-white" : "text-black"
            }`}>
              Shop <span className="text-red-500">VorteX</span>
            </h1>
            <p className={`text-sm sm:text-base max-w-md leading-relaxed ${
              isDark ? "text-white/40" : "text-black/40"
            }`}>
              Every drop. Every size. Every style. Find your perfect pair below.
            </p>
          </div>

          {/* ── FILTERS ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 flex-wrap">

            {/* Category buttons */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
              {filters.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => handleFilterClick(key)}
                  className={btnClass(key)}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className={`hidden sm:block w-px h-8 ${isDark ? "bg-white/10" : "bg-black/10"}`} />

            {/* Size select */}
            <div className="relative">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className={`appearance-none h-11 pl-4 pr-10 rounded-full text-xs sm:text-sm font-black tracking-widest uppercase border outline-none cursor-pointer transition-all duration-200 ${
                  selectedSize !== "all"
                    ? "bg-red-600 text-white border-red-600"
                    : isDark
                      ? "bg-transparent border-white/15 text-white/60"
                      : "bg-transparent border-black/15 text-black/50"
                }`}
              >
                <option
                  value="all"
                  className={isDark ? "bg-[#111] text-white" : "bg-white text-black"}
                >
                  All Sizes
                </option>
                {sizeOptions.map((s) => (
                  <option
                    key={s}
                    value={s}
                    className={isDark ? "bg-[#111] text-red-500" : "bg-white text-red-600"}
                  >
                    Size {s}
                  </option>
                ))}
              </select>

              {/* Chevron */}
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  viewBox="0 0 24 24"
                  className={`w-4 h-4 ${
                    selectedSize !== "all" ? "text-white" : isDark ? "text-white/40" : "text-black/40"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          {/* ── SIZE REMINDER ── shows when no size selected */}
          {selectedSize === "all" && (
            <div className={`flex items-center justify-center gap-2 mb-6 px-4 py-3 rounded-2xl border max-w-sm mx-auto ${
              isDark
                ? "bg-white/5 border-white/10 text-white/40"
                : "bg-black/5 border-black/10 text-black/40"
            }`}>
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <p className="text-xs font-bold tracking-wide">
                Select a size above to enable Buy Now
              </p>
            </div>
          )}

          {/* ── PRODUCT GRID ── */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-5xl mb-4">👟</p>
              <p className={`text-lg font-black ${isDark ? "text-white/30" : "text-black/30"}`}>
                No products match that filter.
              </p>
              <button
                onClick={() => { setActiveFilter("all"); setSelectedSize("all"); }}
                className="mt-5 text-xs font-black tracking-widest uppercase text-red-500 hover:text-red-400 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isDark={isDark}
                  selectedSize={selectedSize}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
}