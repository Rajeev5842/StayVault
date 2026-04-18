import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EnquiryForm from "./components/Forms/EnquiryForm/EnquiryForm";
import Features from "./components/Properties";
import Journey from "./components/Journery";
import WhyUs from "./components/WhyUs";
import ComingSoon from "./components/Comingsoon";
import Footer from "./components/Footer";

export default function App() {
  const [step, setStep] = useState(1);
  const [hotelQuery, setHotelQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const contact = e.target.contact.value;
    const email = e.target.email.value;
    const message = `Hotel: ${hotelQuery}%0AName: ${name}%0AContact: ${contact}%0AEmail: ${email}`;
    window.open(`https://wa.me/916396105393?text=${message}`, "_blank");
  };

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