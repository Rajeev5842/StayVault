import React from 'react'

const inputClass =
  "w-full px-4 py-3 bg-white/10 border border-white/30 text-white text-sm rounded placeholder-white/40 outline-none focus:border-[#F0E130] transition-colors duration-300"

const JourneyModal = ({ category, onClose, onSubmit }) => {
  if (!category) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    const { fullname, email, contact, checkin, checkout, location } = e.target
    onSubmit({
      category,
      fullname: fullname.value,
      email: email.value,
      contact: contact.value,
      location: location.value,
      checkin: checkin.value,
      checkout: checkout.value,
    })
  }

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-[#121212] border border-white/10 rounded-xl w-full max-w-md p-8 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-white/40 hover:text-white text-2xl font-black transition-colors cursor-pointer"
        >
          ✕
        </button>

        {/* Heading */}
        <h3 className="text-xl font-black text-white uppercase tracking-widest mb-1">
          {category} <span className="text-[#F0E130]">Enquiry</span>
        </h3>
        <p className="text-white/40 text-xs mb-6 tracking-wide">
          Fill in your details and we'll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail ID"
            required
            className={inputClass}
          />
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            required
            className={inputClass}
          />
          <input
            type="text"
            name="location"
            placeholder="Preferred Location"
            required
            className={inputClass}
          />

          {/* Dates row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-white/40 text-xs uppercase tracking-widest mb-1 block">
                Check-in
              </label>
              <input
                type="date"
                name="checkin"
                required
                className={`${inputClass} [color-scheme:dark]`}
              />
            </div>
            <div>
              <label className="text-white/40 text-xs uppercase tracking-widest mb-1 block">
                Check-out
              </label>
              <input
                type="date"
                name="checkout"
                required
                className={`${inputClass} [color-scheme:dark] `}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 px-10 py-3 bg-[#F0E130] text-black font-black uppercase tracking-widest rounded hover:bg-yellow-300 transition-colors duration-300 cursor-pointer"
          >
            Submit Enquiry
          </button>
        </form>

      </div>
    </div>
  )
}

export default JourneyModal