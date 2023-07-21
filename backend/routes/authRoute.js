// express is a server-side framework for Nodejs
const express = require("express")
const { 
    createUser,
    loginUserCtrl,
    getAllUser,
    getAUser,
    deleteAUser,
    updateAUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPassowrdToken,
    resetPassword,
    loginAdmin,
    getWishList,
    saveAddress,
    userCart,
    getUserCart
} = require("../controller/userCtrl")
const { authMiddleware, isAdmin, blockUser, unBlockUser } = require("../middlewares/authMiddleware")
const router = express.Router()


router.post('/register', createUser)
router.post('/forgot-password-token', forgotPassowrdToken)
router.put('reset-password/:id', resetPassword)
router.post('/login', loginUserCtrl)
router.post('/admin-login', loginAdmin)
router.post('/cart', authMiddleware, userCart)

router.get('/all-users', getAllUser)
router.get('/wishlist', authMiddleware, getWishList)
router.get('/cart', authMiddleware, getUserCart)

router.get('/:id', authMiddleware, isAdmin, getAUser) 
router.put('/password', authMiddleware, updatePassword)
router.put('/refresh', handleRefreshToken)
router.put('/edit-user', authMiddleware, updateAUser)
router.put('/save-address', authMiddleware, saveAddress)
router.put('/logout', logout)
router.delete('/:id', deleteAUser)

router.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.put('/unblock-user/:id', authMiddleware, isAdmin, unBlockUser)

module.exports = router