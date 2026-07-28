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
    desc: "Generate optimized coding prompts for debugging, reviews and development.",
    category: "Coding",
    prompt:
      "Generate clean, optimized code for [PROBLEM]. Explain the logic, include comments, optimize for performance, and mention time complexity.",
  },
  {
    icon: <Mail size={32} />,
    title: "Email",
    desc: "Write professional emails for business, clients and communication.",
    category: "Writing",
    prompt:
      "Write a professional email about [TOPIC]. Use a polite and professional tone, include a clear subject line, greeting, body, and call to action.",
  },
  {
    icon: <FileText size={32} />,
    title: "Resume",
    desc: "Create ATS-friendly resumes and cover letters with AI.",
    category: "Writing",
    prompt:
      "Create an ATS-friendly resume for a [JOB ROLE]. Highlight skills, projects, achievements, certifications, and professional experience.",
  },
  {
    icon: <Megaphone size={32} />,
    title: "Marketing",
    desc: "Generate marketing campaigns, ads and social media prompts.",
    category: "Marketing",
    prompt:
      "Create a complete marketing campaign for [PRODUCT]. Include target audience, slogans, ad copy, social media posts, and marketing strategy.",
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Education",
    desc: "Learning, teaching and study prompts for students and educators.",
    category: "Education",
    prompt:
      "Explain [TOPIC] in a simple and engaging way with real-life examples, diagrams, quizzes, and practice questions.",
  },
  {
    icon: <Briefcase size={32} />,
    title: "Business",
    desc: "Business strategy, planning and startup idea generation.",
    category: "Business",
    prompt:
      "Develop a business plan for a startup in the [INDUSTRY] industry. Include SWOT analysis, revenue model, marketing strategy, financial plan, and growth roadmap.",
  },
];

function Templates({ setPrompt, setCategory }) {
  const handleTemplateClick = (template) => {
    setPrompt(template.prompt);
    setCategory(template.category);

    document
      .getElementById("get-started")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.templates}>
      <div className={styles.container}>
        <span className={styles.badge}>
          Prompt Templates
        </span>

        <h2>Popular Prompt Templates</h2>

        <p>
          Choose a professionally designed template and generate better AI
          prompts instantly.
        </p>

        <div className={styles.grid}>
          {templates.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.icon}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <button
                className={styles.button}
                onClick={() => handleTemplateClick(item)}
              >
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