import { Sparkles, ArrowRight, Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#101625]/80 backdrop-blur-xl px-6 py-3 shadow-2xl">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">
                PromptPerfect AI
              </h1>

              <p className="text-xs text-slate-400 tracking-[0.3em] uppercase">
                AI Prompt Optimizer
              </p>
            </div>
          </div>

          {/* Navigation */}
          <ul className="hidden lg:flex items-center gap-10 text-sm font-medium">
            <li>
              <a
                href="#"
                className="text-blue-400 border-b-2 border-blue-500 pb-1"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#features"
                className="text-slate-300 hover:text-white transition"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#templates"
                className="text-slate-300 hover:text-white transition"
              >
                Templates
              </a>
            </li>

            <li>
              <a
                href="#history"
                className="text-slate-300 hover:text-white transition"
              >
                History
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-slate-300 hover:text-white transition"
              >
                About
              </a>
            </li>
          </ul>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-5">
            <button className="text-slate-300 hover:text-white transition">
              Sign In
            </button>

            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-white font-semibold hover:scale-105 transition">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu */}
          <button className="lg:hidden text-white">
            <Menu className="w-7 h-7" />
          </button>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;