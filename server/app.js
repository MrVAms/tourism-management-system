const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

const User = require("./model/userSchema");
app.use(express.json());

app.use(require("./router/auth"));
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`Hello world from server`);
});

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
