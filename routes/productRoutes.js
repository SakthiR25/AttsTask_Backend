// const express = require('express');
// const router = express.Router();
// const auth = require('../middleware/authMiddleware');
// const upload = require('../middleware/uploadMiddleware');
// const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');

// router.post('/', auth, upload.single('image'), createProduct);
// router.get('/', auth, getProducts);
// router.put('/:id', auth, upload.single('image'), updateProduct);
// router.delete('/:id', auth, deleteProduct);

// module.exports = router;



const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');

// File upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Routes
router.post('/', upload.single('image'), productController.createProduct);
router.get('/', productController.getProducts);
router.put('/:id', upload.single('image'), productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;

