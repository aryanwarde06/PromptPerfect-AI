const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded.",
      });
    }

    console.log("Uploaded File:", req.file);

    const filePath = req.file.path;
    const fileExtension = path.extname(req.file.originalname).toLowerCase();

    let extractedText = "";

    switch (fileExtension) {
      case ".txt":
        extractedText = fs.readFileSync(filePath, "utf8");
        break;

      case ".pdf": {
        const buffer = fs.readFileSync(filePath);
        const pdf = await pdfParse(buffer);
        extractedText = pdf.text;
        break;
      }

      case ".docx": {
        const result = await mammoth.extractRawText({
          path: filePath,
        });
        extractedText = result.value;
        break;
      }

      case ".jpg":
      case ".jpeg":
      case ".png":
      case ".webp":
        extractedText =
          "Image uploaded successfully. Gemini Vision integration will be added next.";
        break;

      default:
        return res.status(400).json({
          success: false,
          message: "Unsupported file type.",
        });
    }

    if (!extractedText.trim()) {
      extractedText = "No readable text found in the uploaded file.";
    }

    return res.status(200).json({
      success: true,
      fileName: req.file.originalname,
      fileType: fileExtension,
      extractedText,
    });

  } catch (error) {
    console.error("UPLOAD ERROR");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadFile,
};