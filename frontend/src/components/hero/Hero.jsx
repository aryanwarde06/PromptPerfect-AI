import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>

      {/* Background Glow */}
      <div className={styles.glowOne}></div>
      <div className={styles.glowTwo}></div>

      <div className={styles.content}>

        <div className={styles.badge}>
          ✨ AI Powered Prompt Engineering
        </div>

        <h1 className={styles.title}>
          Transform Your Ideas Into
          <br />
          <span>Professional AI Prompts</span>
        </h1>

        <p className={styles.description}>
          PromptPerfect AI helps you convert simple instructions into
          optimized prompts for ChatGPT, Gemini, Claude, Copilot,
          DeepSeek and other leading AI models in seconds.
        </p>

        <div className={styles.buttons}>

          <button className={styles.primary}>
            Start Optimizing
          </button>

          <button className={styles.secondary}>
            View Templates
          </button>

        </div>

        <div className={styles.platforms}>
          <span>ChatGPT</span>
          <span>Gemini</span>
          <span>Claude</span>
          <span>Copilot</span>
          <span>DeepSeek</span>
        </div>

      </div>

    </section>
  );
}

export default Hero;