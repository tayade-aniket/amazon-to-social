const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Route to get all products    from the database
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message:    'Failed to fetch products',    error: error.message });
  }
});

module.exports = router;
