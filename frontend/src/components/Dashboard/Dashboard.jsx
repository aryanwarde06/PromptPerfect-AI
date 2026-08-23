import styles from "./Dashboard.module.css";

function Dashboard({ history, selectedModel }) {
  // Total Prompts
  const totalPrompts = history.length;

  // Favorite Prompts
  const favoritePrompts = history.filter(
    (item) => item.favorite
  ).length;

  // Favorite Ratio
  const favoriteRatio =
    totalPrompts > 0
      ? Math.round(
          (favoritePrompts / totalPrompts) * 100
        )
      : 0;

  // Most Used Category
  const categoryCount = {};

  history.forEach((item) => {
    categoryCount[item.category] =
      (categoryCount[item.category] || 0) + 1;
  });

  const mostUsedCategory =
    Object.keys(categoryCount).length > 0
      ? Object.keys(categoryCount).reduce((a, b) =>
          categoryCount[a] >
          categoryCount[b]
            ? a
            : b
        )
      : "N/A";

  return (
    <section className={styles.dashboard}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          📊 Activity Summary
        </h2>

        <p className={styles.subtitle}>
          Keep track of your PromptPerfect AI activity.
        </p>

        <div className={styles.summary}>
          <ul>
            <li>
              <strong>Total Prompts</strong>

              <span>{totalPrompts}</span>
            </li>

            <li>
              <strong>Favorite Prompts</strong>

              <span>{favoritePrompts}</span>
            </li>

            <li>
              <strong>Favorite Ratio</strong>

              <span>{favoriteRatio}%</span>
            </li>

            <li>
              <strong>Most Used Category</strong>

              <span>{mostUsedCategory}</span>
            </li>

            <li>
              <strong>Preferred AI</strong>

              <span>
                {selectedModel?.name || "N/A"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;