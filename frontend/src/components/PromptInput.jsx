import { useState } from "react";
import { FaMagic } from "react-icons/fa";

function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const [category, setCategory] = useState("Coding");

  const MAX_LENGTH = 1000;

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16">

      {/* Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl p-8">

        {/* Heading */}
        <div className="mb-8">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            ✨ Enter Your Prompt
          </h2>

          <p className="text-gray-400 mt-3 leading-7 max-w-3xl">
            Describe what you want AI to generate. PromptPerfect AI will
            transform your simple idea into a detailed and professional prompt.
          </p>

        </div>

        {/* Category */}
        <div className="mb-6">

          <label className="block text-gray-300 font-medium mb-2">
            Prompt Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option>Coding</option>
            <option>Resume</option>
            <option>Email</option>
            <option>Business</option>
            <option>Marketing</option>
            <option>Education</option>
            <option>Research</option>
            <option>Image Prompt</option>
          </select>

        </div>

        {/* Prompt */}
        <div>

          <label className="block text-gray-300 font-medium mb-2">
            Prompt
          </label>

          <textarea
            rows={8}
            maxLength={MAX_LENGTH}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: Write a professional resume for a software engineer with 3 years of experience..."
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-4 mb-8 text-sm">

          <span className="text-blue-400 font-medium">
            {category}
          </span>

          <span
            className={
              prompt.length > 900
                ? "text-red-400"
                : "text-gray-400"
            }
          >
            {prompt.length} / {MAX_LENGTH}
          </span>

        </div>

        {/* Button */}
        <div className="flex justify-center">

          <button
            disabled={!prompt.trim()}
            className={`inline-flex items-center gap-3 px-8 py-3 rounded-xl font-semibold text-white shadow-lg transition-all duration-300
              ${
                prompt.trim()
                  ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 hover:scale-105"
                  : "bg-slate-700 cursor-not-allowed"
              }`}
          >
            <FaMagic />
            Optimize Prompt
          </button>

        </div>

      </div>

    </section>
  );
}

export default PromptInput;