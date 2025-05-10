import RevealOnScroll from "../UI/RevealOnScroll"

export const Contact = () => {
  return <section id="contact" className="min-h-screen font-mono flex items-center justify-center py-20">
    <RevealOnScroll>
    <div className="px-4 w-150">
      <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-100 via-teal-500 to-teal-600 bg-clip-text text-transparent text-center">Get in touch!</h2>

      <form action="https://formsubmit.co/erbuzzell@gmail.com" method="POST" className="space-y-6">
        <div className="relative">
          <input type="text" id="name" name="name" placeholder="Name" required className="w-full bg-white/10 border border-r-white/10 rounded px-4 py-3 
          text-white transition focus:outline-none focus:border-teal-400 focus:bg-teal-500/5"/>
        </div>
        <div className="relative">
          <input type="email" id="email" name="email" placeholder="example@gmail.com" required className="w-full bg-white/10 border border-r-white/10 
          rounded px-4 py-3 text-white transition focus:outline-none
          focus:border-teal-400 focus:bg-teal-500/5"/>
        </div>
        <div className="relative">
          <textarea type="message" id="message" name="message" rows={6} placeholder="Type your message here..." required className="w-full bg-white/10 
          border border-r-white/10 rounded px-4 py-3 text-white transition focus:outline-none
          focus:border-teal-400 focus:bg-teal-500/5"/>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="flex items-center bg-gradient-to-r from-teal-200 to-teal-600 px-6 py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
    </RevealOnScroll>
  </section>
}