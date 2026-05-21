import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar({ isDark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home",        to: "/" },
    { label: "About",       to: "/about" },
    { label: "Sneakers!!!", to: "/sneakers" },
    { label: "Contact",     to: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold tracking-widest uppercase transition-colors duration-200 ${
      isActive
        ? isDark ? "text-white" : "text-black"
        : isDark
          ? "text-red-500 hover:text-white"
          : "text-red-500 hover:text-black"
    }`;

  return (
    <>
      <style>{`
        @keyframes shine {
          0%, 100% { left: -75%; opacity: 0.7; }
          50%       { left: 125%; opacity: 0;   }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 2px #ff2200, 0 4px 24px rgba(255,34,0,0.5), 0 2px 8px rgba(255,34,0,0.3); }
          50%       { box-shadow: 0 0 0 2px #ff2200, 0 6px 32px rgba(255,34,0,0.8), 0 2px 16px rgba(255,34,0,0.5); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0);     }
        }
        .mobile-menu { animation: slideDown 0.25s ease forwards; }
      `}</style>

      <nav
        className={`w-full border-b transition-colors duration-300 ${
          isDark ? "bg-[#0a0a0a] border-white/10" : "bg-white border-black/10"
        }`}
      >
        <div className="flex items-center justify-between px-5 md:px-10 h-[72px]">

          {/* ── MOBILE: Hamburger (left) ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className={`md:hidden w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 ${
              isDark
                ? "border-white/10 bg-white/5 text-white"
                : "border-black/10 bg-black/5 text-black"
            }`}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* ── LOGO — centered on mobile, left on desktop ── */}
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 group absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 80"
              className="w-16 h-10 transition-transform duration-300 group-hover:scale-105"
              fill="none"
            >
              <ellipse cx="62" cy="74" rx="42" ry="4" fill="#ff2200" opacity="0.15" />
              <path d="M18 62 Q20 68 30 70 L95 68 Q108 68 110 62 Q112 56 105 54 L22 56 Q16 57 18 62Z" fill={isDark ? "#1c1c1c" : "#d0d0d0"} />
              <path d="M20 56 L106 54 Q110 54 110 58 Q110 60 106 60 L20 62 Q16 62 16 59 Q16 56 20 56Z" fill="#ff2200" opacity="0.85" />
              <path d="M22 56 C22 56 18 44 25 36 C30 30 40 28 52 27 L75 25 C84 24 95 19 100 14 C104 10 110 12 111 18 C113 24 108 30 102 32 L80 36 C72 38 65 42 60 50 L30 54 Z" fill={isDark ? "#111111" : "#f0f0f0"} />
              <path d="M22 56 C18 50 18 42 26 36 C30 33 36 30 44 29 L38 46 Z" fill="#ff2200" />
              <path d="M58 50 C60 44 68 38 78 36 L100 32 C106 30 110 26 111 20 C112 28 108 34 100 36 L78 40 C68 42 60 48 58 54 Z" fill="#ff2200" opacity="0.3" />
              <path d="M38 46 C45 36 58 30 72 28 L95 24 C100 23 105 22 108 18 C106 26 98 30 90 32 L65 37 C52 40 42 48 38 54 Z" fill="#ff2200" opacity="0.7" />
              <path d="M44 29 L78 24 L80 36 L52 40 Z" fill={isDark ? "#1a1a1a" : "#e0e0e0"} opacity="0.8" />
              <circle cx="48" cy="30" r="1.5" fill="#ff2200" />
              <circle cx="56" cy="28" r="1.5" fill="#ff2200" />
              <circle cx="64" cy="27" r="1.5" fill="#ff2200" />
              <circle cx="72" cy="26" r="1.5" fill="#ff2200" />
              <circle cx="52" cy="37" r="1.5" fill="#ff2200" />
              <circle cx="60" cy="35" r="1.5" fill="#ff2200" />
              <circle cx="68" cy="34" r="1.5" fill="#ff2200" />
              <circle cx="76" cy="33" r="1.5" fill="#ff2200" />
              <line x1="48" y1="30" x2="52" y2="37" stroke="white" strokeWidth="1" opacity="0.6" />
              <line x1="56" y1="28" x2="52" y2="37" stroke="white" strokeWidth="1" opacity="0.6" />
              <line x1="56" y1="28" x2="60" y2="35" stroke="white" strokeWidth="1" opacity="0.6" />
              <line x1="64" y1="27" x2="60" y2="35" stroke="white" strokeWidth="1" opacity="0.6" />
              <line x1="64" y1="27" x2="68" y2="34" stroke="white" strokeWidth="1" opacity="0.6" />
              <line x1="72" y1="26" x2="68" y2="34" stroke="white" strokeWidth="1" opacity="0.6" />
              <line x1="72" y1="26" x2="76" y2="33" stroke="white" strokeWidth="1" opacity="0.6" />
              <path d="M24 40 C26 36 30 33 36 31" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
              <line x1="30" y1="68" x2="30" y2="70" stroke={isDark ? "#333" : "#bbb"} strokeWidth="2" strokeLinecap="round" />
              <line x1="45" y1="69" x2="45" y2="71" stroke={isDark ? "#333" : "#bbb"} strokeWidth="2" strokeLinecap="round" />
              <line x1="60" y1="69" x2="60" y2="71" stroke={isDark ? "#333" : "#bbb"} strokeWidth="2" strokeLinecap="round" />
              <line x1="75" y1="69" x2="75" y2="71" stroke={isDark ? "#333" : "#bbb"} strokeWidth="2" strokeLinecap="round" />
              <line x1="90" y1="68" x2="90" y2="70" stroke={isDark ? "#333" : "#bbb"} strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className={`text-lg font-black tracking-[0.2em] uppercase hidden sm:block transition-colors duration-300 ${
              isDark ? "text-white" : "text-black"
            }`}>
              Vorte<span className="text-red-500">X</span>
            </span>
          </NavLink>

          {/* ── DESKTOP: Nav links (center) ── */}
          <ul className="hidden md:flex gap-10 list-none m-0 p-0">
            {navLinks.map(({ label, to }) => (
              <li key={label}>
                <NavLink to={to} end={to === "/"} className={linkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ── RIGHT: Theme toggle + Buy Now ── */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                isDark
                  ? "border-white/10 bg-white/5 text-yellow-300"
                  : "border-black/10 bg-black/5 text-gray-600"
              }`}
            >
              {isDark ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Desktop Buy Now */}
            <button
              onClick={() => navigate("/sneakers")}
              className="hidden sm:flex relative overflow-hidden bg-red-600 text-white text-xs font-black tracking-widest uppercase px-6 h-10 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 items-center"
              style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
            >
              <span className="relative z-10">Buy Nowww!</span>
              <span
                className="absolute top-0 h-full w-1/3 bg-white/25 -skew-x-12"
                style={{ animation: "shine 2.5s ease-in-out infinite", left: "-75%" }}
              />
            </button>
          </div>

        </div>

        {/* ── MOBILE DROPDOWN MENU ── */}
        {menuOpen && (
          <div
            className={`mobile-menu md:hidden border-t px-6 py-6 flex flex-col gap-6 transition-colors duration-300 ${
              isDark
                ? "bg-[#0a0a0a] border-white/10"
                : "bg-white border-black/10"
            }`}
          >
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                end={to === "/"}
                onClick={() => setMenuOpen(false)}
                className={linkClass}
              >
                {label}
              </NavLink>
            ))}

            {/* Mobile Buy Now */}
            <button
              onClick={() => { navigate("/sneakers"); setMenuOpen(false); }}
              className="relative overflow-hidden bg-red-600 text-white text-xs font-black tracking-widest uppercase px-6 h-10 rounded-full transition-all duration-200 active:scale-95 w-full"
              style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
            >
              <span className="relative z-10">Buy Nowww!</span>
              <span
                className="absolute top-0 h-full w-1/3 bg-white/25 -skew-x-12"
                style={{ animation: "shine 2.5s ease-in-out infinite", left: "-75%" }}
              />
            </button>
          </div>
        )}
      </nav>
    </>
  );
}