const express = require('express');
const Product = require('../models/Product');
const verifyToken = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// other CRUD routes also protected...
module.exports = router;
