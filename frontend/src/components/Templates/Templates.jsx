import styles from "./Templates.module.css";
import {
  Code2,
  Mail,
  FileText,
  Megaphone,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const templates = [
  {
    icon: <Code2 size={32} />,
    title: "Coding",
    desc: "Generate optimized coding prompts for debugging, reviews and development."
  },
  {
    icon: <Mail size={32} />,
    title: "Email",
    desc: "Write professional emails for business, clients and communication."
  },
  {
    icon: <FileText size={32} />,
    title: "Resume",
    desc: "Create ATS-friendly resumes and cover letters with AI."
  },
  {
    icon: <Megaphone size={32} />,
    title: "Marketing",
    desc: "Generate marketing campaigns, ads and social media prompts."
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Education",
    desc: "Learning, teaching and study prompts for students and educators."
  },
  {
    icon: <Briefcase size={32} />,
    title: "Business",
    desc: "Business strategy, planning and startup idea generation."
  }
];

function Templates() {
  return (
    <section className={styles.templates}>
      <div className={styles.container}>

        <span className={styles.badge}>
          Prompt Templates
        </span>

        <h2>
          Popular Prompt Templates
        </h2>

        <p>
          Choose a professionally designed template and generate
          better AI prompts instantly.
        </p>

        <div className={styles.grid}>
          {templates.map((item) => (
            <div key={item.title} className={styles.card}>

              <div className={styles.icon}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <button className={styles.button}>
                Use Template
                <ArrowRight size={18} />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Templates;