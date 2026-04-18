import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const sections = [
  {
    id: "overview",
    title: "1. Overview",
    content: `This Privacy Policy is for stayvault.in and is served by StayVault. It governs the privacy of its users who choose to use it. The policy sets out the different areas where user privacy is concerned and outlines the obligations & requirements of the users, the website, and its owners.\n\nFurthermore, the way this website processes, stores, and protects user data and information will also be detailed within this policy.\n\nThis website and its owners take a proactive approach to user privacy and ensure the necessary steps are taken to protect the privacy of its users throughout their visiting experience. This website complies with all of India's national laws and requirements for user privacy.`
  },
  {
    id: "collection",
    title: "2. Data Collection",
    content: `Depending on the purpose of the processing, we may collect the following categories of personal data:\n\n— Your personal details (first name, last name, location) and contact details (email address) when you reach out or make a booking.\n\n— Information relating to your booking preferences, stay requirements, and travel dates.\n\n— Connection and browsing data collected using cookies and similar tracking technologies.\n\n— Location data of your device when you enable geolocation features.\n\nStayVault will not collect sensitive personal data beyond what is necessary to fulfil your service request. Fields marked as compulsory in any form are required to process your booking or query.`
  },
  {
    id: "cookies",
    title: "3. Use of Cookies",
    content: `This website uses cookies to better the user's experience while visiting. On their first visit, users are presented with a cookie control system allowing them to allow or disallow the use of cookies on their device.\n\nCookies are small files saved to the user's device that track, save, and store information about interactions and usage of the website. This allows the website to provide a tailored experience.\n\nThis website uses tracking software (Google Analytics) to monitor visitors and better understand usage. This software uses cookies to track visitor usage but will not store or collect personal information.\n\nStrictly Necessary Cookies: Required for the website to function. Cannot be switched off.\n\nPerformance Cookies: Allow us to count visits and traffic sources to measure and improve site performance. All information collected is aggregated and anonymous.\n\nTargeting Cookies: May be set through our site by advertising partners to build a profile of interests and show relevant adverts on other sites.`
  },
  {
    id: "purposes",
    title: "4. How We Use Your Information",
    content: `We use the information we collect for the following purposes:\n\n— To provide Services: To process your booking, respond to queries, and contact you with updates about your reservation.\n\n— For analytics and improvement: To understand how you interact with our website and introduce improvements to the user experience.\n\n— For marketing communications: To send you promotional offers, discounts, and updates about our services via email or SMS. You may opt out at any time.\n\n— To protect rights: To protect, enforce, or defend the legal rights, privacy, safety, or property of StayVault, our employees, or users, and to comply with applicable law.\n\nWe will only process your personal data for specified, explicit, and legitimate purposes.`
  },
  {
    id: "sharing",
    title: "5. How We Share Your Information",
    content: `StayVault may share your personal data with the following categories of recipients:\n\n— Authorised staff members who access your data on a need-to-know basis.\n\n— Third-party Suppliers including visa partners, hotels, activity providers, and transport partners, strictly for operational purposes such as processing bookings and facilitating travel services.\n\n— Payment gateway providers such as Razorpay or similar. StayVault does not store any payment details (credit/debit card information). Payments are processed through third-party gateways, and by using these services, users agree to the privacy policies of these providers.\n\n— Law enforcement agencies or regulatory bodies for lawful investigations or legal obligations, without requiring prior consent.\n\nStayVault will not sell, rent, or disclose user data for commercial gains beyond the scope of providing its services.`
  },
  {
    id: "retention",
    title: "6. Data Retention",
    content: `For personal data that we collect and process, we will retain such data for as long as it is necessary to fulfil each of the purposes described in this policy.\n\nOnce your data is no longer required for the original purpose and there are no legal requirements stipulating retention, it will be securely deleted or anonymized.\n\nYou may request deletion of your data at any time by contacting us at hello@stayvault.in, subject to any legal obligations we may have to retain certain records.`
  },
  {
    id: "rights",
    title: "7. Your Rights",
    content: `Under applicable data protection laws, you may have the following rights concerning your personal data:\n\n— Access: Request a copy of the personal data we hold about you.\n\n— Rectification: Request correction of any incomplete or inaccurate data we hold.\n\n— Deletion: Request that we delete your personal data, unless we are required to retain it by law.\n\n— Restriction: Request that we restrict processing of your data in certain circumstances.\n\n— Objection: Object to processing of your data where our legal basis is legitimate interest.\n\n— Portability: Request transfer of your data to another controller where applicable.\n\n— Withdrawing Consent: Withdraw any previously given consent at any time, free of charge.\n\nTo exercise any of these rights, please contact us at hello@stayvault.in.`
  },
  {
    id: "external",
    title: "8. External Links",
    content: `Although this website only looks to include quality, safe, and relevant external links, users are advised to adopt a policy of caution before clicking any external web links mentioned throughout this website.\n\nThe owners of this website cannot guarantee or verify the contents of any externally linked website despite their best efforts. Users should therefore note they click on external links at their own risk and this website and its owners cannot be held liable for any damages or implications caused by visiting any external links mentioned.`
  },
  {
    id: "social",
    title: "9. Social Media Platforms",
    content: `Communication, engagement, and actions taken through external social media platforms that this website and its owners participate in are custom to the terms and conditions as well as the privacy policies held with each social media platform respectively.\n\nStayVault will never ask for personal or sensitive information through social media platforms and encourages users wishing to discuss sensitive details to contact us through primary communication channels such as by telephone or email at hello@stayvault.in.\n\nThis website may use social sharing buttons. Users are advised that social media platforms may track and save sharing requests through their platform accounts.`
  },
  {
    id: "security",
    title: "10. Security",
    content: `StayVault ensures that appropriate technical and organisational security measures are taken against unlawful or unauthorised access or use of your personal data, as well as against accidental loss or damage to the integrity of your personal data.\n\nHowever, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.\n\nIn the event of a data breach that is likely to result in a risk to your rights and freedoms, we will notify you in accordance with applicable law.`
  },
  {
    id: "children",
    title: "11. Children's Privacy",
    content: `StayVault's platform and services are not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.\n\nIf you are a parent or guardian and believe that your child has provided us with personal information, please contact us at hello@stayvault.in and we will take steps to delete such information from our systems promptly.`
  },
  {
    id: "consent",
    title: "12. User Consent for Communication",
    content: `By using StayVault's services, users provide consent for communication through email, SMS, WhatsApp, or other channels. Users agree that such communication is authorized by them and classified as transactional in nature.\n\nYou may opt out of marketing communications at any time by following the unsubscribe instructions provided in each communication or by contacting us directly at hello@stayvault.in. Opting out of marketing communications will not affect transactional messages related to your active bookings.`
  },
  {
    id: "updates",
    title: "13. Policy Updates",
    content: `StayVault reserves the right to modify this Privacy Policy at any time. Users will be notified of significant changes via email or an announcement on our website.\n\nWe will indicate the date on which this policy was last updated at the top of this page. Continued use of our services after any changes constitutes your acceptance of the updated policy.\n\nWe encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.`
  },
  {
    id: "contact",
    title: "14. Contact Us",
    content: `If you have any questions, concerns, or requests relating to this Privacy Policy or the processing of your personal data, please contact us:\n\nEmail: hello@stayvault.in\nPhone: +91 63961 05393\nAddress: India\n\nWe aim to respond to all privacy-related queries within 30 days of receipt.`
  },
]

const PrivacyPolicy = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("overview")

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
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(#F0E130 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F0E130]/30 to-transparent" />
        <div className="absolute top-10 right-[10%] w-72 h-72 rounded-full bg-[#F0E130]/5 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <p className="text-[#F0E130] text-xs font-black uppercase tracking-[5px] mb-4">Legal</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-4">
            Privacy &<br />
            <span className="text-[#F0E130]">Policy</span>
          </h1>
          <p className="text-white/40 text-sm mt-6 max-w-xl leading-relaxed">
            Last updated: <span className="text-white/60">January 20, 2025</span>
            &nbsp;·&nbsp; This policy outlines how StayVault collects, uses, and protects your personal data.
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
              This privacy policy governs the privacy of users who choose to use{' '}
              <span className="text-white font-semibold">StayVault</span> — your trusted travel sourcing partner. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns, please contact us at{' '}
              <a href="mailto:hello@stayvault.in" className="text-[#F0E130] font-semibold hover:underline">hello@stayvault.in</a>.
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
                <div className="w-1 h-8 bg-[#F0E130] rounded-full shrink-0" />
                <h2 className="text-lg font-black uppercase tracking-[2px] text-white">{title}</h2>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 pl-5">
                {content.split('\n\n').map((para, i) => {
                  if (para.startsWith('—')) {
                    return (
                      <div key={i} className="flex gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-[#F0E130]/20 transition-colors duration-200">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F0E130] mt-1.5 shrink-0" />
                        <p className="text-white/50 text-sm leading-relaxed">{para.slice(2)}</p>
                      </div>
                    )
                  }
                  return (
                    <p key={i} className="text-white/50 text-sm leading-[1.9]">
                      {para}
                    </p>
                  )
                })}
              </div>
            </section>
          ))}

          {/* Closing Note */}
          <div className="mt-4 p-6 rounded-xl border border-white/10 bg-white/[0.02]">
            <h3 className="text-white font-black uppercase tracking-[3px] text-xs mb-4">Your Trust Matters</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              At StayVault, your privacy is not an afterthought — it is a foundation. We handle your data with the same care we apply to sourcing your perfect stay. If you ever have concerns, reach out at{' '}
              <a href="mailto:hello@stayvault.in" className="text-[#F0E130] hover:underline transition-all">hello@stayvault.in</a> and we will respond promptly.
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

export default PrivacyPolicy