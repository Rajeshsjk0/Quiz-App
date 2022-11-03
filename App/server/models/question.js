import mongoose from "mongoose";

const questionSchema = mongoose.Schema(
  {
    questionName: {
      type: String,
      required: true,
      unique: true,
    },
    questionDescription: {
      type: String,
      required: true,
      unique: true,
    },
    questionOwner: {
      type: String, //refers User Schema
      required: true,
    },
    questionType: {
      type: String,
      required: false,
      default: "MCQ",
    },
    questionAnswers: {
      type: [String],
      required: false,
      default: [],
    },
    questionCorrectAnswer: {
      type: String,
      required: false,
      default: "",
    },
    questionCategory: {
      type: String,
      default: "training",
    },
    questionImage: {
      type: String,
      default: "",
    },
    questionScores: {
      type: [String], //refers array of score ID
      required: false,
      default: [],
    },
    questionSectionsTime: {
      type: [
        {
          sections: String, //refers section ID and
          time: String,
        },
      ],
      required: false,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Question", questionSchema);
