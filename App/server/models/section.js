import mongoose from "mongoose";

const sectionSchema = mongoose.Schema(
  {
    sectionName: {
      type: String, //refers quiz
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Section", sectionSchema);
