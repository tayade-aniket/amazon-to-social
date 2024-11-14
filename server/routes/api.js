const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const Product = require('../models/Product');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure multer storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'socialMediaImages',
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});
const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    console.log('Request body:', req.body); // Log incoming body data
    console.log('Uploaded file:', req.file); // Log uploaded file data

    const { content } = req.body;
    if (!content || content.trim() === '') {
      return res.status(400).json({ message: 'Content is required' });
    }

    const imageUrl = req.file ? req.file.path : '/placeholder.svg';
    console.log('Image URL:', imageUrl); // Log the image URL

    const newProduct = new Product({
      title: 'Generated Product from Content',
      description: content,
      price: 99.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      image: imageUrl,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error uploading product:', error); // Log the error
    res.status(500).json({ message: 'Error converting content', error: error.message });
  }
});

module.exports = router;




