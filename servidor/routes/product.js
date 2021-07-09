//Rotas para produto
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
// api produtos
router.post('/', productController.createProduct);
router.get('/', productController.listProducts);
router.get('/:id', productController.listProductById);
router.put('/:id', productController.updateProducts);
router.delete('/:id', productController.deleteProduct);

module.exports = router;