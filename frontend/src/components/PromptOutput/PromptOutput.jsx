import styles from "./PromptOutput.module.css";

function PromptOutput({ optimizedPrompt }) {
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
          <div className={styles.output}>
            {optimizedPrompt}
          </div>
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