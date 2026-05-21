import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function FloatingCart() {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/cart")}
      className="fixed right-4 sm:right-6 bottom-6 z-50 w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
      style={{
        boxShadow: "0 0 0 2px #dc2626, 0 4px 24px rgba(220,38,38,0.6)",
        animation: "cart-glow 2s ease-in-out infinite",
      }}
      aria-label="View cart"
    >
      <style>{`
        @keyframes cart-glow {
          0%, 100% { box-shadow: 0 0 0 2px #dc2626, 0 4px 24px rgba(220,38,38,0.5); }
          50%       { box-shadow: 0 0 0 2px #dc2626, 0 6px 36px rgba(220,38,38,0.9); }
        }
      `}</style>

      {/* Cart icon */}
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-10.9-3h11.45c.75 0 1.41-.41 1.75-1.03L21 6H6.21l-.94-2H1v2h3l3.6 7.59L6.25 15c-.16.28-.25.61-.25.96C6 17.1 6.9 18 8 18h12v-2H8.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63z"/>
      </svg>

      {/* Badge */}
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-red-600 text-[10px] font-black flex items-center justify-center">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </button>
  );
}