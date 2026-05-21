import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function CartPage({ isDark }) {
  const { cartItems, updateQty, removeItem, totalItems } = useCart();
  const navigate = useNavigate();

  const parsePrice = (priceStr) =>
    parseFloat(priceStr.replace(/[^0-9.]/g, ""));

  const subtotal = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.qty,
    0
  );

  return (
    <>
      <style>{`
        @keyframes shine {
          0%, 100% { left: -75%; opacity: 0.7; }
          50%       { left: 125%; opacity: 0; }
        }
        @keyframes checkout-glow {
          0%, 100% { box-shadow: 0 0 0 2px #dc2626, 0 4px 24px rgba(220,38,38,0.55); }
          50%       { box-shadow: 0 0 0 2px #dc2626, 0 6px 36px rgba(220,38,38,0.95); }
        }
      `}</style>

      <div className={`w-full min-h-screen transition-colors duration-300 ${isDark ? "bg-[#0a0a0a]" : "bg-[#f0f0f0]"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

          {/* ── HEADER ── */}
          <div className="mb-8 sm:mb-10">
            <button
              onClick={() => navigate(-1)}
              className={`flex items-center gap-2 text-xs font-black tracking-widest uppercase mb-6 transition-colors duration-200 ${
                isDark ? "text-white/40 hover:text-red-500" : "text-black/40 hover:text-red-500"
              }`}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Back
            </button>

            <h1 className={`text-4xl sm:text-5xl font-black tracking-tight ${isDark ? "text-white" : "text-black"}`}>
              Your <span className="text-red-500">Cart</span>
              {totalItems > 0 && (
                <span className={`ml-3 text-lg font-bold ${isDark ? "text-white/30" : "text-black/30"}`}>
                  ({totalItems} {totalItems === 1 ? "item" : "items"})
                </span>
              )}
            </h1>
          </div>

          {cartItems.length === 0 ? (
            /* ── EMPTY STATE ── */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-6xl mb-5">👟</p>
              <p className={`text-xl font-black mb-2 ${isDark ? "text-white/40" : "text-black/40"}`}>
                Your cart is empty
              </p>
              <p className={`text-sm mb-8 ${isDark ? "text-white/20" : "text-black/20"}`}>
                Add some sneakers to get started
              </p>
              <button
                onClick={() => navigate("/sneakers")}
                className="relative overflow-hidden bg-red-600 text-white text-xs font-black tracking-widest uppercase px-8 h-11 rounded-full hover:scale-105 active:scale-95 transition-all duration-200"
                style={{ animation: "checkout-glow 2s ease-in-out infinite" }}
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

              {/* ── LEFT: CART ITEMS ── */}
              <div className="w-full lg:flex-1 flex flex-col gap-4">
                {cartItems.map((item) => (
                  <div
                    key={item.cartKey}
                    className={`flex items-center gap-4 rounded-2xl border p-4 sm:p-5 transition-colors duration-300 ${
                      isDark ? "bg-[#111] border-white/8" : "bg-white border-black/8"
                    }`}
                  >
                    {/* Image */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 border border-white/5">
                      <img
                        src={item.image || item.imageSrc}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm sm:text-base font-black truncate mb-1 ${isDark ? "text-white" : "text-black"}`}>
                        {item.name}
                      </h3>

                      {/* Size + category */}
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        {item.selectedSize && item.selectedSize !== "—" && (
                          <span className="bg-red-600 text-white text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">
                            Size {item.selectedSize}
                          </span>
                        )}
                        {item.selectedSize === "—" && (
                          <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                            isDark ? "bg-white/5 text-white/30" : "bg-black/5 text-black/30"
                          }`}>
                            No size selected
                          </span>
                        )}
                        <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full capitalize ${
                          isDark ? "bg-white/5 text-white/30" : "bg-black/5 text-black/30"
                        }`}>
                          {item.category}
                        </span>
                      </div>

                      {/* Price per item */}
                      <p className="text-red-500 font-black text-sm">{item.price}</p>

                      {/* Remove button */}
                      <button
                        onClick={() => removeItem(item.cartKey)}
                        className={`flex items-center gap-1.5 text-[11px] font-black tracking-widest uppercase mt-2 transition-colors duration-200 hover:text-red-500 ${
                          isDark ? "text-white/25" : "text-black/25"
                        }`}
                      >
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        </svg>
                        Remove
                      </button>
                    </div>

                    {/* Qty controls */}
                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      {/* Total for this item */}
                      <p className={`text-xs font-bold ${isDark ? "text-white/40" : "text-black/40"}`}>
                        ${(parsePrice(item.price) * item.qty).toFixed(2)}
                      </p>

                      <div className={`flex items-center rounded-full border px-1 h-9 gap-1 ${
                        isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"
                      }`}>
                        {/* Minus */}
                        <button
                          onClick={() => updateQty(item.cartKey, -1)}
                          disabled={item.qty <= 1}
                          className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-lg transition-all duration-200 ${
                            item.qty <= 1
                              ? isDark ? "text-white/15 cursor-not-allowed" : "text-black/15 cursor-not-allowed"
                              : "text-red-500 hover:bg-red-500/10 active:scale-95"
                          }`}
                        >
                          −
                        </button>

                        {/* Count */}
                        <span className={`text-sm font-black min-w-[24px] text-center ${isDark ? "text-white" : "text-black"}`}>
                          {item.qty}
                        </span>

                        {/* Plus */}
                        <button
                          onClick={() => updateQty(item.cartKey, 1)}
                          className="w-7 h-7 rounded-full flex items-center justify-center font-black text-lg text-red-500 hover:bg-red-500/10 active:scale-95 transition-all duration-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── RIGHT: CART SUMMARY ── */}
              <div className={`w-full lg:w-80 xl:w-96 rounded-2xl border p-6 flex flex-col gap-5 lg:sticky lg:top-24 ${
                isDark ? "bg-[#111] border-white/8" : "bg-white border-black/8"
              }`}>
                <h2 className={`text-sm font-black tracking-widest uppercase ${isDark ? "text-white/60" : "text-black/50"}`}>
                  Cart Summary
                </h2>

                {/* Item breakdown */}
                <div className="flex flex-col gap-3">
                  {cartItems.map((item) => (
                    <div key={item.cartKey} className="flex items-center justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-bold truncate ${isDark ? "text-white/70" : "text-black/70"}`}>
                          {item.name}
                        </p>
                        <p className={`text-[10px] font-semibold ${isDark ? "text-white/30" : "text-black/30"}`}>
                          {item.selectedSize !== "—" ? `Size ${item.selectedSize} · ` : ""}
                          x{item.qty}
                        </p>
                      </div>
                      <p className="text-xs font-black text-red-500 flex-shrink-0">
                        ${(parsePrice(item.price) * item.qty).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className={`border-t ${isDark ? "border-white/8" : "border-black/8"}`} />

                {/* Items total */}
                <div className="flex items-center justify-between">
                  <p className={`text-xs font-semibold ${isDark ? "text-white/40" : "text-black/40"}`}>
                    Items total ({totalItems})
                  </p>
                  <p className={`text-sm font-black ${isDark ? "text-white" : "text-black"}`}>
                    ${subtotal.toFixed(2)}
                  </p>
                </div>

                {/* Shipping */}
                <div className="flex items-center justify-between">
                  <p className={`text-xs font-semibold ${isDark ? "text-white/40" : "text-black/40"}`}>
                    Shipping
                  </p>
                  <p className="text-xs font-black text-green-500">Free</p>
                </div>

                {/* Divider */}
                <div className={`border-t ${isDark ? "border-white/8" : "border-black/8"}`} />

                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <p className={`text-base font-black ${isDark ? "text-white" : "text-black"}`}>
                    Subtotal
                  </p>
                  <p className="text-xl font-black text-red-500">
                    ${subtotal.toFixed(2)}
                  </p>
                </div>

                {/* Checkout button */}
                <button
                  onClick={() => navigate("/checkout")}
                  className="relative overflow-hidden w-full h-13 rounded-full bg-red-600 text-white text-xs font-black tracking-widest uppercase transition-all duration-200 hover:scale-105 active:scale-95 py-3"
                  style={{ animation: "checkout-glow 2s ease-in-out infinite" }}
                >
                  <span className="relative z-10">
                    Checkout — ${subtotal.toFixed(2)}
                  </span>
                  <span
                    className="absolute top-0 h-full w-1/3 bg-white/20 -skew-x-12"
                    style={{ animation: "shine 2.5s ease-in-out infinite", left: "-75%" }}
                  />
                </button>

                {/* Continue shopping */}
                <button
                  onClick={() => navigate("/sneakers")}
                  className={`text-xs font-black tracking-widest uppercase text-center transition-colors duration-200 hover:text-red-500 ${
                    isDark ? "text-white/25" : "text-black/25"
                  }`}
                >
                  ← Continue Shopping
                </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </>
  );
}