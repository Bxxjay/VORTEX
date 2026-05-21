import { useNavigate } from "react-router-dom";

export default function StoreHero() {
  const navigate = useNavigate();

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
        .hero-content { animation: slideUp 0.8s ease forwards; }
      `}</style>

      <div className="relative w-full min-h-[85vh] sm:min-h-screen overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('images/largeb.jpg')", 
            backgroundColor: "#0a0a0a", 
          }}
        />

        {/* ── DARK OVERLAY ── */}
        <div className="absolute inset-0 bg-black/55" />

        {/* ── RED GLOW BLOBS (like the Tailwind UI code) ── */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-20 -z-0 overflow-hidden blur-3xl pointer-events-none"
        >
          <div
            className="relative left-1/2 -translate-x-1/2 w-[60vw] aspect-[16/9] bg-gradient-to-tr from-red-700 to-red-400 opacity-10 rotate-12"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* ── CONTENT ── */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] sm:min-h-screen px-5 sm:px-10 text-center py-24">
          <div className="hero-content flex flex-col items-center">

            {/* Badge — "Contact • Get in touch with VorteX" */}
            <div className="flex items-center gap-0 mb-6 sm:mb-8 rounded-full overflow-hidden border border-white/20 backdrop-blur-sm">
              <span className="bg-white text-black text-xs sm:text-sm font-black tracking-[0.15em] uppercase px-4 py-1.5">
                Sneakers!!!!!
              </span>
              <span className="text-white/70 text-xs sm:text-sm font-medium px-4 py-1.5">
                We give you nothing but the best
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.0] tracking-tight mb-5 sm:mb-6 max-w-xs sm:max-w-2xl lg:max-w-4xl">
              Giving you the best{" "}
              <span className="text-red-500">of the</span> very best
            </h1>

            {/* Subtext */}
            <p className="text-white/60 text-sm sm:text-base lg:text-lg font-medium max-w-xs sm:max-w-md leading-relaxed mb-8 sm:mb-10">
              Explore our handpicked sneaker silhouettes,
              built with premium sustainable materials and designed to keep every step clean, modern, and timeless.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">

              {/* Browse collections — glowing red */}
              <button
                onClick={() => navigate("/contact")}
                className="relative overflow-hidden bg-white text-black text-xs font-black tracking-widest uppercase px-7 h-12 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 w-48 sm:w-auto hover:bg-red-500 hover:text-white"
              >
                <span className="relative z-10">Reach Out To Us</span>
                <span
                  className="absolute top-0 h-full w-1/3 bg-white/20 -skew-x-12"
                  style={{ animation: "shine 2.5s ease-in-out infinite", left: "-75%" }}
                />
              </button>

              {/* Contact us — ghost */}
              <button
                onClick={() => navigate("/about")}
                className="text-white/80 text-xs font-bold tracking-widest uppercase px-7 h-12 rounded-full border border-white/30 backdrop-blur-sm hover:border-red-500 hover:text-red-400 transition-all duration-200 hover:scale-105 active:scale-95 w-48 sm:w-auto"
              >
                About us
              </button>

            </div>
          </div>
        </div>

        {/* ── BOTTOM GLOW BLOB ── */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 overflow-hidden blur-3xl pointer-events-none"
        >
          <div
            className="relative left-1/2 translate-x-1/4 w-[50vw] aspect-[16/9] bg-gradient-to-tr from-red-800 to-red-500 opacity-10"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

      </div>
    </>
  );
}