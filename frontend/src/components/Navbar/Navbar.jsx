import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaChevronDown,
  FaHistory,
  FaHeart,
  FaSignOutAlt,
} from "react-icons/fa";

import styles from "./Navbar.module.css";
import logo from "../../assets/logos/logo.png";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [showDropdown, setShowDropdown] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
    window.location.reload();
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* ================= Logo ================= */}

        <div
          className={styles.logo}
          onClick={() => scrollToSection("home")}
        >
          <img
            src={logo}
            alt="PromptPerfect AI Logo"
            className={styles.logoImage}
          />

          <div className={styles.logoText}>
            <h2>
              PromptPerfect <span>AI</span>
            </h2>

            <p>AI Prompt Optimizer</p>
          </div>
        </div>

        {/* ================= Navigation ================= */}

        <nav className={styles.links}>
          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("features")}>
            Features
          </button>

          <button onClick={() => scrollToSection("templates")}>
            Templates
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>
        </nav>

        {/* ================= Right Section ================= */}

        <div className={styles.actions}>
          {user ? (
            <div className={styles.userSection}>
              <button
                className={styles.userButton}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <FaUserCircle />
                <span>{user.name}</span>
                <FaChevronDown />
              </button>

              {showDropdown && (
                <div className={styles.dropdown}>
                  <button onClick={() => navigate("/profile")}>
                    <FaUserCircle />
                    My Profile
                  </button>

                  <button onClick={() => navigate("/history")}>
                    <FaHistory />
                    Prompt History
                  </button>

                  <button onClick={() => navigate("/favorites")}>
                    <FaHeart />
                    Favorites
                  </button>

                  <hr />

                  <button onClick={handleLogout}>
                    <FaSignOutAlt />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className={styles.signIn}
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          )}

          <button
            className={styles.getStarted}
            onClick={() => scrollToSection("get-started")}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;