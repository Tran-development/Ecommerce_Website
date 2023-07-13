
const { generateToken } = require("../config/jwtToken")
const User = require("../models/userModel")
const asyncHandler = require('express-async-handler')
// middleware asyncHandler func
const createUser = asyncHandler(
    async (req, res) => {
        const email = req.body.email
        const findUser = await User.findOne({ email: email })

        if (!findUser) {
            // Create a new user
            const newUser = await User.create(req.body)
            res.json(newUser)
        } else {
            // User has exists
            throw new Error("User already exists!")
        }
    }
)

const loginUserCtrl = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    // console.log("email, passowrd : ", email, password);
    // check if user exists or not
    const findUser = await User.findOne({ email })
    if (findUser && (await findUser.isPasswordMatched(password))) {
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id)
        })
    } else {
        throw new Error("Invalid Login Account")
    }
})


module.exports = {
    createUser,
    loginUserCtrl
}