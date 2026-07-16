import styles from "./Templates.module.css";
import {
  Code2,
  Mail,
  FileText,
  BarChart3,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const templates = [
  {
    icon: <Code2 size={32} />,
    title: "Coding",
    desc: "Generate optimized coding prompts.",
  },
  {
    icon: <Mail size={32} />,
    title: "Email",
    desc: "Write professional emails quickly.",
  },
  {
    icon: <FileText size={32} />,
    title: "Resume",
    desc: "Create ATS-friendly resume prompts.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Marketing",
    desc: "Generate marketing campaign prompts.",
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Education",
    desc: "Learning and teaching prompts.",
  },
  {
    icon: <Briefcase size={32} />,
    title: "Business",
    desc: "Business strategy and planning prompts.",
  },
];

function Templates() {
  return (
    <section className={styles.templates}>
      <div className={styles.container}>

        <span className={styles.badge}>
          Prompt Templates
        </span>

        <h2>Popular Prompt Templates</h2>

        <p>
          Choose a template and generate better AI prompts instantly.
        </p>

        <div className={styles.grid}>
          {templates.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.icon}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Templates;