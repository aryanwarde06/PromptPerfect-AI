import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PromptInput from "./components/PromptInput/PromptInput";
import PromptOutput from "./components/PromptOutput/PromptOutput";
import Features from "./components/Features/Features";
import Templates from "./components/Templates/Templates";
import Footer from "./components/Footer/Footer";

function App() {
  const [optimizedPrompt, setOptimizedPrompt] = useState("");

  return (
    <>
      <Navbar />

      <Hero />

      <PromptInput
        setOptimizedPrompt={setOptimizedPrompt}
      />

      <PromptOutput
        optimizedPrompt={optimizedPrompt}
      />

      <Features />

      <Templates />

      <Footer />
    </>
  );
}

export default App;