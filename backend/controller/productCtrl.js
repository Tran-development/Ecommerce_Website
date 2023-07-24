const Product = require("../models/productModel")
const asyncHandler = require("express-async-handler")
const slugify = require("slugify")
const User = require("../models/userModel")
const { cloudinaryUploadImg, cloudinaryDeleteImg } = require("../utils/cloudinary")
const validateMongoDbId = require("../utils/validateMongodbId")
const fs = require('fs')

const createProduct = asyncHandler(async (req, res) => {
    if (req.body.title) {
        req.body.slug = slugify(req.body.title)
    }
    try {
        const newProduct = await Product.create(req.body)
        res.json(newProduct)
    } catch (error) {
        throw new Error(error)
    }
})

// update product
const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true
        })
        res.json(updateProduct)
    } catch (error) {
        throw new Error(error)
    }
})

// delete product
const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const deleteProduct = await Product.findByIdAndDelete(id)
        res.json(deleteProduct)
    } catch (error) {
        throw new Error(error)
    }
})

// get a product 
const getAProduct = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const getAProduct = await Product.findById(id)
        res.json(getAProduct)
    } catch (error) {
        throw new Error(error)
    }
})

// get all product 
const getAllProduct = asyncHandler(async (req, res) => {
    // console.log(req.query);
    try {
        // filtering product
        const queryObj = { ...req.query }
        const excludeFields = ["page", "sort", "limit", "fields"]
        excludeFields.forEach((el) => delete queryObj[el])

        // console.log(queryObj, req.query);

        let queryStr = JSON.stringify(queryObj)
        const regex = /\b(gte|gt|lte|lt)\b/g
        queryStr = queryStr.replace(regex, (match) => `$${match}`)

        let query = Product.find(JSON.parse(queryStr))

        // sorting product
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ")
            query = query.sort(sortBy)
        } else {
            query = query.sort("-createdAt")
        }

        // limitting the fields
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ")
            query = query.select(fields)
        } else {
            query = query.select("-__v")
        }

        // pagination
        const page = req.query.page
        const limit = req.query.limit
        const skip = (page - 1) * limit
        query = query.skip(skip).limit(limit)
        if (req.query.page) {
            const productCount = await Product.countDocuments()
            if (skip >= productCount) throw new Error("This Page does not exists")
        }
        // console.log(page, limit, skip);
        const product = await query
        res.json(product)

    } catch (error) {
        throw new Error(error)
    }
})

const addToWishList = asyncHandler(async (req, res) => {
    const { _id } = req.user
    const { prodId } = req.body
    try {
        const user = await User.findById(_id)
        const alreadyAdded = user.wishlist.find((id) => id.toString() === prodId)
        if (alreadyAdded) {
            let user = await User.findByIdAndUpdate(
                _id,
                {
                    $pull: { wishlist: prodId },
                },
                { new: true }
            )
            res.json(user)
        } else {
            let user = await User.findByIdAndUpdate(
                _id,
                {
                    $push: { wishlist: prodId }
                },
                { new: true }
            )
            res.json(user)
        }
    } catch (error) {
        throw new Error(error)
    }
})

const rating = asyncHandler(async (req, res) => {
    const { _id } = req.user
    const { star, prodId, comment } = req.body
    try {
        const product = await Product.findById(prodId)
        let alreadyRated = product.ratings.find(
            (userId) => userId.postedby.toString() === _id.toString()
        )
        if (alreadyRated) {
            const updateRating = await Product.updateOne(
                {
                    ratings: { $elemMatch: alreadyRated },
                },
                {
                    $set: { "ratings.$.star": star, "ratings.$.comment": comment },
                },
                {
                    new: true
                }
            )
        } else {
            const rateProduct = await Product.findByIdAndUpdate(
                prodId,
                {
                    $push: {
                        ratings: {
                            star: star,
                            comment: comment,
                            postedby: _id
                        },
                    },
                },
                {
                    new: true
                }
            )
        }
        // calculates the total number of rating stars
        const getallratings = await Product.findById(prodId);
        let totalRating = getallratings.ratings.length;
        let ratingsum = getallratings.ratings
            .map((item) => item.star)
            .reduce((prev, curr) => prev + curr, 0);
        let actualRating = Math.round(ratingsum / totalRating);
        let finalproduct = await Product.findByIdAndUpdate(
            prodId,
            {
                totalrating: actualRating,
            },
            { new: true }
        );
        res.json(finalproduct);
    } catch (error) {
        throw new Error(error);
    }
});

const uploadImgs = asyncHandler(async (req, res) => {

    try {

        const uploader = (path) => cloudinaryUploadImg(path, "images")
        const urls = []
        const files = req.files
        for (const file of files) {
            const { path } = file
            const newpath = await uploader(path)
            // console.log(newpath);
            urls.push(newpath)
            fs.unlinkSync(path)
        }
        const images = urls.map((file) => {
            return file
        })
        res.json(images)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteImgs = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const deletedImg = cloudinaryDeleteImg(id, "images")
        res.json({ message: "Deleted" })

    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createProduct,
    getAProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    addToWishList,
    rating,
    uploadImgs,
    deleteImgs
}