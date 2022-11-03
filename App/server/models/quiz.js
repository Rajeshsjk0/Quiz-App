import mongoose from "mongoose";

const quizSchema = mongoose.Schema(
  {
    quizName: {
      type: String,
      required: true,
    },
    quizOwner: {
      type: String,
      //   set: toLower,
      required: true,
    },
    quizQuestions: {
      type: [],
      required: false,
      default: [],
    },
    quizAttendies: {
      type: [String],
      required: false,
      default: [],
    },
    quizCategory: {
      type: String,
      default: "training",
    },
    quizImage: {
      type: String,
      default: "",
    },
    quizSectionsTime: {
      type: [
        {
          sections: String, //refers section ID and
          time: String,
        },
      ],
      required: false,
      default: [],
    },
    quizScores: {
      type: [String], //refers array of score ID
      required: false,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Quiz", quizSchema);
