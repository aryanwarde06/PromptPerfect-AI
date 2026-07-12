import { useState } from "react";
import {
  FaCopy,
  FaDownload,
  FaRedo,
  FaRobot,
} from "react-icons/fa";

function PromptOutput() {
  // Later this data will come from your backend
  const [optimizedPrompt] = useState("");

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16">

      {/* Output Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl p-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <FaRobot className="text-white text-2xl" />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Optimized Prompt
              </h2>

              <p className="text-gray-400 mt-2">
                Your AI-generated professional prompt will appear below.
              </p>

            </div>

          </div>

          <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
            ● AI Ready
          </span>

        </div>

        {/* Output Box */}

        <div className="mt-8 bg-slate-800 border border-slate-700 rounded-2xl min-h-[260px] p-8 flex items-center justify-center">

          {optimizedPrompt ? (

            <div className="w-full">

              <p className="text-white whitespace-pre-wrap leading-8">
                {optimizedPrompt}
              </p>

            </div>

          ) : (

            <div className="text-center">

              <FaRobot className="text-6xl text-slate-600 mx-auto mb-6" />

              <h3 className="text-2xl font-bold text-white">
                No Optimized Prompt Yet
              </h3>

              <p className="text-gray-400 mt-4 leading-7 max-w-xl">
                Click the
                <span className="text-blue-400 font-semibold">
                  {" "}Optimize Prompt{" "}
                </span>
                button to generate a professional AI prompt.
              </p>

            </div>

          )}

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap justify-center gap-5 mt-8">

          <button
            disabled={!optimizedPrompt}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300
            ${
              optimizedPrompt
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-slate-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FaCopy />
            Copy
          </button>

          <button
            disabled={!optimizedPrompt}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300
            ${
              optimizedPrompt
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-slate-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FaDownload />
            Download
          </button>

          <button
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 hover:scale-105 transition-all duration-300"
          >
            <FaRedo />
            Regenerate
          </button>

        </div>

      </div>

    </section>
  );
}

export default PromptOutput;