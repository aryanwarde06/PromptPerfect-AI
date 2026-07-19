import { useState } from "react";
import { jsPDF } from "jspdf";
import { toast } from "react-toastify";
import styles from "./PromptOutput.module.css";

function PromptOutput({
  prompt,
  category,
  optimizedPrompt,
  onRegenerate,
}) {
  const [copied, setCopied] = useState(false);
  const [regenerating, setRegenerating] = useState(false);

  const handleCopy = async () => {
    if (!optimizedPrompt) return;

    try {
      await navigator.clipboard.writeText(optimizedPrompt);

      setCopied(true);
      toast.success("📋 Prompt copied successfully!");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      toast.error("❌ Failed to copy prompt.");
    }
  };

  const handleRegenerate = async () => {
    try {
      setRegenerating(true);

      await onRegenerate();

      toast.success("🔄 Prompt regenerated successfully!");
    } catch (error) {
      toast.error("❌ Failed to regenerate prompt.");
    } finally {
      setRegenerating(false);
    }
  };

  // TXT Export
  const downloadTXT = () => {
    const text = `Original Prompt:

${prompt}

Category:
${category}

--------------------------------------

Optimized Prompt:

${optimizedPrompt}`;

    const blob = new Blob([text], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "optimized-prompt.txt";

    link.click();

    URL.revokeObjectURL(url);

    toast.success("📄 TXT downloaded!");
  };

  // Markdown Export
  const downloadMD = () => {
    const markdown = `# PromptPerfect AI

## Original Prompt

${prompt}

---

## Category

${category}

---

## Optimized Prompt

${optimizedPrompt}`;

    const blob = new Blob([markdown], {
      type: "text/markdown",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "optimized-prompt.md";

    link.click();

    URL.revokeObjectURL(url);

    toast.success("📝 Markdown downloaded!");
  };

  // PDF Export
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("PromptPerfect AI", 20, 20);

    doc.setFontSize(13);

    doc.text("Original Prompt:", 20, 40);

    const original = doc.splitTextToSize(prompt, 170);
    doc.text(original, 20, 50);

    let y = 50 + original.length * 8;

    doc.text("Category:", 20, y);

    doc.text(category, 20, y + 10);

    y += 25;

    doc.text("Optimized Prompt:", 20, y);

    const optimized = doc.splitTextToSize(
      optimizedPrompt,
      170
    );

    doc.text(optimized, 20, y + 10);

    doc.save("optimized-prompt.pdf");

    toast.success("📑 PDF downloaded!");
  };

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.badge}>
            ✨ Optimized Prompt
          </span>

          <h2>AI Generated Prompt</h2>

          <p>Your optimized AI prompt will appear below.</p>
        </div>

        {optimizedPrompt ? (
          <>
            <div className={styles.output}>
              {optimizedPrompt}
            </div>

            <div className={styles.actions}>
              <button
                className={styles.copyButton}
                onClick={handleCopy}
              >
                {copied ? "✅ Copied!" : "📋 Copy Prompt"}
              </button>

              <button
                className={styles.regenerateButton}
                onClick={handleRegenerate}
                disabled={regenerating}
              >
                {regenerating
                  ? "⏳ Regenerating..."
                  : "🔄 Regenerate Prompt"}
              </button>
            </div>

           <div className={styles.exportSection}>
  <h3 className={styles.exportTitle}>
    Export Prompt
  </h3>

  <div className={styles.exportButtons}>
    <button
      className={styles.exportButton}
      onClick={downloadTXT}
    >
      <div className={styles.exportIcon}>📄</div>

      <div className={styles.exportContent}>
        <h4>TXT File</h4>
        <p>Plain text format</p>
      </div>
    </button>

    <button
      className={styles.exportButton}
      onClick={downloadPDF}
    >
      <div className={styles.exportIcon}>📑</div>

      <div className={styles.exportContent}>
        <h4>PDF File</h4>
        <p>Printable document</p>
      </div>
    </button>

    <button
      className={styles.exportButton}
      onClick={downloadMD}
    >
      <div className={styles.exportIcon}>📝</div>

      <div className={styles.exportContent}>
        <h4>Markdown</h4>
        <p>.md format</p>
      </div>
    </button>
  </div>
</div>
          </>
        ) : (
          <div className={styles.empty}>
            Optimize a prompt to see the result.
          </div>
        )}
      </div>
    </section>
  );
}

export default PromptOutput;