const mongoose = require("../config/mongoose");
const Product = require("../models/product");

class ProductController {
  constructor() {}
  async index(req, res) {
    const products = await Product.find({});
    res.render("products/index", { products: products });
  }

  async create(req, res) {
    // hien thi form tao san pham moi
    res.render("products/create");
  }

  async store(req, res) {
    // xu ly luu san pham moi vao database
    try {
      const { name, price, stock } = req.body;
      const product = new Product({ name, price, stock });
      await product.save();
      res.redirect("/products");
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  }

  async edit(req, res) {
    // hien thi form chinh sua san pham
    try {
      const { id } = req.params;
      const product = await Product.findById(id);

      res.render("products/edit", { product: product });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  }

  async update(req, res) {
    // xu ly cap nhat san pham trong database
    try {
      const { id } = req.params;
      const { name, price, stock } = req.body;
      await Product.findByIdAndUpdate(id, { name, price, stock });
      res.redirect("/products");
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  }

  async delete(req, res) {
    // xu ly xoa san pham trong database
    try {
      const { id } = req.params;
      await Product.findByIdAndDelete(id);
      res.redirect("/products");
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  }
}
module.exports = new ProductController();
