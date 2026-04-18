import React, { useState, useEffect } from 'react'
import PhoneMockup from './components/PhoneMockup/PhoneMockup'

const reasons = [
  { icon: "🏨", title: "Exclusive Off-Market Deals",    desc: "Access hotels and villas never listed publicly — curated only for StayVault members." },
  { icon: "⚡", title: "Lightning Fast Sourcing",        desc: "Tell us what you need. We source, negotiate, and confirm — all within hours." },
  { icon: "💰", title: "Best Rate Guarantee",            desc: "We go directly to properties, cutting out middlemen so you always pay less." },
  { icon: "🤝", title: "Dedicated Travel Concierge",    desc: "A real human handles your booking end-to-end. No bots, no wait times." },
  { icon: "🔒", title: "100% Verified Properties",      desc: "Every property is personally vetted. What you see is exactly what you get." },
]

const WhyUs = () => {
  return (
    <section
      className="relative min-h-screen flex items-center px-[8%] py-24 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')" }}
    >
      <div className="absolute inset-0 bg-black/75 z-0" />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — Phone Mockup */}
        <div className="flex items-center justify-center">
          <PhoneMockup />
        </div>

        {/* RIGHT — Content */}
        <div>
          <p className="text-[#F0E130] text-xs font-black uppercase tracking-[5px] mb-4">
            Our Promise
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight mb-12">
            Why Choose <span className="text-[#F0E130]">StayVault?</span>
          </h2>

          <div className="flex flex-col gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-5 group">
                <div className="min-w-[48px] h-12 rounded-lg bg-[#F0E130]/10 border border-[#F0E130]/20 flex items-center justify-center text-xl group-hover:bg-[#F0E130] group-hover:border-[#F0E130] transition-all duration-300">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">{reason.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default WhyUs