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
    resetPassword
} = require("../controller/userCtrl")
const { authMiddleware, isAdmin, blockUser, unBlockUser } = require("../middlewares/authMiddleware")
const router = express.Router()


router.post('/register', createUser)
router.post('/login', loginUserCtrl)
router.post('/forgot-password-token', forgotPassowrdToken)
router.put('reset-password/:id', resetPassword)

router.get('/all-users', getAllUser)
router.get('/:id', authMiddleware, isAdmin, getAUser) 

router.put('/password', authMiddleware, updatePassword)
router.put('/refresh', handleRefreshToken)
router.put('/edit-user', authMiddleware, updateAUser)
router.put('/logout', logout)
router.delete('/:id', deleteAUser)

router.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.put('/unblock-user/:id', authMiddleware, isAdmin, unBlockUser)

module.exports = router