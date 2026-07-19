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

// 🔔 React Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [category, setCategory] = useState("Coding");
  const [optimizedPrompt, setOptimizedPrompt] = useState("");

  // ⏳ Loading State
  const [loading, setLoading] = useState(false);

  // 🔍 Search History
  const [searchTerm, setSearchTerm] = useState("");

  // Load history from localStorage
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("promptHistory");
    return saved ? JSON.parse(saved) : [];
  });

  // Save history whenever it changes
  useEffect(() => {
    localStorage.setItem("promptHistory", JSON.stringify(history));
  }, [history]);

  // Optimize Prompt
  const handleOptimize = async () => {
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const result = await optimizePrompt(prompt, category);

      const optimized =
        result.optimizedPrompt || result.prompt || "";

      setOptimizedPrompt(optimized);

      toast.success("✨ Prompt optimized successfully!");

      const newItem = {
        prompt,
        category,
        optimizedPrompt: optimized,
        createdAt: new Date().toLocaleString(),
        favorite: false,
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
      toast.error("❌ Failed to optimize prompt.");
    } finally {
      setLoading(false);
    }
  };

  // Load selected prompt from history
  const handleHistorySelect = (item) => {
    setPrompt(item.prompt);
    setCategory(item.category);
    setOptimizedPrompt(item.optimizedPrompt);
  };

  // ⭐ Toggle Favorite
  const toggleFavorite = (index) => {
    setHistory((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              favorite: !item.favorite,
            }
          : item
      )
    );
  };

  // 🗑️ Delete Prompt
  const deletePrompt = (index) => {
    setHistory((prev) => prev.filter((_, i) => i !== index));
  };

  // 🧹 Clear All History
  const clearHistory = () => {
    if (window.confirm("Are you sure you want to delete all prompts?")) {
      setHistory([]);
      setPrompt("");
      setOptimizedPrompt("");
      setSearchTerm("");
    }
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
        loading={loading}
      />

      <PromptOutput
        prompt={prompt}
        category={category}
        optimizedPrompt={optimizedPrompt}
        onRegenerate={handleOptimize}
      />

      <PromptHistory
        history={history}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSelect={handleHistorySelect}
        onToggleFavorite={toggleFavorite}
        onDelete={deletePrompt}
        onClearHistory={clearHistory}
      />

      <Features />

      <Templates />

      {/* 🔔 Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />

      <Footer />
    </>
  );
}

export default App;