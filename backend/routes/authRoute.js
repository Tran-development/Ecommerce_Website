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
    getUserCart,
    // emptyCart,
    // applyCoupon,
    createOrder,
    // getOrders,
    // updateOrderStatus,
    // getAllOrders,
    // getOrderByUserId,
    removeProdFromCart,
    updateQuantityProdFromCart,
    getMyOrders,
    getMonthOrderIncome,
    getYearTotalOrder,
    getAllOrders,
    getSingleOrders
} = require("../controller/userCtrl")
const { authMiddleware, isAdmin, blockUser, unBlockUser } = require("../middlewares/authMiddleware")
const { checkout, paymentverification } = require("../controller/paymentCtrl")
const router = express.Router()


router.post('/register', createUser)
router.post('/forgot-password-token', forgotPassowrdToken)
router.put('/reset-password/:token', resetPassword)
router.post('/login', loginUserCtrl)
router.post('/admin-login', loginAdmin)
router.post('/cart', authMiddleware, userCart)
router.post('/order/checkout', authMiddleware, checkout)
router.post('/order/paymentverification', authMiddleware, paymentverification)
// router.post('/cart/applycoupon', authMiddleware, applyCoupon)
router.post('/cart/create-order', authMiddleware, createOrder)

router.get('/all-users', getAllUser)
router.get('/getmyorders', authMiddleware, getMyOrders)
router.get('/getallorders', authMiddleware, isAdmin, getAllOrders)
router.get('/getAOrder/:id', authMiddleware, isAdmin, getSingleOrders)
// router.post('/getorderbyuser/:id', authMiddleware, isAdmin, getOrderByUserId)
router.get('/wishlist', authMiddleware, getWishList)
router.get('/cart', authMiddleware, getUserCart)
router.get('/getmonthorderincome', authMiddleware, getMonthOrderIncome)
router.get('/getyearordercount', authMiddleware, getYearTotalOrder)
router.get('/:id', authMiddleware, isAdmin, getAUser)  

router.put('/password', authMiddleware, updatePassword)
router.put('/refresh', handleRefreshToken) 
router.put('/edit-user', authMiddleware, updateAUser)
router.put('/save-address', authMiddleware, saveAddress)
router.put('/logout', logout)
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.put('/unblock-user/:id', authMiddleware, isAdmin, unBlockUser)
// router.put('/order/update-order/:id', authMiddleware, isAdmin, updateOrderStatus)

// router.delete('/empty-cart', authMiddleware, emptyCart)
router.delete('/delete-product-cart/:cartItemId', authMiddleware, removeProdFromCart)
router.delete('/update-product-cart/:cartItemId/:newQuantity', authMiddleware, updateQuantityProdFromCart)
router.delete('/:id', deleteAUser)


module.exports = router