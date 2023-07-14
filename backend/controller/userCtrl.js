
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
    const { email, password } = req.body
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

// Get all users
const getAllUser = asyncHandler(async (req, res) => {
    try {
        const getAllUser = await User.find()
        res.json(getAllUser)
    } catch (error) {
        throw new Error(error)
    }
})

// get a sigle user 
const getAUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const getUser = await User.findById(id)
        res.json({
            getUser,
        })
    } catch (error) {
        throw new Error(error)
    }
})

// delete a user 
const deleteAUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const deleteAUser = await User.findByIdAndDelete(id)
        res.json({
            deleteAUser,
        })
    } catch (error) {
        throw new Error(error)
    }
})

// update a user 
const updateAUser = asyncHandler(async (req, res) => {
    // console.log(req.user);
    const { _id } = req.user
    try {
        const updateAUser = await User.findByIdAndUpdate(_id, {
            firstname: req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
        },
            {
                new: true
            }
        )
        res.json({
            updateAUser,
        })
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createUser,
    loginUserCtrl,
    getAllUser,
    getAUser,
    deleteAUser,
    updateAUser
}