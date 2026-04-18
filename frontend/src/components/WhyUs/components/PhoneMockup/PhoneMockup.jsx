import { useEffect, useState } from "react"

const PhoneMockup = () => {
  const [visible, setVisible] = useState([])

  const messages = [
  { from: "user",  text: "Hey! Need a hotel in Goa for 10 people 🏖️" },
  { from: "agent", text: "On it! Give me a moment..." },
  { from: "agent", text: "Found 3 off-market villas with private pool 🏊" },
  { from: "agent", text: "Best rate: ₹12,000 — shall I confirm?" },
  { from: "user",  text: "Yes! Book it 🙌" },
  { from: "agent", text: "Done! Confirmation sent to your email ✅" },
]

  useEffect(() => {
    let i = 0
    let timeout

    const showNext = () => {
      if (i < messages.length) {
        setVisible(prev => [...prev, i])
        i++
        timeout = setTimeout(showNext, 1200)
      } else {
        timeout = setTimeout(() => {
          setVisible([])
          i = 0
          timeout = setTimeout(showNext, 600)
        }, 2500)
      }
    }

    timeout = setTimeout(showNext, 600)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="relative w-[260px] md:w-[300px] rounded-[40px] border-[6px] border-white/20 bg-[#0a0a0a] shadow-2xl overflow-hidden flex flex-col" style={{ height: '580px' }}>

      {/* Notch */}
      <div className="flex justify-center pt-4 pb-1">
        <div className="w-20 h-[18px] bg-white/10 rounded-full" />
      </div>

      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pb-2">
        <span className="text-white/40 text-[10px] font-bold">9:41</span>
        <span className="text-white/40 text-[10px] tracking-widest">● ● ●</span>
      </div>

      {/* Chat header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-white/5">
        <div className="w-8 h-8 rounded-full bg-[#F0E130] flex items-center justify-center text-black text-xs font-black flex-shrink-0">SV</div>
        <div>
          <p className="text-white text-xs font-black">StayVault Concierge</p>
          <p className="text-green-400 text-[10px] font-medium">● Online now</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-hidden px-3 py-4 flex flex-col gap-3 justify-end">
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              opacity: visible.includes(index) ? 1 : 0,
              transform: visible.includes(index) ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[78%] px-3 py-2 text-[11px] leading-relaxed font-medium ${
                msg.from === "user"
                  ? "bg-[#F0E130] text-black rounded-t-2xl rounded-bl-2xl rounded-br-sm"
                  : "bg-white/10 text-white rounded-t-2xl rounded-br-2xl rounded-bl-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 px-3 py-3 border-t border-white/10 bg-white/5">
        <div className="flex-1 bg-white/10 rounded-full px-4 py-2 text-white/30 text-[11px]">
          Type a message...
        </div>
        <div className="w-8 h-8 rounded-full bg-[#F0E130] flex items-center justify-center text-black text-sm font-bold flex-shrink-0">
          ➤
        </div>
      </div>

    </div>
  )
}


export default PhoneMockup;