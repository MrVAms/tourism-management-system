const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`hello world from the server router.js`);
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "please fill  the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    }

    const user = new User({ name, email, phone, work, password, cpassword });

    await user.save();

    res.status(201).json({ message: "user registerd successfully" });
  } catch (err) {
    console.log(err);
  }
  require("../db/conn");
  const User = require("../model/userSchema");
});

//login route

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "please fill the data" });
    }

    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);

    if (!userLogin) {
      res.status(400).json({ error: "user error" });
    } else {
      res.json({ message: "user sign in succesfully" });
    }
  } catch (err) {
    console.log(err);
    console.log(err);
  }
});

module.exports = router;
