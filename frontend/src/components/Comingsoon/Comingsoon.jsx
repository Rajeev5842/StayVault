import React, { useState, useEffect } from 'react'

const features = [
  { icon: "🛫", text: "Domestic & International Flights" },
  { icon: "💺", text: "Business & First Class Deals" },
  { icon: "🔔", text: "Price Drop Alerts" },
  { icon: "🎯", text: "Curated Itinerary Packages" },
]

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Countdown to a launch date
  useEffect(() => {
    const launch = new Date('2025-09-01T00:00:00')
    const tick = () => {
      const now = new Date()
      const diff = launch - now
      if (diff <= 0) return
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleNotify = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-[8%] py-24 bg-fixed bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80')" }}
    >
      {/* Dark overlay — slightly lighter than WhyUs to feel different */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Animated dashed flight path line */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" className="opacity-10">
          <path
            d="M -100 400 Q 400 100 900 350 Q 1300 550 1800 200"
            fill="none"
            stroke="#F0E130"
            strokeWidth="2"
            strokeDasharray="12 8"
          />
          <path
            d="M -100 600 Q 500 300 1000 500 Q 1400 650 1900 350"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            strokeDasharray="8 12"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 border border-[#F0E130]/30 bg-[#F0E130]/10 rounded-full px-5 py-2 mb-8">
          <span className="text-[#F0E130] text-xs font-black uppercase tracking-[4px]">Coming Soon</span>
        </div>

        {/* Plane icon — CSS drawn */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-[#F0E130]/20 blur-2xl scale-150" />
            <div className="relative w-24 h-24 rounded-full bg-[#F0E130]/10 border border-[#F0E130]/30 flex items-center justify-center">
              <span className="text-5xl" style={{ transform: 'rotate(45deg)', display: 'inline-block' }}>✈️</span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight mb-4">
          Flight Bookings
          <br />
          <span className="text-[#F0E130]">Taking Off Soon</span>
        </h2>

        <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          StayVault is expanding beyond hotels. Get ready for exclusive flight deals, curated travel packages, and concierge-level service — all in one place.
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 md:gap-8 mb-14">
          {[
            { value: timeLeft.days,  label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.mins,  label: 'Mins' },
            { value: timeLeft.secs,  label: 'Secs' },
          ].map(({ value, label }, i) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-2 backdrop-blur-sm">
                <span className="text-2xl md:text-3xl font-black text-[#F0E130]">
                  {String(value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-white/40 text-[10px] uppercase tracking-[3px]">{label}</span>
            </div>
          ))}
        </div>

        {/* Features pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {features.map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:border-[#F0E130]/40 hover:bg-[#F0E130]/5 transition-all duration-300"
            >
              <span className="text-sm">{icon}</span>
              <span className="text-white/70 text-xs font-semibold tracking-wide">{text}</span>
            </div>
          ))}
        </div>

        {/* Notify form */}
        {!submitted ? (
          <div>
            <p className="text-white/40 text-xs uppercase tracking-[3px] mb-4">Get notified at launch</p>
            <form onSubmit={handleNotify} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white text-sm rounded placeholder-white/30 outline-none focus:border-[#F0E130] transition-colors duration-300"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-[#F0E130] text-black font-black uppercase tracking-widest text-sm rounded hover:bg-yellow-300 transition-colors duration-300 whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          </div>
        ) : (
          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-full px-8 py-4">
            <span className="text-green-400 text-xl">✓</span>
            <p className="text-green-400 font-black uppercase tracking-widest text-sm">
              You're on the list! We'll notify you.
            </p>
          </div>
        )}

      </div>
    </section>
  )
}

export default ComingSoon