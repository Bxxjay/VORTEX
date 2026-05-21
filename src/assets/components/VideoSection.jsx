import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function VideoHero() {
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 2px #dc2626, 0 4px 24px rgba(220,38,38,0.5); }
          50%       { box-shadow: 0 0 0 2px #dc2626, 0 6px 36px rgba(220,38,38,0.9); }
        }
        @keyframes shine {
          0%, 100% { left: -75%; opacity: 0.7; }
          50%       { left: 125%; opacity: 0; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vid-text { animation: slideUp 0.8s ease forwards; }
      `}</style>

      <section className="relative w-full h-[100svh] min-h-[500px] overflow-hidden">

        {/* ── VIDEO ── */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="videos/sneakers.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* ── OVERLAY ── */}
        <div className="absolute inset-0 bg-black/50" />

        {/* ── CONTENT ── */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 text-center">

          <div className="vid-text flex flex-col items-center">

            {/* Badge — "Vortex • Since 2019" */}
            <div className="flex items-center gap-0 mb-6 sm:mb-8 rounded-full overflow-hidden border border-white/20 backdrop-blur-sm">
              <span className="bg-white text-black text-xs sm:text-sm font-black tracking-[0.15em] uppercase px-4 py-1.5">
                Vorte<span className="text-red-500">X</span>
              </span>
              <span className="text-white/80 text-xs sm:text-sm font-medium px-4 py-1.5">
                Since 2019
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4 sm:mb-6 max-w-xs sm:max-w-2xl">
              Defining<br className="sm:hidden" />{" "}
              <span className="text-red-500">modern</span> style
            </h2>

            {/* Subtext */}
            <p className="text-white/60 text-sm sm:text-base lg:text-lg font-medium max-w-xs sm:max-w-md leading-relaxed mb-8 sm:mb-10">
              A decade ago, we set out to redefine the sneaker game.
              Today, we merge street culture with high-end craft
              in every silhouette we drop.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <NavLink to="/about">
                <button
                  className="relative overflow-hidden bg-white text-black text-xs font-black tracking-widest uppercase px-7 h-11 sm:h-12 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 w-44 sm:w-auto"
                >
                  More about us
                </button>
              </NavLink>

              <NavLink to="/contact">
                <button className="text-white/80 text-xs font-bold tracking-widest uppercase px-7 h-11 sm:h-12 rounded-full border border-white/30 backdrop-blur-sm hover:border-white/60 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 w-44 sm:w-auto">
                  Contact us
                </button>
              </NavLink>
            </div>

          </div>
        </div>

        {/* ── PLAY / PAUSE BUTTON — bottom left ── */}
        <button
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
          className="absolute bottom-6 left-5 sm:bottom-8 sm:left-8 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:bg-white/25 hover:scale-110 active:scale-95"
        >
          {playing ? (
            /* Pause icon */
            <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor">
              <rect x="5" y="4" width="4" height="16" rx="1" />
              <rect x="15" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            /* Play icon */
            <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor">
              <path d="M6 4.75a.75.75 0 0 0-1.13.65v13.2a.75.75 0 0 0 1.13.65l10.5-6.6a.75.75 0 0 0 0-1.3L6 4.75Z" />
            </svg>
          )}
        </button>

        {/* ── BRAND WATERMARK — bottom right ── */}
        <div className="absolute bottom-6 right-5 sm:bottom-8 sm:right-8 z-20 flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-red-500" fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
          <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase">
            Vorte<span className="text-red-500">X</span>
          </span>
        </div>

      </section>
    </>
  );
}