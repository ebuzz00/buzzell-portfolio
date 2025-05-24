import React from 'react';
import RevealOnScroll from '../UI/RevealOnScroll';

export default function Future() {
  return (
    <section id="future" className="min-h-screen font-mono flex flex-col items-center justify-center py-20">
        <RevealOnScroll>
      <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
        <h2 className="text-4xl font-semibold text-transparent bg-gradient-to-r from-teal-100 via-teal-500 to-teal-600 bg-clip-text">
          Future Endeavors
        </h2>
        <div className="text-gray-100 text-lg space-y-4">
          <p>
            Balancing 17+ credits, leadership roles, a job, and schoolwork doesn’t leave much space for side projects,
            but I'm still making space to grow.
          </p>
          <p>
            Most of my work comes from academic or employer projects (which I can’t share), so this portfolio itself is a big first step
            into the personal project world!
          </p>
        </div>

        <div className="text-left space-y-6 bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-md text-black">
          <h3 className="text-2xl font-semibold text-teal-500">📍 Short-Term Goals (Before Graduation)</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>🎓 Graduate with a B.S. in 4 years</li>
            <li>💼 Build out a portfolio with meaningful projects</li>
            <li>🎨 Earn a certificate in UI/UX design</li>
            <li>💖 Volunteer with the programs that helped me grow as a woman in STEM</li>
          </ul>

          <h3 className="text-2xl font-semibold text-teal-500 pt-6">🌟 Long-Term Vision</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>🤝 Give back to that same community in a bigger way</li>
            <li>🏢 Build a stable, fulfilling career</li>
            <li>✈️ Travel throughout the U.S. immersing myself in diverse communities, breathtaking landscapes, and everything this country has to offer</li>
          </ul>
        </div>

        
      </div>
      </RevealOnScroll>
    </section>
  );
}
