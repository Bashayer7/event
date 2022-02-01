const express = require("express");
const eventRouter = require("./apis/events/routes");
const connectDB = require("./db/database");

const app = express();
app.use(express.json());
connectDB();
app.use("/api/event", eventRouter);
app.listen(8000, () => {
  console.log("the application is running localhost:8000");
});
