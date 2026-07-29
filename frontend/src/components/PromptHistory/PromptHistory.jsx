import styles from "./PromptHistory.module.css";

import {
  FaStar,
  FaRegStar,
  FaTrashAlt,
  FaTrash,
  FaSearch,
} from "react-icons/fa";

import { toast } from "react-toastify";

function PromptHistory({
  history,
  searchTerm,
  setSearchTerm,
  onSelect,
  onToggleFavorite,
  onDelete,
  onClearHistory,
}) {
  // Filter prompts based on search
  const filteredHistory = history.filter(
    (item) =>
      item.prompt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const favorites = filteredHistory.filter((item) => item.favorite);
  const recent = filteredHistory.filter((item) => !item.favorite);

  const renderPrompt = (item, originalIndex) => (
    <li key={originalIndex} className={styles.item}>
      <div
        className={styles.content}
        onClick={() => onSelect(item)}
      >
        <strong>{item.prompt}</strong>

        <small>
          {item.category} • {item.createdAt}
        </small>
      </div>

      <div className={styles.actions}>
        {/* Favorite Button */}
        <button
          className={styles.favoriteBtn}
          onClick={(e) => {
            e.stopPropagation();

            onToggleFavorite(originalIndex);

            if (item.favorite) {
              toast.info("⭐ Removed from favorites");
            } else {
              toast.success("⭐ Added to favorites");
            }
          }}
          title={
            item.favorite
              ? "Remove from Favorites"
              : "Add to Favorites"
          }
        >
          {item.favorite ? <FaStar /> : <FaRegStar />}
        </button>

        {/* Delete Button */}
        <button
          className={styles.deleteBtn}
          onClick={(e) => {
            e.stopPropagation();

            if (
              window.confirm(
                "Are you sure you want to delete this prompt?"
              )
            ) {
              onDelete(originalIndex);
              toast.success("🗑️ Prompt deleted successfully");
            }
          }}
          title="Delete Prompt"
        >
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );

  return (
    <section className={styles.section}>
      <div className={styles.card}>

        {/* Header */}
        <div className={styles.header}>
         <div className={styles.titleSection}>
  <h2>Prompt History</h2>
  <p>Browse, search, and manage your optimized prompts.</p>
  <p className={styles.count}>
  {history.length} prompt{history.length !== 1 ? "s" : ""}
</p>
</div>

          {history.length > 0 && (
            <button
              className={styles.clearBtn}
              onClick={() => {
                onClearHistory();

                // Only show after confirmation inside App.jsx
                toast.success("🧹 History cleared");
              }}
            >
              <FaTrash />
              <span>Clear All</span>
            </button>
          )}
        </div>

        {/* Search */}
        <div className={styles.searchBox}>
          <FaSearch className={styles.searchIcon} />

          <input
            type="text"
            placeholder="Search prompt history..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className={styles.searchInput}
          />
        </div>

        {/* Favorites */}
        {favorites.length > 0 && (
          <>
            <h3 className={styles.subHeading}>
              ⭐ Favorite Prompts
            </h3>

            <ul className={styles.list}>
              {favorites.map((item) =>
                renderPrompt(item, history.indexOf(item))
              )}
            </ul>
          </>
        )}

        {/* Recent */}
        <h3 className={styles.subHeading}>
          🕒 Recent Prompts
        </h3>

        {recent.length === 0 ? (
        <div className={styles.emptyState}>
  <div className={styles.emptyIcon}>📝</div>

  <h3>No prompts found</h3>

  <p>
    Try a different search or optimize a new prompt to
    see it here.
  </p>
</div>
        ) : (
          <ul className={styles.list}>
            {recent.map((item) =>
              renderPrompt(item, history.indexOf(item))
            )}
          </ul>
        )}
      </div>
    </section>
  );
}

export default PromptHistory;