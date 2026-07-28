import AIModelSelector from "../AIModelSelector/AIModelSelector";
import { useState } from "react";
import styles from "./PromptInput.module.css";
import FileUpload from "../FileUpload/FileUpload";

function PromptInput({
  prompt,
  setPrompt,
  category,
  setCategory,
  onOptimize,
  loading,
  selectedFile,
  setSelectedFile,
}) {
  const [error, setError] = useState("");
  const [inputMode, setInputMode] = useState("text");

  const handleOptimize = async () => {
    if (inputMode === "text" && !prompt.trim()) {
      setError("Please enter a prompt.");
      return;
    }

    if (inputMode === "file" && !selectedFile) {
      setError("Please upload a file.");
      return;
    }

    setError("");
    await onOptimize();
  };

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.badge}>Prompt Optimizer</span>

          <h2>Prompt Optimizer</h2>

          <p>Transform your ideas into professional AI prompts.</p>
        </div>

        {/* Toggle Buttons */}
        <div className={styles.toggleContainer}>
          <button
            type="button"
            className={inputMode === "text" ? styles.activeTab : styles.tab}
            onClick={() => setInputMode("text")}
          >
            ✍️ Write Prompt
          </button>

          <button
            type="button"
            className={inputMode === "file" ? styles.activeTab : styles.tab}
            onClick={() => setInputMode("file")}
          >
            📂 Upload File
          </button>
        </div>

        {/* Category */}
        <div className={styles.field}>
          <label>Prompt Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            disabled={loading}
          >
            <option>Coding</option>
            <option>Resume</option>
            <option>Email</option>
            <option>Business</option>
            <option>Marketing</option>
            <option>Education</option>
          </select>
               </div>

        {/* AI Model Selector */}
        <AIModelSelector />

        {/* Text Mode */}
        {inputMode === "text" ? (
          <>
            <div className={styles.field}>
              <label>Prompt</label>

              <textarea
                rows="8"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Write your prompt here..."
                disabled={loading}
              />
            </div>

            <div className={styles.info}>
              <span>{category}</span>
              <span>{prompt.length}/1000</span>
            </div>
          </>
        ) : (
          <FileUpload
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        )}

        {/* Optimize Button */}
        <button
          type="button"
          onClick={handleOptimize}
          disabled={loading}
          className={loading ? styles.loadingButton : ""}
        >
          {loading ? (
            <>
              <span className={styles.spinner}></span>
              Optimizing...
            </>
          ) : (
            "✨ Optimize Prompt"
          )}
        </button>

        {error && (
          <p
            style={{
              color: "#ef4444",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </section>
  );
}

export default PromptInput;