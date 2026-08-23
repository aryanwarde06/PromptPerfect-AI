import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  User,
  Mail,
  FileText,
  Star,
  Bot,
  FolderOpen,
  LogOut,
} from "lucide-react";

import styles from "./Profile.module.css";
import { getPromptHistory } from "../services/promptService";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [stats, setStats] = useState({
    total: 0,
    favorites: 0,
    preferredAI: "Gemini",
    mostUsedCategory: "N/A",
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const prompts = await getPromptHistory();

        const total = prompts.length;

        const favorites = prompts.filter(
          (item) => item.isFavorite
        ).length;

        const categoryCount = {};

        prompts.forEach((item) => {
          categoryCount[item.category] =
            (categoryCount[item.category] || 0) + 1;
        });

        const mostUsedCategory =
          Object.keys(categoryCount).length > 0
            ? Object.keys(categoryCount).reduce((a, b) =>
                categoryCount[a] > categoryCount[b] ? a : b
              )
            : "N/A";

        setStats({
          total,
          favorites,
          preferredAI: "Gemini",
          mostUsedCategory,
        });
      } catch (error) {
        console.error("Failed to load profile stats:", error);
      }
    };

    loadStats();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className={styles.container}>
      {/* Header */}

      <div className={styles.header}>
        <h1>My Profile</h1>

        <p>
          View your account information and manage your PromptPerfect AI
          profile.
        </p>
      </div>

      {/* Profile Card */}

      <div className={styles.card}>
        <div className={styles.avatar}>
          {user?.name
            ?.split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase()}
        </div>

        <h2>{user?.name}</h2>

        <p className={styles.email}>{user?.email}</p>

        <div className={styles.divider}></div>

        {/* User Info */}

        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <User size={18} />

            <div>
              <span>Name</span>

              <strong>{user?.name}</strong>
            </div>
          </div>

          <div className={styles.infoCard}>
            <Mail size={18} />

            <div>
              <span>Email</span>

              <strong>{user?.email}</strong>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Statistics */}

        <h3 className={styles.sectionTitle}>
          📊 Statistics
        </h3>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <FileText size={22} />

            <h4>Total Prompts</h4>

            <span>{stats.total}</span>
          </div>

          <div className={styles.statCard}>
            <Star size={22} />

            <h4>Favorites</h4>

            <span>{stats.favorites}</span>
          </div>

          <div className={styles.statCard}>
            <Bot size={22} />

            <h4>Preferred AI</h4>

            <span>{stats.preferredAI}</span>
          </div>

          <div className={styles.statCard}>
            <FolderOpen size={22} />

            <h4>Category</h4>

            <span>{stats.mostUsedCategory}</span>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Logout */}

        <button
          className={styles.logoutBtn}
          onClick={handleLogout}
        >
          <LogOut size={18} />

          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;