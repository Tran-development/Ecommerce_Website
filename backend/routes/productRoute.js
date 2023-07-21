const express = require("express")
const router = express.Router()
const {
    createProduct,
    getAProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    addToWishList, 
    rating,
    uploadImgs
} = require("../controller/productCtrl")
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware')
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImages")

router.post('/', authMiddleware, isAdmin, createProduct)
router.put(
    "/upload/:id", 
    authMiddleware, 
    isAdmin,
    uploadPhoto.array('images', 10),
    productImgResize,
    uploadImgs
    )
router.get('/:id', getAProduct)
router.put("/wishlist", authMiddleware, addToWishList)
router.put("/rating", authMiddleware, rating)


router.put('/:id', authMiddleware, isAdmin, updateProduct)
router.delete('/:id', authMiddleware, isAdmin, deleteProduct)
router.get('/', getAllProduct)

module.exports = router