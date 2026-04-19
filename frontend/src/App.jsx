import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EnquiryForm from "./components/Forms/EnquiryForm/EnquiryForm";
import Features from "./components/Properties";
import Journey from "./components/Journery";
import WhyUs from "./components/WhyUs";
import ComingSoon from "./components/Comingsoon";
import Footer from "./components/Footer";
import toast from "react-hot-toast";

export default function App() {
  const [step, setStep] = useState(1);
  const [hotelQuery, setHotelQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault()

  const form = e.target

  const payload = {
    name: form.name.value,
    email: form.email.value,
    phone: form.contact.value,
    subject: `Hotel Sourcing — ${hotelQuery}`,   // hotel name from step 1
    message: `Looking for hotel: ${hotelQuery}`,
  }

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await res.json()

    if (!res.ok) {
      toast.error(data.message || 'Something went wrong.')
      return
    }

    toast.success("Details submitted! We'll get back to you soon.")
    setStep(1)
    setHotelQuery('')

  } catch {
    toast.error('Unable to reach server. Check your connection.')
  }
}

  return (
    <div className="font-montserrat bg-black text-white overflow-x-hidden">

      <Navbar scrolled={scrolled} />
      <Hero />

      <EnquiryForm
        //
        step={step}
        hotelQuery={hotelQuery}
        setHotelQuery={setHotelQuery}
        setStep={setStep}
        handleSubmit={handleSubmit}
      />

      <Features/>

      <Journey/>

      <WhyUs/>

      <ComingSoon/>
      <Footer/>



    </div>
  );
}