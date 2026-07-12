import React from "react";
import { FaArrowRight, FaMagic } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-slate-950 text-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/30 border border-blue-700 text-blue-300 text-sm mb-6">
          <FaMagic className="text-xs" />
          AI Powered Prompt Engineering
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">

          Transform Simple

          <br />

          Prompts Into

          <br />

          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Powerful AI Prompts
          </span>

        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-8">
          Turn your simple ideas into professional AI prompts for
          ChatGPT, Gemini, Claude, Copilot and more.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg">
            ✨ Optimize Now
          </button>

          <button className="border border-slate-700 px-8 py-3 rounded-xl hover:bg-slate-800 transition duration-300 flex items-center gap-2">
            Learn More
            <FaArrowRight />
          </button>

        </div>

        {/* AI Platforms */}
        <div className="mt-10 flex justify-center gap-3 flex-wrap">

          {["ChatGPT", "Gemini", "Claude", "Copilot"].map((platform) => (
            <span
              key={platform}
              className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-full text-sm text-gray-300 hover:border-blue-500 transition"
            >
              {platform}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Hero;