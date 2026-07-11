import React from "react";
import { FaRobot, FaMoon, FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl shadow-md">
            <FaRobot className="text-white text-2xl" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              PromptPerfect AI
            </h1>

            <p className="text-xs text-gray-400">
              AI Prompt Optimizer
            </p>
          </div>

        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">

          <ul className="flex items-center gap-8 text-gray-300 font-medium">

            <li>
              <a
                href="#"
                className="text-blue-500 font-semibold hover:text-blue-400 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#features"
                className="hover:text-blue-400 transition"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#templates"
                className="hover:text-blue-400 transition"
              >
                Templates
              </a>
            </li>

            <li>
              <a
                href="#history"
                className="hover:text-blue-400 transition"
              >
                History
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-blue-400 transition"
              >
                About
              </a>
            </li>

          </ul>

        </nav>

        {/* Right Section */}

        <div className="flex items-center gap-3">

          {/* Get Started Button */}

          <button className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition duration-300 px-5 py-2 rounded-xl text-white font-semibold shadow-md">
            Get Started
          </button>

          {/* Dark Mode */}

          <button className="bg-slate-800 hover:bg-slate-700 transition p-3 rounded-full">
            <FaMoon className="text-white text-lg" />
          </button>

          {/* Mobile Menu */}

          <button className="lg:hidden bg-slate-800 hover:bg-slate-700 transition p-3 rounded-full">
            <FaBars className="text-white text-lg" />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;