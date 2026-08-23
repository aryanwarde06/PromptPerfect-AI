import styles from "./Templates.module.css";

import {
  Code2,
  PenTool,
  FileText,
  Megaphone,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const templates = [
  {
    icon: <Code2 size={28} />,
    title: "Coding",
    badge: "⭐ Popular",
    description:
      "Generate optimized code, debug applications, explain logic, and improve performance.",
    category: "Coding",
    prompt:
      "Generate clean, optimized code for [PROBLEM]. Explain the logic, include comments, optimize for performance, and mention time complexity.",
  },

  {
    icon: <PenTool size={28} />,
    title: "Writing",
    badge: "✨ Recommended",
    description:
      "Write blogs, articles, emails, reports, and professional content with AI assistance.",
    category: "Writing",
    prompt:
      "Write a professional article about [TOPIC]. Use a clear structure, engaging tone, headings, and conclusion.",
  },

  {
    icon: <FileText size={28} />,
    title: "Resume",
    badge: "🔥 Trending",
    description:
      "Create ATS-friendly resumes, cover letters, and prepare for job interviews.",
    category: "Writing",
    prompt:
      "Create an ATS-friendly resume for a [JOB ROLE]. Highlight skills, achievements, certifications, and projects.",
  },

  {
    icon: <Megaphone size={28} />,
    title: "Marketing",
    badge: "🚀 Growth",
    description:
      "Generate marketing campaigns, ad copy, SEO content, and social media strategies.",
    category: "Marketing",
    prompt:
      "Create a complete marketing campaign for [PRODUCT]. Include audience, strategy, slogans, and social media ideas.",
  },

  {
    icon: <GraduationCap size={28} />,
    title: "Education",
    badge: "📚 Learning",
    description:
      "Explain concepts, generate quizzes, study notes, and educational content.",
    category: "Education",
    prompt:
      "Explain [TOPIC] in simple language with examples, diagrams, quizzes, and practice questions.",
  },

  {
    icon: <Briefcase size={28} />,
    title: "Business",
    badge: "💎 Premium",
    description:
      "Create business plans, SWOT analysis, startup ideas, and professional proposals.",
    category: "Business",
    prompt:
      "Develop a business plan for a startup in the [INDUSTRY] industry. Include SWOT analysis, revenue model, marketing strategy, and financial plan.",
  },
];
function Templates({ setPrompt, setCategory }) {
  const handleTemplateClick = (template) => {
    setPrompt(template.prompt);
    setCategory(template.category);

    document
      .getElementById("get-started")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className={styles.templates}>
      <div className={styles.container}>
        <span className={styles.badge}>
          🚀 Prompt Templates
        </span>

        <h2>Choose a Prompt Template</h2>

        <p>
          Start faster with professionally designed AI prompt templates.
          Select a template below and customize it to match your needs.
        </p>

        <div className={styles.grid}>
          {templates.map((item) => (
            <div
              key={item.title}
              className={styles.card}
            >
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.left}>
                  <div className={styles.icon}>
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>
                </div>

                <span className={styles.cardBadge}>
                  {item.badge}
                </span>
              </div>

              {/* Description */}
              <p className={styles.description}>
                {item.description}
              </p>

              {/* Divider */}
              <div className={styles.divider}></div>

              {/* Button */}
              <button
                className={styles.button}
                onClick={() =>
                  handleTemplateClick(item)
                }
              >
                <span>Use Template</span>

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
