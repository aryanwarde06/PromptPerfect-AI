import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

import styles from "./Favorites.module.css";

import {
  getPromptHistory,
  toggleFavorite,
} from "../services/promptService";

function Favorites() {
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // ==========================
  // Load Favorites
  // ==========================
  const loadFavorites = async () => {
    try {
      const prompts = await getPromptHistory();

      const favoritePrompts = prompts.filter(
        (item) => item.isFavorite
      );

      setFavorites(favoritePrompts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  // ==========================
  // Search
  // ==========================
  const filteredFavorites = favorites.filter(
    (item) =>
      item.originalPrompt
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.category
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  // ==========================
  // Open Prompt
  // ==========================
  const handleOpen = (item) => {
    localStorage.setItem(
      "selectedPrompt",
      JSON.stringify({
        originalPrompt: item.originalPrompt,
        optimizedPrompt: item.optimizedPrompt,
        category: item.category,
      })
    );

    navigate("/");
  };

  // ==========================
  // Remove Favorite
  // ==========================
  const handleRemove = async (id) => {
    try {
      await toggleFavorite(id);

      loadFavorites();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}

      <div className={styles.header}>
        <h1>⭐ Favorite Prompts</h1>

        <p>
          Browse all your starred prompts.
        </p>
      </div>

      {/* Card */}

      <div className={styles.card}>
        {loading ? (
          <p className={styles.loading}>
            Loading...
          </p>
        ) : favorites.length === 0 ? (
          <div className={styles.empty}>
            <Star size={55} />

            <h2>No Favorites Yet</h2>

            <p>
              Mark prompts as favorites and
              they will appear here.
            </p>
          </div>
        ) : (
          <>
            <div className={styles.topBar}>
              <h2>Your Favorites</h2>

              <input
                type="text"
                placeholder="🔍 Search favorites..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className={styles.searchInput}
              />
            </div>

            <div className={styles.list}>
              {filteredFavorites.length > 0 ? (
                filteredFavorites.map((item) => (
                  <div
                    key={item._id}
                    className={styles.item}
                  >
                    <div className={styles.content}>
                      <h3>
                        {item.originalPrompt}
                      </h3>

                      <div
                        className={styles.meta}
                      >
                        <span
                          className={
                            styles.category
                          }
                        >
                          {item.category}
                        </span>

                        <span
                          className={styles.date}
                        >
                          {new Date(
                            item.createdAt
                          ).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div
                      className={styles.actions}
                    >
                      <button
                        className={
                          styles.openBtn
                        }
                        onClick={() =>
                          handleOpen(item)
                        }
                      >
                        Open
                      </button>

                      <button
                        className={
                          styles.removeBtn
                        }
                        onClick={() =>
                          handleRemove(item._id)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className={styles.noResults}>
                  No favorites found.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Favorites;