import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    categoryName: {
      type: String, //refers quiz
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Category", categorySchema);
