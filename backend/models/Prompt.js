const mongoose = require("mongoose");

const promptSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    originalPrompt: {
      type: String,
      required: true,
    },

    optimizedPrompt: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      default: "General",
    },

    model: {
      type: String,
      default: "Gemini",
    },

    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Prompt", promptSchema);