const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const path = require("path");

//middleware
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

//routes
app.use("/user", require("./routes/user"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/dashboard/todos", require("./routes/dashboard/todos"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

const PORT = process.env.PORT || process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});