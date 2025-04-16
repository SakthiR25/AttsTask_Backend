const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const { name, price, stock, description, category, manufactureDate } = req.body;
  const imageUrl = req.file ? req.file.filename : '';
  const product = new Product({ name, price, stock, description, category, manufactureDate, imageUrl });
  await product.save();
  res.json(product);
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.updateProduct = async (req, res) => {
  const update = req.body;
  if (req.file) update.imageUrl = req.file.filename;
  const product = await Product.findByIdAndUpdate(req.params.id, update, { new: true });
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
