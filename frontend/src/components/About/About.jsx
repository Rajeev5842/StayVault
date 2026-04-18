import Navbar from "../Navbar";
import Footer from "../Footer";

export default function About() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            The Stay Vault Story
          </h1>
          <p className="text-gray-300 text-lg">
            Fifteen Years in the Making.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 md:px-16 py-16 max-w-4xl mx-auto">
        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          The hospitality landscape has shifted, but the desire for excellence
          remains constant.
        </p>

        <p className="text-gray-400 leading-relaxed">
          After 15 years on the front lines of the industry, the founders of
          Stay Vault recognized a growing disconnect in the market. While
          travelers searched for the best deals on public portals, they were
          often unknowingly paying a premium for the convenience of a middleman.
        </p>

        <p className="text-gray-400 leading-relaxed mt-4">
          We saw guests who deserved better not just better service, but better
          value.
        </p>
      </section>

      {/* PHILOSOPHY (FIXED IMAGE ISSUE) */}
      <section className="grid md:grid-cols-2">
        {/* IMAGE SIDE */}
        <div className="relative min-h-[300px] md:min-h-[500px]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        {/* TEXT SIDE */}
        <div className="p-10 flex flex-col justify-center bg-neutral-900">
          <h2 className="text-3xl font-semibold mb-4">
            The "Best 2 Best" Philosophy
          </h2>

          <p className="text-white font-semibold text-xl mb-4 leading-relaxed">
            Stay Vault was born from a simple, insider truth: The most exclusive
            rates aren't found on a public search engine; they are held in a
            vault of professional relationships.
          </p>

          <p className="text-gray-400 mb-4 leading-relaxed">
            We have spent over a decade cultivating direct, high-level
            collaborations with premier properties across PAN India.
          </p>

          <p className="text-gray-400 leading-relaxed">
            By moving away from the retail mindset and into a dedicated B2B
            (Best 2 Best) framework, we unlock pricing that is typically hidden
            from the general public.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 md:px-16 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Our Mission: Secure the Extraordinary
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-neutral-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Industry Authority
            </h3>
            <p className="text-gray-400">
              Built on 15 years of hospitality expertise.
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Direct Access
            </h3>
            <p className="text-gray-400">
              Eliminating hidden costs through strong partnerships.
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Smart Luxury
            </h3>
            <p className="text-gray-400">
              Premium stays without unnecessary markups.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section
        className="relative py-24 text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            A Legacy of Trust
          </h2>

          <p className="text-gray-300 mb-6">
            At Stay Vault, we believe the smartest way to book is one that
            respects both your experience and your investment.
          </p>

          <p className="text-lg font-medium">
            Welcome to Stay Vault. The Smart Way to Book Hotels.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}