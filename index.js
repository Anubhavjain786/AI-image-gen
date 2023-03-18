const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

//Enable Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/openai", require("./routes/openaiRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
