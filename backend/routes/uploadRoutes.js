const express = require("express");
const multer = require("multer");
const { uploadFile } = require("../controllers/uploadController");

const router = express.Router();

// Store uploaded files inside /uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + file.originalname.replace(/\s+/g, "_");

    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 15 * 1024 * 1024, // 15MB
  },
});

router.post("/", upload.single("file"), uploadFile);

module.exports = router;