import User from "../models/user.js";

export const signin = async (req, res) => {
  // console.log(req.body);
  const { email, name, picture, token } = req.body;

  const oldUser = await User.findOne({ userEmail: email });

  try {
    if (oldUser) {
      // console.log("if");
      let result = await User.findOneAndUpdate(
        { userEmail: email },
        { $set: { userToken: token, userName: name, userImage: picture } },
        { new: true }
      );
      return res.status(200).json({ result });
    } else {
      const newUser = new User({
        userName: name,
        userEmail: email,
        userImage: picture,
        userToken: token,
      });
      const result = await newUser.save();
      res.status(200).json({ result });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
