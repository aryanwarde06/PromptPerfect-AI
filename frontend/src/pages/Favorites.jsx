import { useEffect, useState } from "react";
import { getPromptHistory } from "../services/promptService";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const prompts = await getPromptHistory();

        const favoritePrompts = prompts.filter(
          (prompt) => prompt.isFavorite
        );

        setFavorites(favoritePrompts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, []);

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>⭐ Favorites</h1>

      {loading ? (
        <p>Loading...</p>
      ) : favorites.length === 0 ? (
        <p>Your favorite prompts will appear here.</p>
      ) : (
        <div>
          {favorites.map((item) => (
            <div
              key={item._id}
              style={{
                background: "#1f2937",
                padding: "16px",
                marginTop: "15px",
                borderRadius: "10px",
              }}
            >
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
      )}
    </div>
  );
}

export default Favorites;