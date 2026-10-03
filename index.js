const express = require("express");
const app = express();
const indexRoutes = require("./routes/indexRoutes");
const productRoutes = require("./routes/productRoutes");
const testMiddleware = require("./middlewares/testmiddleware");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(testMiddleware);

app.use("/", indexRoutes);
app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
