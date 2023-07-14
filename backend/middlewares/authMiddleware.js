const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")

const authMiddleware = asyncHandler(async (req, res, next) => {
    let token
    if (req?.headers?.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET)
                // console.log(decoded);
                const user = await User.findById(decoded?.id)
                req.user = user
                // console.log(req.user);
                next()
            }
        } catch (error) {
            throw new Error("Not Authorized token expired. Please login again !")
        }
    } else {
        throw new Error("There is no token attached to header")
    }
})

const isAdmin = asyncHandler(async (req, res, next) => {
    const { email } = req.user
    const adminUser = await User.findOne({ email })
    if (adminUser.role !== "admin") {
        throw new Error("You are not an admin")
    } else {
        next()
    }
})

const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const blockUser = await User.findByIdAndUpdate(
            id, 
            {
                isBlocked: true
            },
            {
                new: true,
            }
        )
        res.json(blockUser)
    } catch (error) {
        throw new Error(error)
    }
})

const unBlockUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const unblockUser = await User.findByIdAndUpdate(
            id, 
            {
                isBlocked: false
            },
            {
                new: true,
            }
        )
        res.json(unblockUser)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    authMiddleware,
    isAdmin,
    blockUser,
    unBlockUser
}
