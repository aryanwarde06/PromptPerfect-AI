import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.badge}>
        AI Powered Prompt Engineering
      </div>

      <h1 className={styles.title}>
        Transform Simple
        <br />
        Prompts Into
        <br />
        <span>Powerful AI Prompts</span>
      </h1>

      <p className={styles.description}>
        Create high-quality prompts for ChatGPT, Gemini, Claude,
        Copilot and other AI models with a single click.
      </p>

      <div className={styles.buttons}>
        <button className={styles.primary}>
          Get Started
        </button>

        <button className={styles.secondary}>
          Explore Features
        </button>
      </div>

      <div className={styles.platforms}>
        <span>ChatGPT</span>
        <span>Gemini</span>
        <span>Claude</span>
        <span>Copilot</span>
      </div>

    </section>
  );
}

export default Hero;