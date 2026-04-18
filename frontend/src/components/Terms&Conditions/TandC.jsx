import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const sections = [
  {
    id: "definitions",
    title: "1. Definitions",
    content: [
      { term: "User / You / Your", detail: "Any person or entity visiting, accessing, registering on, or making a Booking through the Platform." },
      { term: "Booking", detail: "Any confirmed purchase or reservation for a single experience/activity or a complete operated tour package comprising multiple services such as hotels, flights, visas, transfers, and experiences." },
      { term: "Supplier / Third-Party Supplier", detail: "Any third-party entity engaged by StayVault to deliver specific components of the Services. For Complete Tour Packages, such Suppliers act under StayVault's contractual coordination. For Direct Experience / Activity Bookings, the Supplier provides the service independently." },
      { term: "Services", detail: "All offerings booked through StayVault, including operated tour packages, hotels, flights, experiences, activities, visas, transfers, and associated logistics." },
      { term: "Quotation", detail: "A formal offer issued by StayVault detailing the itinerary, inclusions, exclusions, schedules, pricing, cancellation terms, and payment deadlines. Once payment is made, the Quotation along with these T&C constitutes the final binding contract." },
      { term: "Platform", detail: "StayVault's websites, mobile apps, partner pages, social media accounts, and any affiliated channels used for promotion, booking, or customer support." },
      { term: "Force Majeure", detail: "Events beyond StayVault's reasonable control, including but not limited to natural disasters, pandemics, government actions, strikes, or political unrest, impacting service delivery." },
    ]
  },
  {
    id: "scope",
    title: "2. Application & Scope",
    content: `These T&C are divided into two parts:\n\nPart A – Direct Experience / Activity Bookings: Single standalone activities or experiences booked individually (e.g., attraction tickets, day tours).\n\nPart B – Operated Tour Packages: Multi-service itineraries operated by StayVault, including flights, hotels, transfers, activities, visa facilitation, group tours, private tours, and customized itineraries.\n\nGeneral provisions apply to both parts unless explicitly stated otherwise.`
  },
  {
    id: "agreement",
    title: "3. Legal Agreement & Booking Contract",
    content: `You confirm that you are at least 18 years old and legally competent to enter into binding contracts. If you book on behalf of others, you accept responsibility for ensuring their compliance with these T&C.\n\nFor Part B, the final Quotation issued by StayVault and paid for by You constitutes the definitive contract. For Part A, the booking confirmation voucher together with these T&C forms the contract.`
  },
  {
    id: "role",
    title: "4. Role of StayVault",
    content: `Part A – Facilitator Role: For single activities or experiences, StayVault acts as a booking facilitator. The underlying service is delivered independently by third-party Suppliers.\n\nPart B – Principal Tour Operator Role: For Complete Tour Packages, StayVault acts as the principal tour operator. While StayVault does not own airlines, hotels, or transport assets, it contracts, coordinates, supervises, and manages multiple Suppliers to deliver a single integrated tour product.\n\nStayVault assumes responsibility for: itinerary design and planning, supplier selection and coordination, end-to-end tour execution oversight, on-ground issue resolution and customer support.`
  },
  {
    id: "flights",
    title: "5. Flights Policy",
    content: `StayVault facilitates flight bookings as part of an integrated operated tour package. Airline operations remain governed by airline policies, including delays, rescheduling, cancellations, and baggage rules. Refunds follow airline fare rules and are processed after receipt from airlines.`
  },
  {
    id: "hotels",
    title: "6. Hotels & Accommodation",
    content: `StayVault does not own hotels but contracts and manages accommodation providers as part of the operated tour package. In case of overbooking or unavailability, StayVault will arrange comparable alternatives, subject to availability. Liability is limited to the affected service value. Local taxes, mandatory charges, and security deposits are payable directly by the User.`
  },
  {
    id: "visa",
    title: "7. Visa Policy",
    content: `StayVault facilitates visa applications; issuance remains at embassy discretion. Visa fees are non-refundable unless stated otherwise. Visa denial does not override tour cancellation terms.\n\nIf your visa is denied or delayed, standard cancellation terms still apply for the overall package. StayVault is not liable for any extra costs from the denial (e.g., new flight tickets, accommodation changes, partial refunds for missed departure).\n\nYou are solely responsible for obtaining transit visas if your itinerary includes layovers requiring a separate visa. Customers are strongly advised to purchase travel insurance to cover such contingencies.`
  },
  {
    id: "transfers",
    title: "8. Transfers & Transport",
    content: `StayVault coordinates and oversees transfers through contracted transport partners. In the event of breakdowns or delays, StayVault will make reasonable operational efforts to minimize disruption, subject to local conditions and availability. Users remain responsible for personal belongings.\n\n1 piece of baggage + 1 carry-on per person is included. Additional or oversized luggage may require prior notice and extra fees. Drivers may refuse unscheduled stops if they violate local regulations or affect subsequent pickups.`
  },
  {
    id: "cancellations",
    title: "9. Cancellations, Modifications & No-Shows",
    content: `Cancellation fees follow the Quotation schedule. Refunds are processed only after receipt from our ground team. Convenience fees, TCS, and non-refundable components may be deducted. Compassionate waivers for medical or family emergencies remain subject to documentation and verification.\n\nModification Policy: Changing dates, participant count, or itinerary after booking is subject to availability and may incur a modification fee (10% of package cost or INR 20,000, whichever is lower), plus any price difference.\n\nAny refund request must be submitted with valid evidence within 5 days of trip completion. Beyond this timeframe, no requests will be entertained.`
  },
  {
    id: "liability",
    title: "10. Limitation of Liability",
    content: `StayVault's total aggregate liability arising from any claim related to a Booking shall be limited to the total amount paid by You for that Booking. StayVault shall not be liable for indirect or consequential losses, including missed connections, additional accommodation, loss of enjoyment, or incidental expenses.\n\nUsers must: arrive on time, check local laws and regulations, provide accurate participant details, and thoroughly review descriptions, inclusions, exclusions, and terms of all services before booking.`
  },
  {
    id: "conduct",
    title: "11. User Conduct & Content",
    content: `You agree not to post unlawful, harassing, defamatory, or infringing content on StayVault's Platform. StayVault may remove or moderate any content violating these T&C. By submitting reviews or photos, You grant StayVault an irrevocable, royalty-free license to use, display, or repurpose it for marketing and operational purposes.\n\nBy using StayVault's services, the User agrees to receive marketing communications via email, SMS, or other channels. The User may opt-out at any time. StayVault may share User data with third-party vendors strictly for operational purposes.`
  },
  {
    id: "ip",
    title: "12. Intellectual Property",
    content: `All logos, trademarks, text, design elements, and software on the Platform are the property of StayVault or licensed to it. You may not reproduce or distribute them without express permission.`
  },
  {
    id: "governing",
    title: "13. Governing Law & Dispute Resolution",
    content: `These T&C and any disputes are governed by Indian law. Courts in India have exclusive jurisdiction. If an arbitration clause is stated in your final Quotation, such clause governs dispute resolution. Otherwise, suits must be brought in the appropriate courts of India.`
  },
  {
    id: "misc",
    title: "14. Severability, Waiver & Entire Agreement",
    content: `If any part of these T&C is found invalid or unenforceable, the remaining sections remain in full effect. No waiver of a term shall be considered a continuing waiver unless explicitly stated in writing.\n\nThese T&C, plus the final Quotation (for packages) or the specific booking confirmation (for activities), constitute the entire agreement. StayVault may update these T&C from time to time. By continuing to use the Platform, You agree to the updated T&C.`
  },
]

const TandC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("definitions")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveSection(id)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar scrolled={scrolled} />

      {/* Hero Banner */}
      <div className="relative pt-32 pb-16 px-[8%] border-b border-white/10 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#F0E130 1px, transparent 1px), linear-gradient(90deg, #F0E130 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F0E130]/30 to-transparent" />

        <div className="max-w-6xl mx-auto relative">
          <p className="text-[#F0E130] text-xs font-black uppercase tracking-[5px] mb-4">Legal</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-4">
            Terms &<br />
            <span className="text-[#F0E130]">Conditions</span>
          </h1>
          <p className="text-white/40 text-sm mt-6 max-w-xl leading-relaxed">
            Last updated: <span className="text-white/60">April 16, 2025</span>
            &nbsp;·&nbsp; Please read these terms carefully before using our platform or making any booking.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-[8%] py-16 flex gap-16">

        {/* Sticky Sidebar TOC */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-28">
            <p className="text-white/30 text-[10px] uppercase tracking-[4px] font-black mb-4">Contents</p>
            <nav className="flex flex-col gap-1">
              {sections.map(({ id, title }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-left text-xs py-2 px-3 rounded-md transition-all duration-200 font-medium ${
                    activeSection === id
                      ? 'text-[#F0E130] bg-[#F0E130]/10 border-l-2 border-[#F0E130]'
                      : 'text-white/30 hover:text-white/60 hover:bg-white/5 border-l-2 border-transparent'
                  }`}
                >
                  {title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Sections */}
        <div className="flex-1 flex flex-col gap-12">

          {/* Preamble */}
          <div className="p-6 rounded-xl border border-[#F0E130]/20 bg-[#F0E130]/5">
            <p className="text-white/70 text-sm leading-relaxed">
              These Terms and Conditions set forth the legally binding framework between you (<span className="text-[#F0E130] font-semibold">"User"</span>) and{' '}
              <span className="text-white font-semibold">StayVault</span> for accessing or using StayVault's website(s), mobile applications, or other sales channels, and for booking any experiences, activities, or accommodations through StayVault.
              <br /><br />
              By using the Platform, creating an account, or making any Booking, You acknowledge that you have read, understood, and agreed to these T&C. If You do not agree, please discontinue use of the Platform immediately.
            </p>
          </div>

          {sections.map(({ id, title, content }) => (
            <section
              key={id}
              id={id}
              className="scroll-mt-28"
              onMouseEnter={() => setActiveSection(id)}
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-8 bg-[#F0E130] rounded-full" />
                <h2 className="text-lg font-black uppercase tracking-[2px] text-white">{title}</h2>
              </div>

              {/* Definitions — special card layout */}
              {Array.isArray(content) ? (
                <div className="flex flex-col gap-3">
                  {content.map(({ term, detail }) => (
                    <div key={term} className="flex gap-4 p-4 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-[#F0E130]/20 transition-colors duration-200">
                      <div className="w-2 h-2 rounded-full bg-[#F0E130] mt-1.5 shrink-0" />
                      <div>
                        <p className="text-white font-bold text-sm mb-1">{term}</p>
                        <p className="text-white/50 text-sm leading-relaxed">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {content.split('\n\n').map((para, i) => (
                    <p key={i} className="text-white/50 text-sm leading-[1.9]">
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* Acknowledgment */}
          <div className="mt-4 p-6 rounded-xl border border-white/10 bg-white/[0.02]">
            <h3 className="text-white font-black uppercase tracking-[3px] text-xs mb-4">Acknowledgment</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              By (1) creating an account on StayVault, (2) making any Booking, or (3) using the Platform, you acknowledge you have read, understood, and agree to these Terms and Conditions in full, including all disclaimers, liabilities, cancellations, modifications, visa/flight/hotel policies.
            </p>
            <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
              <p className="text-white/20 text-xs">© {new Date().getFullYear()} StayVault. All Rights Reserved.</p>
              <p className="text-[#F0E130]/60 text-xs font-black uppercase tracking-widest">StayVault</p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TandC