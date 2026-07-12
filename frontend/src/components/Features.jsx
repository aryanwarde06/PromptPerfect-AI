import {
  FaRobot,
  FaBolt,
  FaFileAlt,
  FaGlobe,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaRobot />,
      title: "AI Powered",
      description:
        "Generate high-quality AI prompts with advanced optimization.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaBolt />,
      title: "Lightning Fast",
      description:
        "Get optimized prompts within seconds.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <FaFileAlt />,
      title: "Smart Templates",
      description:
        "Templates for Coding, Resume, Email and Marketing.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaGlobe />,
      title: "Multi AI Support",
      description:
        "Works with ChatGPT, Gemini, Claude and Copilot.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-12">

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            PromptPerfect AI?
          </span>
        </h2>

        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Everything you need to create better AI prompts.
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {features.map((feature, index) => (

          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
          >

            {/* Icon */}

            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-xl mb-4`}
            >
              {feature.icon}
            </div>

            {/* Title */}

            <h3 className="text-lg font-semibold text-white">
              {feature.title}
            </h3>

            {/* Description */}

            <p className="text-gray-400 text-sm leading-6 mt-2">
              {feature.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;