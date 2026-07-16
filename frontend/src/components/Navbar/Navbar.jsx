import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>

        <div className={styles.logo}>
          <h2>PromptPerfect AI</h2>
          <p>AI Prompt Optimizer</p>
        </div>

        <nav className={styles.links}>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Templates</a>
          <a href="#">About</a>
        </nav>

        <div className={styles.actions}>
          <button className={styles.signIn}>
            Sign In
          </button>

          <button className={styles.getStarted}>
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;