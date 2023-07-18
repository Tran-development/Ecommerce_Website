const Product = require("../models/productModel")
const asyncHandler = require("express-async-handler")
const slugify = require("slugify")

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
        const queryObj = {...req.query}
        console.log(queryObj);
        // filtering product
        const getAllProducts = await Product.find({
            // brand: req.query.brand,
            category: req.query.brand
        })
        res.json(getAllProducts)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    createProduct,
    getAProduct,
    getAllProduct,
    updateProduct,
    deleteProduct
}