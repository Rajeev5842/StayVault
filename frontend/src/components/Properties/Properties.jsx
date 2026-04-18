import React from 'react'

const cards = [
  {
    badge: "OFF-MARKET EXCLUSIVE",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    title: "Property Name",
    price: "₹1,26,600",
    meta: "Based on Goa Request - 10 Guests, Private Chef",
    
  },
  {
    badge: "MEMBERS ONLY",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    title: "Property Name",
    price: "₹89,400",
    meta: "Based on Udaipur Request - 6 Guests, Lake View",
  },
  {
    badge: "BEST VALUE",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    title: "Property Name",
    price: "₹54,200",
    meta: "Based on Jaipur Request - 4 Guests, Heritage Suite",
  },
]

const Properties = () => {
  return (
    <section className="min-h-screen bg-[#121212] flex flex-col items-center justify-center px-[8%] py-24">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-black text-white text-center uppercase tracking-widest mb-16">
        Our Handpicked Experiences
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-black border border-white/10 rounded-lg overflow-hidden hover:border-[#F0E130]/50 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Badge */}
            <div className="relative">
              <img
                src={`${card.image}?auto=format&fit=crop&w=600&q=80`}
                alt="Property"
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#F0E130] text-black text-xs font-black px-3 py-1 rounded-sm tracking-widest uppercase">
                {card.badge}
              </span>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className= "text-[#F0E130] text-2xl font-black mb-3  uppercase tracking-[4px]">
                {card.title}
              </h3>
            
              <p className="text-white/50 text-sm font-medium leading-relaxed">
                {card.meta}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Properties;