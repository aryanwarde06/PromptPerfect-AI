import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PromptInput from "./components/PromptInput/PromptInput";
import PromptOutput from "./components/PromptOutput/PromptOutput";
import PromptHistory from "./components/PromptHistory/PromptHistory";
import Features from "./components/Features/Features";
import Templates from "./components/Templates/Templates";
import Footer from "./components/Footer/Footer";

import { optimizePrompt } from "./services/promptService";

function App() {
  const [prompt, setPrompt] = useState("");
  const [category, setCategory] = useState("Coding");
  const [optimizedPrompt, setOptimizedPrompt] = useState("");

  // Load history immediately from localStorage
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("promptHistory");
    return saved ? JSON.parse(saved) : [];
  });

  // Save history whenever it changes
  useEffect(() => {
    localStorage.setItem("promptHistory", JSON.stringify(history));
  }, [history]);

  const handleOptimize = async () => {
    if (!prompt.trim()) return;

    try {
      const result = await optimizePrompt(prompt, category);

      const optimized =
        result.optimizedPrompt || result.prompt || "";

      setOptimizedPrompt(optimized);

      const newItem = {
        prompt,
        category,
        optimizedPrompt: optimized,
        createdAt: new Date().toLocaleString(),
      };

      setHistory((prev) => {
        const filtered = prev.filter(
          (item) =>
            !(
              item.prompt === newItem.prompt &&
              item.category === newItem.category
            )
        );

        return [newItem, ...filtered];
      });

    } catch (error) {
      console.error("Optimization Error:", error);
    }
  };

  const handleHistorySelect = (item) => {
    setPrompt(item.prompt);
    setCategory(item.category);
    setOptimizedPrompt(item.optimizedPrompt);
  };

  return (
    <>
      <Navbar />

      <Hero />

      <PromptInput
        prompt={prompt}
        setPrompt={setPrompt}
        category={category}
        setCategory={setCategory}
        onOptimize={handleOptimize}
      />

      <PromptOutput
        optimizedPrompt={optimizedPrompt}
        onRegenerate={handleOptimize}
      />

      <PromptHistory
        history={history}
        onSelect={handleHistorySelect}
      />

      <Features />

      <Templates />

      <Footer />
    </>
  );
}

export default App;