import { useState } from "react";
import styles from "./PromptInput.module.css";

function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const [category, setCategory] = useState("Coding");

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

        <button>
          Optimize Prompt
        </button>

      </div>
    </section>
  );
}

export default PromptInput;