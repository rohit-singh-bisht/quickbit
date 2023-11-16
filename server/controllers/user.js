const USERS = require("../models/user");
const bcrypt = require("bcrypt");

async function createUser(req, res) {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      return res.status(400).json({
        success: false,
        message: "Username, email & password are required.",
      });

    const foundData = await USERS.findOne({ username: username, email: email });
    console.log("foundData", foundData);
    if (foundData)
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const result = await USERS.create({
      username,
      email,
      password: hashedPassword,
    });

    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Error creating a user. Please try again.",
      });
    }

    return res
      .status(201)
      .json({ success: true, message: "User successfully registered." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const result = await USERS.findOne({ email, username });
    if (!result)
      res.status(401).json({ success: false, message: "User doesn't exist" });

    const passwordMatch = await bcrypt.compare(password, result.password);
    if (!email || !password || !passwordMatch)
      return res
        .status(400)
        .json({ success: false, message: "Email or password is incorrect" });

    res.status(200).json({ success: true, message: "Logged in successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

module.exports = {
  createUser,
  loginUser,
};
