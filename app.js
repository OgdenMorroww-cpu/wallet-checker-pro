require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes/User_routes");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log("error", error);
});

database.once("connected", () => {
  console.log("DataBase Connected");
});

app.use(express.json());
app.use("/api", routes);

app.listen(5000, () => {
  console.log(`Server started on port: ${5000}`);
});
