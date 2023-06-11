const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const authRouter = require("./src/Modules/Auth/Routes/index");
const { SERVER_CONFIG, DATABASE_CONFIG } = require("./config");

const PORT = SERVER_CONFIG.port;
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(authRouter);
app.get("/", (req, res, next) => {
  console.log("hello world");
});
app.listen(PORT, async () => {
  console.log(`listening on ${PORT} for request`);
  mongoose.connect(DATABASE_CONFIG.url).then(() => {
    console.log(`connect to mongodb database : ${DATABASE_CONFIG.dbName}`);
  });
});
