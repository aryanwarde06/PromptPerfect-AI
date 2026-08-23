import { useEffect, useState } from "react";
import { History } from "lucide-react";
import styles from "./PromptHistory.module.css";
import { getPromptHistory } from "../services/promptService";

function PromptHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  // Search Filter
  const filteredHistory = history.filter(
    (item) =>
      item.originalPrompt
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.category
        .toLowerCase()
        .includes(search.toLowerCase())
  );  
  const handleOpenPrompt = (item) => {
  localStorage.setItem(
    "selectedPrompt",
    JSON.stringify(item)
  );

  window.location.href = "/";
};
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1>📚 Prompt History</h1>
        <p>Browse and manage all your optimized prompts.</p>
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
            <div className={styles.topBar}>
              <h2 className={styles.historyTitle}>
                Your Prompt Library
              </h2>

              <input
                type="text"
                placeholder="🔍 Search prompts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            <div className={styles.historyList}>
              {filteredHistory.length > 0 ? (
                filteredHistory.map((item) => (
                  <div
                    key={item._id}
                    className={styles.historyItem}
                  >
                    <div className={styles.historyContent}>
                      <h3>{item.originalPrompt}</h3>

                      <div className={styles.meta}>
                        <span className={styles.category}>
                          {item.category}
                        </span>

                        <span className={styles.date}>
                          {new Date(
                            item.createdAt
                          ).toLocaleString()}
                        </span>
                      </div>
                    </div>

                   <button
  className={styles.openBtn}
  onClick={() => handleOpenPrompt(item)}
>
  Open →
</button>
                  </div>
                ))
              ) : (
                <p className={styles.noResults}>
                  No prompts found.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PromptHistory;