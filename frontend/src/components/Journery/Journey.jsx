import React, { useState } from 'react'
import JourneyModal from './components/JourneyModal'
import toast from 'react-hot-toast'


const categories = [
  { label: "Family",    image: "/images/family.jpg" },
  { label: "Couples",   image: "/images/couples.jpg" },
  { label: "Honeymoon", image: "/images/honeymoon.jpg" },
  { label: "Group",     image: "/images/groups.jpg" },
]

const Journey = () => {
  const [selected, setSelected] = useState(null)

  const handleSubmit = async ({ category, fullname, email, contact, location, checkin, checkout }) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: fullname,
        email: email,
        phone: contact,
        subject: `${category} Trip Enquiry`,
        message: `Category: ${category}\nPreferred Location: ${location}\nCheck-in: ${checkin}\nCheck-out: ${checkout}`,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      toast.error(data.message || 'Something went wrong.')
      return
    }

    toast.success("Enquiry submitted! We'll get back to you soon.")
    setSelected(null)

  } catch {
    toast.error('Unable to reach server. Check your connection.')
  }
}

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center px-[8%] py-24">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-black text-white text-center uppercase tracking-widest mb-16">
        Start Your <span className="text-[#F0E130]">Journey</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => setSelected(cat.label)}
            className="relative rounded-lg overflow-hidden h-[420px] group cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.label}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <span className="text-white text-2xl font-black uppercase tracking-[4px]">
                {cat.label}
              </span>
              <div className="mx-auto mt-2 h-[2px] w-0 bg-[#F0E130] group-hover:w-16 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <JourneyModal
        category={selected}
        onClose={() => setSelected(null)}
        onSubmit={handleSubmit}
      />

    </section>
  )
}

export default Journey