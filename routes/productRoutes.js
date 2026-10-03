const express = require("express");
const ProductController = require("../controllers/productController");

const router = express.Router();

router.get("/", ProductController.index);
router.get("/create", ProductController.create);
router.post("/create", ProductController.store);
router.get("/:id/edit", ProductController.edit);
router.post("/:id/edit", ProductController.update);
router.get("/:id/delete", ProductController.delete);

module.exports = router;
