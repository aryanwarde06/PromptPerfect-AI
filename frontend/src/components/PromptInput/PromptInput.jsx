import { useState } from "react";
import styles from "./PromptInput.module.css";
import { optimizePrompt } from "../../services/promptService";

function PromptInput({ setOptimizedPrompt }) {
  const [prompt, setPrompt] = useState("");
  const [category, setCategory] = useState("Coding");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOptimize = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const result = await optimizePrompt(prompt, category);

      setOptimizedPrompt(
        result.optimizedPrompt || result.prompt || ""
      );
    } catch (err) {
      setError("Failed to optimize prompt.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.card}>

        <div className={styles.header}>
          <span className={styles.badge}>
            Prompt Optimizer
          </span>

          <h2>Prompt Optimizer</h2>

          <p>
            Transform your ideas into professional AI prompts.
          </p>
        </div>

        <div className={styles.field}>
          <label>Prompt Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Coding</option>
            <option>Resume</option>
            <option>Email</option>
            <option>Business</option>
            <option>Marketing</option>
            <option>Education</option>
          </select>
        </div>

        <div className={styles.field}>
          <label>Prompt</label>

          <textarea
            rows="8"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Write your prompt here..."
          />
        </div>

        <div className={styles.info}>
          <span>{category}</span>
          <span>{prompt.length}/1000</span>
        </div>

        <button
          onClick={handleOptimize}
          disabled={loading}
        >
          {loading ? "Optimizing..." : "Optimize Prompt"}
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