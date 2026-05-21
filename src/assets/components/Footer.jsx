import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Footer({ isDark }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { label: "Home",     to: "/" },
    { label: "About",    to: "/about" },
    { label: "Sneakers", to: "/sneakers" },
    { label: "Contact",  to: "/contact" },
  ];

  const socials = [
    { label: "Instagram", href: "https://www.instagram.com" },
    { label: "Facebook",  href: "https://www.facebook.com" },
    { label: "Twitter",   href: "https://www.twitter.com" },
    { label: "YouTube",   href: "https://www.youtube.com" },
    { label: "Snapchat",  href: "https://www.snapchat.com" },
    { label: "TikTok",    href: "https://www.tiktok.com" },
  ];

  const contacts = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      text: "vortex@gmail.com",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.86-.86a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      ),
      text: "+234 703 614 0343",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      text: "Lagos, Nigeria",
    },
  ];

  const base = isDark ? "bg-[#0a0a0a]" : "bg-black";

  return (
    <>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 2px #dc2626, 0 4px 20px rgba(220,38,38,0.45); }
          50%       { box-shadow: 0 0 0 2px #dc2626, 0 6px 32px rgba(220,38,38,0.85); }
        }
        @keyframes shine {
          0%, 100% { left: -75%; opacity: 0.7; }
          50%       { left: 125%; opacity: 0; }
        }
      `}</style>

      <footer className={`w-full ${base} transition-colors duration-300`}>

        {/* ── NEWSLETTER STRIP ── */}
        <div className={`border-b border-white/8`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Subscribe to<br className="sm:hidden" /> our news letter
            </h3>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                placeholder="Enter your email"
                className="flex-1 sm:w-64 lg:w-80 h-12 px-5 rounded-full bg-white/8 border border-white/10 text-white text-sm placeholder-white/30 outline-none focus:border-red-500 transition-colors duration-200"
              />
              <button
                onClick={handleSubscribe}
                className="relative overflow-hidden h-12 px-6 rounded-full bg-white text-black text-xs font-black tracking-widest uppercase flex-shrink-0 transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-red-500 hover:text-white"
              >
                {subscribed ? "Done ✓" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>

        {/* ── MAIN FOOTER CONTENT ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Brand col */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="text-xl font-black tracking-[0.2em] uppercase text-white mb-3">
                Vorte<span className="text-red-500">X</span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
                A sophisticated sneaker store designed for modern and bold streetwear culture.
              </p>
              <NavLink to="/contact">
                <button className="text-xs font-black tracking-widest uppercase px-5 h-10 rounded-full border border-white/20 text-white hover:border-red-500 hover:text-red-500 transition-all duration-200 hover:scale-105 active:scale-95">
                  Contact VorteX
                </button>
              </NavLink>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-black tracking-widest uppercase text-white mb-5">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map(({ label, to }) => (
                  <li key={label}>
                    <NavLink
                      to={to}
                      className="text-sm text-white/40 hover:text-red-500 transition-colors duration-200"
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow us */}
            <div>
              <h4 className="text-sm font-black tracking-widest uppercase text-white mb-5">
                Follow us
              </h4>
              <ul className="flex flex-col gap-3">
                {socials.map(({ label, href }) => (
                  <li key={label}>
                    
                <a     href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/40 hover:text-red-500 transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in touch */}
            <div>
              <h4 className="text-sm font-black tracking-widest uppercase text-white mb-5">
                Get in touch
              </h4>
              <ul className="flex flex-col gap-4">
                {contacts.map(({ icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-white/40">
                    <span className="text-red-500">{icon}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="border-t border-white/8" />

        {/* ── GIANT WORDMARK ── */}
        <div className="w-full overflow-hidden leading-none select-none px-2 sm:px-4 pt-2">
          <p className="text-[20vw] font-black tracking-tighter text-white text-center leading-none">
            VORTE<span className="text-red-500">X</span>
          </p>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className={`border-t border-white/8`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-white/25 font-mono tracking-widest uppercase">
              © {new Date().getFullYear()} VorteX. All rights reserved.
            </p>
            <p className="text-[11px] text-white/25 font-mono tracking-widest uppercase">
              Built with ❤️ for sneaker culture
            </p>
          </div>
        </div>

      </footer>
    </>
  );
}