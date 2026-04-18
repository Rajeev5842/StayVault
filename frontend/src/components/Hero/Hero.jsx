import React from 'react'

const Hero = () => {
  return (
   <section id="hero" className="h-screen relative flex items-center px-[10%]">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover" src="/images/bannervideo.mp4"></video>


        <div className="relative z-10">
          <div className="font-black text-2xl tracking-[5px] mb-8">
            STAY<span className="text-[#F0E130]">VAULT</span>
          </div>
          <h1 className="text-7xl font-black leading-[0.9] mb-8">
            The Smart Way
            <br />
            <span className="text-[#F0E130]">To Book Hotels</span>
          </h1>
          {/* <a
            href="#destination-section"
            className="inline-block px-10 py-4 bg-[#F0E130] text-black font-black rounded-md hover:bg-yellow-300 transition-colors duration-300 no-underline"
          >
            Contact Us
          </a> */}
        </div>
      </section>
  )
}

export default Hero
