import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import toast from 'react-hot-toast'

const contactDetails = [
  {
    icon: "📍",
    label: "Address",
    value: "India",
    sub: "Serving travellers nationwide",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 63961 05393",
    href: "https://wa.me/916396105393",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "hello@stayvault.in",
    href: "mailto:hello@stayvault.in",
  },
  {
    icon: "🕐",
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 8:00 PM",
    sub: "Sun: 10:00 AM – 5:00 PM",
  },
]

const subjects = [
  "Hotel Sourcing",
  "Group Bookings",
  "Honeymoon Packages",
  "Corporate Stays",
  "General Enquiry",
  "Other",
]

const Contact = () => {
  const [scrolled, setScrolled] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  if (!form.fullName || !form.email || !form.message) {
    toast.error('Please fill in all required fields.')
    return
  }
  setLoading(true)

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.fullName,      // map fullName → name
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      toast.error(data.message || 'Something went wrong. Please try again.')
      return
    }

    toast.success("Message sent! We'll get back to you soon.")
    setForm({ fullName: '', email: '', phone: '', subject: '', message: '' })

  } catch {
    toast.error('Unable to reach the server. Please check your connection.')
  } finally {
    setLoading(false)
  }
}

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar scrolled={scrolled} />

      {/* Hero Banner */}
      <div className="relative pt-32 pb-16 px-[8%] border-b border-white/10 overflow-hidden">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(#F0E130 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F0E130]/30 to-transparent" />
        <div className="absolute top-10 right-[8%] w-80 h-80 rounded-full bg-[#F0E130]/5 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <p className="text-[#F0E130] text-xs font-black uppercase tracking-[5px] mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-4">
            Contact<br />
            <span className="text-[#F0E130]">Us</span>
          </h1>
          <p className="text-white/40 text-sm mt-6 max-w-xl leading-relaxed">
            Have a trip in mind? Looking for the perfect stay? We're just a message away — reach out and let us do the heavy lifting.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-[8%] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — Contact Info */}
          <div className="flex flex-col gap-10">

            {/* Info Cards */}
            <div className="flex flex-col gap-4">
              {contactDetails.map(({ icon, label, value, sub, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-[#F0E130]/25 hover:bg-[#F0E130]/[0.03] transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lg shrink-0 group-hover:border-[#F0E130]/30 transition-colors duration-300">
                    {icon}
                  </div>
                  <div>
                    <p className="text-white/30 text-[10px] uppercase tracking-[3px] font-black mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white text-sm font-semibold hover:text-[#F0E130] transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-semibold">{value}</p>
                    )}
                    {sub && <p className="text-white/30 text-xs mt-0.5">{sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Strip */}
            <div>
              <p className="text-white/30 text-[10px] uppercase tracking-[4px] font-black mb-4">Find Us On</p>
              <div className="flex gap-3">
                {[
                  { name: "Instagram", href: "https://instagram.com/stayvault", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                  { name: "WhatsApp", href: "https://wa.me/916396105393", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
                  { name: "Facebook", href: "https://facebook.com/stayvault", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                  { name: "Twitter", href: "https://twitter.com/stayvault", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                ].map(({ name, href, icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#F0E130] hover:border-[#F0E130]/40 hover:bg-[#F0E130]/5 transition-all duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <a
              href="https://wa.me/916396105393"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-[#F0E130] text-black font-black text-sm uppercase tracking-widest hover:bg-white transition-colors duration-300 w-fit"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>

          </div>

          {/* RIGHT — Contact Form */}
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
            <h2 className="text-white font-black uppercase tracking-[3px] text-sm mb-1">Send Us a Message</h2>
            <p className="text-white/30 text-xs mb-8">We typically respond within 24 hours.</p>

            <div className="flex flex-col gap-5">

              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-white/40 text-[10px] uppercase tracking-[3px] font-black">
                  Full Name <span className="text-[#F0E130]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#F0E130]/50 focus:bg-[#F0E130]/[0.03] transition-all duration-200"
                />
              </div>

              {/* Email + Phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-[10px] uppercase tracking-[3px] font-black">
                    Email <span className="text-[#F0E130]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#F0E130]/50 focus:bg-[#F0E130]/[0.03] transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-[10px] uppercase tracking-[3px] font-black">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#F0E130]/50 focus:bg-[#F0E130]/[0.03] transition-all duration-200"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-white/40 text-[10px] uppercase tracking-[3px] font-black">
                  Subject
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F0E130]/50 transition-all duration-200 appearance-none cursor-pointer"
                  style={{ color: form.subject ? '#ffffff' : 'rgba(255,255,255,0.2)' }}
                >
                  <option value="" disabled hidden>Select a subject</option>
                  {subjects.map(s => (
                    <option key={s} value={s} className="bg-[#111] text-white">{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-white/40 text-[10px] uppercase tracking-[3px] font-black">
                  Your Message <span className="text-[#F0E130]">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your travel plans, preferred destinations, group size, or any special requests..."
                  className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#F0E130]/50 focus:bg-[#F0E130]/[0.03] transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#F0E130] text-black font-black text-sm uppercase tracking-widest hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message ✈️'
                )}
              </button>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact