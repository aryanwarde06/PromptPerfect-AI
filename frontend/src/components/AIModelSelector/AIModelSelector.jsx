import { useState } from "react";
import styles from "./AIModelSelector.module.css";

import geminiLogo from "../../assets/ai-models/gemini.png";
import openaiLogo from "../../assets/ai-models/openai.png";
import claudeLogo from "../../assets/ai-models/claude.png";
import deepseekLogo from "../../assets/ai-models/deepseek.png";
const models = [
  {
    id: "gemini-2.5-flash",
    name: "Gemini 2.5 Flash",
    logo: geminiLogo,
    available: true,
  },
  {
    id: "gpt-4.1",
    name: "ChatGPT 4.1",
    logo: openaiLogo,
    available: false,
  },
  {
    id: "claude-sonnet-4",
    name: "Claude Sonnet 4",
    logo: claudeLogo,
    available: false,
  },
  {
    id: "deepseek-v3",
    name: "DeepSeek V3",
    logo: deepseekLogo,
    available: false,
  },
];

function AIModelSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(models[0]);

 return (
  <div className={styles.container}>
    <label className={styles.label}>AI Model</label>

    <div
      className={styles.selector}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.selected}>
        <img
          src={selectedModel.logo}
          alt={selectedModel.name}
          className={styles.logo}
        />

        <span>{selectedModel.name}</span>
      </div>

      <span className={styles.arrow}>
        {isOpen ? "▲" : "▼"}
      </span>
    </div>

    {isOpen && (
      <div className={styles.dropdown}>
        {models.map((model) => (
          <div
            key={model.id}
            className={`${styles.option} ${
              !model.available ? styles.disabled : ""
            }`}
            onClick={() => {
              if (!model.available) return;
              setSelectedModel(model);
              setIsOpen(false);
            }}
          >
            <img
              src={model.logo}
              alt={model.name}
              className={styles.logo}
            />

            <div className={styles.info}>
              <span>{model.name}</span>

              {!model.available && (
                <small>Coming Soon</small>
              )}
            </div>

            {selectedModel.id === model.id && (
              <span className={styles.check}>✓</span>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
);
}

export default AIModelSelector;