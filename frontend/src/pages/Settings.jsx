import { useState } from "react";
import { Settings as SettingsIcon, Bot, FolderOpen, FileText, Save } from "lucide-react";
import { toast } from "react-toastify";

import styles from "./Settings.module.css";

function Settings() {
  const [aiModel, setAiModel] = useState(
    localStorage.getItem("preferredAI") || "gemini-2.5-flash"
  );

  const [category, setCategory] = useState(
    localStorage.getItem("preferredCategory") || "Coding"
  );

  const [exportFormat, setExportFormat] = useState(
    localStorage.getItem("preferredExportFormat") || "PDF"
  );

  const handleSave = () => {
    localStorage.setItem("preferredAI", aiModel);
    localStorage.setItem("preferredCategory", category);
    localStorage.setItem("preferredExportFormat", exportFormat);

    toast.success("⚙️ Settings saved successfully!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerIcon}>
          <SettingsIcon size={30} />
        </div>

        <h1>Settings</h1>

        <p>
          Personalize your PromptPerfect AI experience.
        </p>
      </div>

      <div className={styles.card}>
        {/* AI Model */}

        <div className={styles.setting}>
          <div className={styles.settingInfo}>
            <div className={styles.icon}>
              <Bot size={22} />
            </div>

            <div>
              <h3>Default AI Model</h3>

              <p>
                Choose the AI model you want to use by default.
              </p>
            </div>
          </div>

          <select
            value={aiModel}
            onChange={(e) => setAiModel(e.target.value)}
            className={styles.select}
          >
            <option value="gemini-2.5-flash">
              Gemini 2.5 Flash
            </option>

            <option value="gpt-4o">
              GPT-4o
            </option>

            <option value="claude">
              Claude
            </option>

            <option value="deepseek">
              DeepSeek
            </option>
          </select>
        </div>

        <div className={styles.divider}></div>

        {/* Category */}

        <div className={styles.setting}>
          <div className={styles.settingInfo}>
            <div className={styles.icon}>
              <FolderOpen size={22} />
            </div>

            <div>
              <h3>Default Category</h3>

              <p>
                Select the category used when creating prompts.
              </p>
            </div>
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles.select}
          >
            <option value="Coding">Coding</option>
            <option value="Writing">Writing</option>
            <option value="Marketing">Marketing</option>
            <option value="Business">Business</option>
            <option value="Education">Education</option>
            <option value="AI">AI</option>
          </select>
        </div>

        <div className={styles.divider}></div>

        {/* Export Format */}

        <div className={styles.setting}>
          <div className={styles.settingInfo}>
            <div className={styles.icon}>
              <FileText size={22} />
            </div>

            <div>
              <h3>Default Export Format</h3>

              <p>
                Choose the format used when exporting prompts.
              </p>
            </div>
          </div>

          <select
            value={exportFormat}
            onChange={(e) => setExportFormat(e.target.value)}
            className={styles.select}
          >
            <option value="PDF">PDF</option>
            <option value="TXT">TXT</option>
            <option value="Markdown">Markdown</option>
          </select>
        </div>

        <button
          className={styles.saveButton}
          onClick={handleSave}
        >
          <Save size={19} />
          Save Settings
        </button>
      </div>
    </div>
  );
}

export default Settings;