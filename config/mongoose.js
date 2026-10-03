const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/demo");
mongoose.connect(
  "mongodb+srv://haoln2906_db_user:j4XYt2ViYpPqOWTF@cluster0.zyfkf7k.mongodb.net/myProjectDatabase?retryWrites=true&w=majority",
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = mongoose;
