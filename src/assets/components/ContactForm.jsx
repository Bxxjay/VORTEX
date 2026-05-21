import { useState } from "react";

export default function ContactForm({ isDark }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (form.firstName && form.email && form.message) {
      setSent(true);
      setForm({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }
  };

  const inputClass = `w-full h-12 px-4 rounded-xl text-sm outline-none transition-colors duration-200 border focus:border-red-500 ${
    isDark
      ? "bg-white/5 border-white/8 text-white placeholder-white/25"
      : "bg-black/5 border-black/8 text-black placeholder-black/25"
  }`;

  const labelClass = `text-xs font-black tracking-widest uppercase mb-2 block ${
    isDark ? "text-white/60" : "text-black/60"
  }`;

  const contactCards = [
    {
      label: "Email Address",
      value: "vortex@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6v12h16V6l-8 5z"/>
        </svg>
      ),
    },
    {
      label: "Phone Number",
      value: "+001 234 567 890",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
      ),
    },
    {
      label: "Location",
      value: "Lagos, Nigeria",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
    },
  ];

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

      <div className={`w-full min-h-screen transition-colors duration-300 ${isDark ? "bg-[#0a0a0a]" : "bg-[#f0f0f0]"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

          {/* ── HEADER ── */}
          <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 border ${
              isDark
                ? "bg-white/5 border-white/10 text-white/60"
                : "bg-black/5 border-black/10 text-black/50"
            }`}>
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-red-500" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Get in touch
            </div>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-3 ${
              isDark ? "text-white" : "text-black"
            }`}>
              Contact <span className="text-red-500">VorteX</span>
            </h1>
            <p className={`text-sm sm:text-base max-w-md leading-relaxed ${
              isDark ? "text-white/40" : "text-black/40"
            }`}>
              Have a question, a collab idea, or just want to talk sneakers?
              We're always here for it.
            </p>
          </div>

          {/* ── CONTACT CARDS ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
            {contactCards.map(({ label, value, icon }) => (
              <div
                key={label}
                className={`flex flex-col items-center text-center rounded-2xl sm:rounded-3xl border p-6 sm:p-8 transition-colors duration-300 ${
                  isDark
                    ? "bg-[#111] border-white/8"
                    : "bg-white border-black/8"
                }`}
              >
                {/* Icon box */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                  isDark ? "bg-white/8 text-white" : "bg-black/8 text-black"
                }`}>
                  {icon}
                </div>
                <p className={`text-base sm:text-lg font-black mb-1 ${
                  isDark ? "text-white" : "text-black"
                }`}>
                  {value}
                </p>
                <p className={`text-xs font-semibold tracking-widest uppercase ${
                  isDark ? "text-white/30" : "text-black/30"
                }`}>
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* ── MAIN SECTION: Image + Form ── */}
          <div className={`flex flex-col lg:flex-row rounded-2xl sm:rounded-3xl overflow-hidden border ${
            isDark ? "bg-[#111] border-white/8" : "bg-white border-black/8"
          }`}>

            {/* Left — Image */}
            <div className="w-full lg:w-[45%] min-h-[280px] sm:min-h-[380px] lg:min-h-[620px] overflow-hidden">
              <img
                src="images/largea.jpg"
                alt="VorteX contact"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Right — Form */}
            <div className="w-full lg:w-[55%] p-6 sm:p-8 lg:p-10 flex flex-col justify-center">

              {/* Success message */}
              {sent && (
                <div className="mb-6 px-5 py-4 rounded-xl bg-red-600/10 border border-red-500/30 text-red-500 text-sm font-bold tracking-wide text-center">
                  ✓ Message sent! We'll get back to you soon.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                {/* First Name */}
                <div>
                  <label className={labelClass}>First Name</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handle}
                    required
                    placeholder="John"
                    className={inputClass}
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    required
                    onChange={handle}
                    placeholder="Doe"
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handle}
                    placeholder="you@gmail.com"
                    className={inputClass}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className={labelClass}>Phone No</label>
                  <input
                    name="phone"
                    value={form.phone}
                    required
                    onChange={handle}
                    placeholder="+123 456 789 00"
                    className={inputClass}
                  />
                </div>

                {/* Subject — full width */}
                <div className="sm:col-span-2">
                  <label className={labelClass}>Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    required
                    onChange={handle}
                    placeholder="Enquiry ...."
                    className={inputClass}
                  />
                </div>

                {/* Message — full width */}
                <div className="sm:col-span-2">
                  <label className={labelClass}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    required
                    placeholder="Enter message here..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors duration-200 border focus:border-red-500 resize-none ${
                      isDark
                        ? "bg-white/5 border-white/8 text-white placeholder-white/25"
                        : "bg-black/5 border-black/8 text-black placeholder-black/25"
                    }`}
                  />
                </div>

              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="relative overflow-hidden mt-5 w-full h-12 rounded-full bg-red-600 text-white text-xs font-black tracking-widest uppercase transition-all duration-200 hover:scale-[1.02] active:scale-95"
                style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
              >
                <span className="relative z-10">Send Message</span>
                <span
                  className="absolute top-0 h-full w-1/3 bg-white/20 -skew-x-12"
                  style={{ animation: "shine 2.5s ease-in-out infinite", left: "-75%" }}
                />
              </button>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}