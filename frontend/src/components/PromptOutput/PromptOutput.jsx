import { useState } from "react";
import styles from "./PromptOutput.module.css";

function PromptOutput({ optimizedPrompt, onRegenerate }) {
  const [copied, setCopied] = useState(false);
  const [regenerating, setRegenerating] = useState(false);

  const handleCopy = async () => {
    if (!optimizedPrompt) return;

    try {
      await navigator.clipboard.writeText(optimizedPrompt);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const handleRegenerate = async () => {
    try {
      setRegenerating(true);

      await onRegenerate();

    } catch (error) {
      console.error(error);
    } finally {
      setRegenerating(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.card}>

        <div className={styles.header}>
          <span className={styles.badge}>
            ✨ Optimized Prompt
          </span>

          <h2>AI Generated Prompt</h2>

          <p>
            Your optimized AI prompt will appear below.
          </p>
        </div>

        {optimizedPrompt ? (
          <>
            <div className={styles.output}>
              {optimizedPrompt}
            </div>

            <div className={styles.actions}>

              <button
                className={styles.copyButton}
                onClick={handleCopy}
              >
                {copied ? "✅ Copied!" : "📋 Copy Prompt"}
              </button>

              <button
                className={styles.regenerateButton}
                onClick={handleRegenerate}
                disabled={regenerating}
              >
                {regenerating
                  ? "⏳ Regenerating..."
                  : "🔄 Regenerate Prompt"}
              </button>

            </div>
          </>
        ) : (
          <div className={styles.empty}>
            Optimize a prompt to see the result.
          </div>
        )}

      </div>
    </section>
  );
}

export default PromptOutput;