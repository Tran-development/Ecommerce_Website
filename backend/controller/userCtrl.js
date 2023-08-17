const User = require("../models/userModel")
const Product = require("../models/productModel")
const Cart = require("../models/cardModel")
const Coupon = require("../models/couponModel")
const Order = require("../models/orderModel")
const uniqid = require('uniqid')

const { generateToken } = require("../config/jwtToken")
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require("../utils/validateMongodbId")
const { generateRefreshToken } = require("../config/refreshToken")
const jwt = require("jsonwebtoken")
const { trusted } = require("mongoose")
const { sendEmail } = require("./emailCtrl")
const crypto = require('crypto')
const { log } = require("console")

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

// login a user
const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // console.log("email, passowrd : ", email, password);
    // check if user exists or not
    const findUser = await User.findOne({ email })
    if (findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findUser?._id)
        const updateUser = await User.findByIdAndUpdate(
            findUser.id,
            {
                refreshToken: refreshToken,
            },
            {
                new: true
            }
        )

        const token = generateToken(findUser?.id)

        // res.cookie("refreshToken", refreshToken, {
        //     httpOnly: true,
        //     maxAge: 72 * 60 * 60 * 1000,
        // })
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: token,
            // refreshToken: refreshToken
        })
    } else {
        throw new Error("Invalid Login Account")
    }
})

// admin login 
const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // console.log("email, passowrd : ", email, password);
    // check if user exists or not
    const findAdmin = await User.findOne({ email })
    if (findAdmin.role !== "admin") throw new Error("Not Authorised")
    if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findAdmin?._id)
        const updateUser = await User.findByIdAndUpdate(
            findAdmin.id,
            {
                refreshToken: refreshToken,
            },
            {
                new: true
            }
        )

        const token = generateToken(findAdmin?.id)

        // res.cookie("refreshToken", refreshToken, {
        //     httpOnly: true,
        //     maxAge: 72 * 60 * 60 * 1000,
        // })
        res.json({
            _id: findAdmin?._id,
            firstname: findAdmin?.firstname,
            lastname: findAdmin?.lastname,
            email: findAdmin?.email,
            mobile: findAdmin?.mobile,
            token: token,
            // refreshToken: refreshToken
        })
    } else {
        throw new Error("Invalid Login Account")
    }
})

// save user address
const saveAddress = asyncHandler(async (req, res) => {
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
        const updateAUser = await User.findByIdAndUpdate(_id,
            {
                address: req?.body?.address
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
    validateMongoDbId(id)
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
    validateMongoDbId(id)
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
    validateMongoDbId(_id)
    try {
        const updateAUser = await User.findByIdAndUpdate(_id, {
            firstname: req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.íy?.mobile,
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

// handle refresh token
const handleRefreshToken = asyncHandler(async (req, res) => {
    const authorizationHeader = req.headers.authorization;
    const accessToken = authorizationHeader?.split(" ")[1];

    if (!accessToken) throw new Error("No Access Token in Authorization Header");
    jwt.verify(accessToken, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) throw new Error("Invalid Access Token");
        const user = await User.findById(decoded.id);
        if (!user) throw new Error("User not found");

        const refreshToken = user.refreshToken;

        jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
            if (err || user.id !== decoded.id) {
                throw new Error("There is something wrong with refresh token");
            }
            const newAccessToken = generateToken(user?._id);
            res.json({ accessToken: newAccessToken });
        });
    });
});


// logout 
const logout = asyncHandler(async (req, res) => {
    const authorizationHeader = req.headers.authorization;
    const refreshToken = authorizationHeader?.split(" ")[1];
    // console.log(refreshToken);
    if (!refreshToken) throw new Error("No Refresh Token in Authorization Header");
    const user = await User.findOne({ refreshToken });
    if (!user) {
        return res.sendStatus(204);
    }
    await User.findOneAndUpdate({ _id: user._id }, { refreshToken: "" });
    res.sendStatus(204);
});


const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { password } = req.body;
    validateMongoDbId(_id);
    const user = await User.findById(_id);
    if (password) {
        user.password = password;
        const updatedPassword = await user.save();
        res.json(updatedPassword);
    } else {
        res.json(user);
    }
});


const forgotPassowrdToken = asyncHandler(async (req, res) => {
    const { email } = req.body
    const user = await User.findOne({ email })
    if (!user) throw new Error("User not found with this email")
    try {
        const token = await user.createPasswordResetToken()
        await user.save()
        const resetURL = `Hi. Please follow this link to reset your password.
        This link is valid still 10 minutes from now. <a href='localhost:5000/api/user/reset-password/${token}'>Click here !</a>`

        const data = {
            to: email,
            text: "Alo User",
            subject: "Forgot Password Link",
            htm: resetURL
        }
        sendEmail(data)
        res.json(token)

    } catch (error) {
        throw new Error(error)
    }
})

const resetPassword = asyncHandler(async (req, res) => {
    const { password } = req.body
    const { token } = req.params
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex")
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() }
    })
    if (!user) throw new Error("Token Expired. Please try again later.")
    user.password = password
    user.passwordResetToken = undefined
    user.passwordResetExpires = undefined
    await user.save()
    res.json(user)
})

const getWishList = asyncHandler(async (req, res) => {
    const { _id } = req.user
    try {
        const findUser = await User.findById(_id).populate('wishlist')
        res.json(findUser)
    } catch (error) {
        throw new Error(error)
    }
})

const userCart = asyncHandler(async (req, res) => {
    const { productId, color, quantity, price } = req.body;
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {

        let newCart = await new Cart({
            userId: _id,
            productId,
            color,
            price,
            quantity
        }).save();
        res.json(newCart);
    } catch (error) {
        throw new Error(error);
    }
});


const getUserCart = asyncHandler(async (req, res) => {
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
        const cart = await Cart.find({ userId: _id }).populate("productId").populate("color")
        res.json(cart)
    } catch (error) {
        throw new Error(error)
    }
})

const removeProdFromCart = asyncHandler(async (req, res) => {
    const { _id } = req.user
    const { cartItemId } = req.params
    validateMongoDbId(_id)
    try {
        const deleteProd = await Cart.deleteOne({ userId: _id, _id: cartItemId })
        res.json(deleteProd)
    } catch (error) {
        throw new Error(error)
    }
})



const updateQuantityProdFromCart = asyncHandler(async (req, res) => {
    const { _id } = req.user
    const { cartItemId, newQuantity } = req.params
    validateMongoDbId(_id)
    try {
        const cartItem = await Cart.findOne({ userId: _id, _id: cartItemId })
        cartItem.quantity = newQuantity
        cartItem.save()
        res.json(cartItem)
    } catch (error) {
        throw new Error(error)
    }
})

const createOrder = asyncHandler(async (req, res, next) => {
    const { shippingInfor, orderItems, totalPrice, totalPriceAfterDiscount, paymentInfor } = req.body;
    const { _id } = req.user;

    try {
        const order = await Order.create({
            shippingInfor,
            orderItems,
            totalPrice,
            totalPriceAfterDiscount,
            paymentInfor,
            user: _id
        });

        res.json({
            order,
            success: true
        });
    } catch (error) {
        next(error); // Chuyển lỗi đến middleware xử lý lỗi
    }
});

const getMyOrders = asyncHandler(async (req, res) => {
    const { _id } = req.user
    try {
        const orders = await Order.find({ user: _id })
        .populate("user")
        .populate("orderItems.product")
        .populate("orderItems.color")
        res.json({
            orders
        })
    } catch (error) {
        throw new Error(error)
    }
})

// const emptyCart = asyncHandler(async (req, res) => {
//     const { _id } = req.user
//     validateMongoDbId(_id)
//     try {
//         const user = await User.findOne({ _id })
//         const cart = await Cart.findOneAndRemove({ orderby: user._id })
//         res.json(cart)
//     } catch (error) {
//         throw new Error(error)
//     }
// })

// const applyCoupon = asyncHandler(async (req, res) => {
//     const { coupon } = req.body
//     const { _id } = req.user
//     validateMongoDbId(_id)
//     const validCoupon = await Coupon.findOne({ name: coupon })
//     if (validCoupon === null) {
//         throw new Error(error)
//     }
//     const user = await User.findOne({ _id })
//     let { cartTotal } = await Cart.findOne({
//         orderby: user._id,
//     }).populate("products.product")
//     let totalAfterDiscount = (cartTotal - (cartTotal * validCoupon.discount) / 100).toFixed(2)
//     await Cart.findOneAndUpdate(
//         { orderby: user._id },
//         { totalAfterDiscount },
//         { new: true }
//     )
//     res.json(totalAfterDiscount)
// })

// const createOrder = asyncHandler(async (req, res) => {
//     const { COD, couponApplied } = req.body;
//     const { _id } = req.user;
//     validateMongoDbId(_id);
//     try {
//         if (!COD) throw new Error("Create cash order failed");
//         const user = await User.findById(_id);
//         let userCart = await Cart.findOne({ orderby: user._id });
//         let finalAmout = 0;
//         if (couponApplied && userCart.totalAfterDiscount) {
//             finalAmout = userCart.totalAfterDiscount;
//         } else {
//             finalAmout = userCart.cartTotal;
//         }

//         let newOrder = await new Order({
//             products: userCart.products,
//             paymentIntent: {
//                 id: uniqid(),
//                 method: "COD",
//                 amount: finalAmout,
//                 status: "Cash on Delivery",
//                 created: Date.now(),
//                 currency: "usd",
//             },
//             orderby: user._id,
//             orderStatus: "Cash on Delivery",
//         }).save();
//         let update = userCart.products.map((item) => {
//             return {
//                 updateOne: {
//                     filter: { _id: item.product._id },
//                     update: { $inc: { quantity: - item.count, sold: + item.count } },
//                 },
//             };
//         });
//         const updated = await Product.bulkWrite(update, {});
//         res.json({ message: "success" });
//     } catch (error) {
//         throw new Error(error);
//     }
// });

// const getOrders = asyncHandler(async (req, res) => {
//     const { _id } = req.user;
//     validateMongoDbId(_id);
//     try {
//         const userorders = await Order.findOne({ orderby: _id })
//             .populate("products.product")
//             .populate("orderby")
//             .exec();
//         res.json(userorders);
//     } catch (error) {
//         throw new Error(error);
//     }
// });

//   const getAllOrders = asyncHandler(async (req, res) => {
//     try {
//       const alluserorders = await Order.find()
//         .populate("products.product")
//         .populate("orderby")
//         .exec();
//       res.json(alluserorders);
//     } catch (error) {
//       throw new Error(error);
//     }
//   });

//   const getOrderByUserId = asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     validateMongoDbId(id);
//     try {
//       const userorders = await Order.findOne({ orderby: id })
//         .populate("products.product")
//         .populate("orderby")
//         .exec();
//       res.json(userorders);
//     } catch (error) {
//       throw new Error(error);
//     }
//   });

// const updateOrderStatus = asyncHandler(async (req, res) => {
//     const { status } = req.body;
//     const { id } = req.params;
//     validateMongoDbId(id);
//     try {
//         const updateOrderStatus = await Order.findByIdAndUpdate(
//             id,
//             {
//                 orderStatus: status,
//                 paymentIntent: {
//                     status: status,
//                 },
//             },
//             { new: true }
//         );
//         res.json(updateOrderStatus);
//     } catch (error) {
//         throw new Error(error);
//     }
// });

module.exports = {
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
    getMyOrders,
    createOrder,
    // getAllOrders,
    removeProdFromCart,
    updateQuantityProdFromCart
}
