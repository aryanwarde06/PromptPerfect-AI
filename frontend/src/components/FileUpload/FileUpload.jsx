import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./FileUpload.module.css";

function FileUpload({ selectedFile, setSelectedFile }) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
    }
  }, [setSelectedFile]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "text/plain": [".txt"],
    },
  });

  return (
    <div className={styles.container}>
      <div
        {...getRootProps()}
        className={`${styles.dropzone} ${
          isDragActive ? styles.active : ""
        }`}
      >
        <input {...getInputProps()} />

        <div className={styles.icon}>📂</div>

        <h3>Drag & Drop your file here</h3>

        <p>or click to browse</p>

        <small>
          Supported: PNG • JPG • JPEG • WEBP • PDF • DOCX • TXT
        </small>
      </div>

      {selectedFile && (
        <div className={styles.fileCard}>
          <h4>Selected File</h4>

          <p>
            <strong>Name:</strong> {selectedFile.name}
          </p>

          <p>
            <strong>Type:</strong> {selectedFile.type}
          </p>

          <p>
            <strong>Size:</strong>{" "}
            {(selectedFile.size / 1024).toFixed(2)} KB
          </p>
        </div>
      )}
    </div>
  );
}

export default FileUpload;