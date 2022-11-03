import mongoose from "mongoose";

const scoreSchema = mongoose.Schema(
  {
    quizID: {
      type: String, //refers quiz
      required: true,
    },
    quizAnswers: {
      type: [String],
      required: false,
      default: [],
    },
    quizScore: {
      type: Number,
      default: 0,
    },
    userId: {
      type: String, //refers user ID
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Score", scoreSchema);
