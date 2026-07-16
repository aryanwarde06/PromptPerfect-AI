import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.top}>

          <div className={styles.brand}>
            <h2>PromptPerfect AI</h2>
            <p>AI Prompt Optimizer</p>
          </div>

          <div className={styles.links}>
            <div>
              <h4>Quick Links</h4>
              <a href="#">Home</a>
              <a href="#">Features</a>
              <a href="#">Templates</a>
              <a href="#">About</a>
            </div>

            <div>
              <h4>Resources</h4>
              <a href="#">Documentation</a>
              <a href="#">Blog</a>
              <a href="#">Support</a>
            </div>

            <div>
              <h4>Contact</h4>
              <a href="mailto:contact@promptperfect.ai">
                contact@promptperfect.ai
              </a>
            </div>
          </div>

        </div>

        <div className={styles.bottom}>
          © 2026 PromptPerfect AI. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;