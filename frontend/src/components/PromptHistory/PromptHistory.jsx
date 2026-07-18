import styles from "./PromptHistory.module.css";

function PromptHistory({ history, onSelect }) {
  console.log("📜 Prompt History:", history);

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h2>🕒 Recent Prompts</h2>

        {history.length === 0 ? (
          <p className={styles.empty}>No prompts yet.</p>
        ) : (
          <ul className={styles.list}>
            {history.map((item, index) => (
              <li
                key={index}
                className={styles.item}
                onClick={() => {
                  console.log("Selected Prompt:", item);
                  onSelect(item);
                }}
              >
                <div>
                  <strong>{item.prompt}</strong>
                </div>

                <small>
                  {item.category} • {item.createdAt}
                </small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default PromptHistory;