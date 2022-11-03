import mongoose from "mongoose";

// function toLower(v) {
//   return v.toLowerCase();
// }

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please tell us your name!"],
      unique: true,
    },
    userEmail: {
      type: String,
      //   set: toLower,
      required: [true, "Please provide your email!"],
      unique: true,

      // validate(value) {
      //   if (
      //     value.toLowerCase().includes(".org") ||
      //     !value.toLowerCase().includes("@")
      //   ) {
      //     throw new Error("email id is not valid");
      //   }
      // },
    },
    //   password: { type: String, required: true },
    userImage: {
      type: String,
      default: "",
    },
    userToken: {
      type: String,
      required: true,
      default: "",
    },
    userRole: {
      type: String,
      default: "user",
    },
    userOwnedQuizes: {
      type: [String],
      required: false,
      default: [],
    },
    userAttemptedQuizes: {
      type: [String],
      required: false,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
