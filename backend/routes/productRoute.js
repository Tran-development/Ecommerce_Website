const express = require("express")
const router = express.Router()
const {
    createProduct,
    getAProduct,
    getAllProduct,
    updateProduct,
    deleteProduct
} = require("../controller/productCtrl")
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware')

router.post('/', authMiddleware, isAdmin, createProduct)
router.get('/:id', getAProduct)
router.put('/:id', authMiddleware, isAdmin, updateProduct)
router.delete('/:id', authMiddleware, isAdmin, deleteProduct)
router.get('/', getAllProduct)

module.exports = router