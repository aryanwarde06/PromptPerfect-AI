import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PromptInput from "./components/PromptInput";
import PromptOutput from "./components/PromptOutput";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col items-center">

        {/* Hero */}
        <Hero />

        {/* Prompt Input */}
        <PromptInput />

        {/* Prompt Output */}
        <PromptOutput />

        {/* Features */}
        <Features />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;