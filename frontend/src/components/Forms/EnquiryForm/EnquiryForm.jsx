import React from 'react'
import toast from 'react-hot-toast';

const EnquiryForm = ({ step, hotelQuery, setHotelQuery, setStep, handleSubmit }) => {

  const isEmpty = hotelQuery.trim() === "";

  const handleProceed = () => {
    if (isEmpty) toast.error("Please enter a hotel to proceed.")
    else {

      setStep(2)
    }

  }
  return (
    <section
      id="destination-section"
      className="relative min-h-screen flex items-center justify-center text-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/section 2.png')" }}
    >
      <div className="absolute inset-0 bg-black/65 z-0" />

      <div className="relative z-10 w-full max-w-xl px-5">

        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <h2 className="text-3xl font-black text-[#F0E130] mb-8 uppercase tracking-wide">
              Where is your heart taking you, Captain?
            </h2>
            <div className="flex flex-col items-center gap-6">
              <input
                type="text"
                placeholder="Which hotel are you looking for?"
                value={hotelQuery}
                onChange={(e) => setHotelQuery(e.target.value)}
                className="w-full px-4 py-4 bg-white/10 border border-white/50 text-white text-base rounded placeholder-white/40 outline-none focus:border-[#F0E130] transition-colors duration-300"
              />
              <button
                onClick={handleProceed}


                className="px-10 py-3 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                Proceed
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <h2 className="text-3xl font-black text-[#F0E130] mb-8 uppercase tracking-wide">
              Almost There!
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full px-4 py-4 bg-white/10 border border-white/50 text-white text-base rounded placeholder-white/40 outline-none focus:border-[#F0E130] transition-colors duration-300"
              />
              <input
                type="tel"
                name="contact"
                placeholder="Contact Details"
                required
                className="w-full px-4 py-4 bg-white/10 border border-white/50 text-white text-base rounded placeholder-white/40 outline-none focus:border-[#F0E130] transition-colors duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail ID"
                required
                className="w-full px-4 py-4 bg-white/10 border border-white/50 text-white text-base rounded placeholder-white/40 outline-none focus:border-[#F0E130] transition-colors duration-300"
              />
              <div className="flex gap-4 mt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-8 py-3 bg-transparent border border-white/50 text-white/70 font-bold uppercase tracking-wider hover:border-white hover:text-white transition-all duration-300"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-10 py-3 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-[#F0E130] hover:text-black hover:border-[#F0E130] transition-all duration-300"
                >
                  Submit Details
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </section>
  )
}

export default EnquiryForm
