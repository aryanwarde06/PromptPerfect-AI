import styles from "./Features.module.css";
import {
  Zap,
  BrainCircuit,
  FileText,
  Target,
  ShieldCheck,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: <Zap size={28} />,
    title: "Fast Optimization",
    desc: "Improve prompts instantly with one click.",
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "AI Powered",
    desc: "Advanced prompt engineering for better AI outputs.",
  },
  {
    icon: <FileText size={28} />,
    title: "Ready Templates",
    desc: "Choose from multiple prompt categories.",
  },
  {
    icon: <Target size={28} />,
    title: "Better Results",
    desc: "Generate clear, structured and detailed prompts.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure",
    desc: "Your prompts stay private.",
  },
  {
    icon: <Globe size={28} />,
    title: "Multi AI Support",
    desc: "Works with ChatGPT, Gemini, Claude and more.",
  },
];

function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <span className={styles.badge}>Why Choose PromptPerfect AI</span>

        <h2>
          Generate Better Prompts
          <br />
          in Seconds
        </h2>

        <p>
          Everything you need to create professional AI prompts with speed,
          accuracy and consistency.
        </p>

        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;