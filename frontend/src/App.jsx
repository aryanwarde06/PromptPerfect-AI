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
  // ✅ New State (for uploaded file)
  const [selectedFile, setSelectedFile] = useState(null);

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
const handleOptimize = async () => {
  console.log("STEP 1: handleOptimize started");
  if (!prompt.trim() && !selectedFile) {
    toast.error("Please enter a prompt or upload a file.");
    return;
  }

  setLoading(true);

  try {
    // ===========================
    // FILE UPLOAD FLOW
    // ===========================
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const uploadResponse = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadResponse.json();

      if (!uploadData.success) {
        throw new Error(uploadData.message);
      }

      const extractedText = uploadData.extractedText;

      const result = await optimizePrompt(extractedText, category);

      const optimized =
        result.optimizedPrompt || result.prompt || "";
setOptimizedPrompt(optimized);


console.log("Optimized Prompt:", optimized);

toast.success("✨ Prompt optimized successfully!");
      const newItem = {
        prompt: selectedFile.name,
        category,
        optimizedPrompt: optimized,
        createdAt: new Date().toLocaleString(),
        favorite: false,
      };

      setHistory((prev) => [newItem, ...prev]);

setSelectedFile(null);
setPrompt("");

return;
    }

    // ===========================
    // NORMAL TEXT FLOW
    // ===========================
    console.log("STEP 2: Calling Backend");

const result = await optimizePrompt(prompt, category);

console.log("STEP 3: Backend Response", result);

    const optimized =
      result.optimizedPrompt || result.prompt || "";

  setOptimizedPrompt(optimized);


console.log("Optimized Prompt:", optimized);

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
    console.error(error);
    toast.error(error.message || "Failed to optimize.");
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

  // 🧹 Clear History
  const clearHistory = () => {
  if (window.confirm("Are you sure you want to delete all prompts?")) {
    setHistory([]);
    setPrompt("");
    setOptimizedPrompt("");
    setSearchTerm("");
    setSelectedFile(null);

    localStorage.removeItem("optimizedPrompt");
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
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
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