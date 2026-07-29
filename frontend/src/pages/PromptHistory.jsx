import { useEffect, useState } from "react";
import { History } from "lucide-react";
import styles from "./PromptHistory.module.css";
import { getPromptHistory } from "../services/promptService";

function PromptHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const prompts = await getPromptHistory();
        setHistory(prompts);
      } catch (error) {
        console.error("Failed to load prompt history:", error);
      } finally {
        setLoading(false);
      }
    };

    loadHistory();
  }, []);

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Prompt History</h1>
        <p>Browse and manage your optimized prompts.</p>
      </div>

      {/* Card */}
      <div className={styles.card}>
        {loading ? (
          <p className={styles.description}>Loading...</p>
        ) : history.length === 0 ? (
          <>
            <div className={styles.icon}>
              <History size={50} />
            </div>

            <h2>No Prompt History</h2>

            <p className={styles.description}>
              Your optimized prompts will appear here once you start using
              PromptPerfect AI.
            </p>
          </>
        ) : (
          <>
            <h2 className={styles.historyTitle}>Your Prompts</h2>

            <div className={styles.historyList}>
              {history.map((item) => (
                <div key={item._id} className={styles.historyItem}>
                  <h3>{item.originalPrompt}</h3>

                  <p>
                    <strong>Category:</strong> {item.category}
                  </p>

                  <small>
                    {new Date(item.createdAt).toLocaleString()}
                  </small>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PromptHistory;