const mongoose = require("mongoose");
const articleSchema = mongoose.Schema(
  {
    title: String,
    author: String,
    content: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = {
  Article,
};
