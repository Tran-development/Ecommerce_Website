const Contact = require("../models/contactModel")
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require("../utils/validateMongodbId")

const createContact = asyncHandler(async(req, res) => {
    try {
        const newContact = await Contact.create(req.body)
        res.json(newContact)
    } catch (error) {
        throw new Error(error)
    }
})

const updateContact = asyncHandler(async(req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const updateContact = await Contact.findByIdAndUpdate(id, req.body, { new: true})
        res.json(updateContact)
    } catch (error) {
        throw new Error(error)
    } 
})

const deleteContact = asyncHandler(async(req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const deleteContact = await Contact.findByIdAndDelete(id)
        res.json(deleteContact)
    } catch (error) {
        throw new Error(error)
    } 
})

const getContact = asyncHandler(async(req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const getContact = await Contact.findById(id)
        res.json(getContact)
    } catch (error) {
        throw new Error(error)
    } 
})

const getAllContact = asyncHandler(async(req, res) => {
    // const { id } = req.params
    // validateMongoDbId(id)
    try {
        const getCategories = await Contact.find()
        res.json(getCategories)
    } catch (error) {
        throw new Error(error)
    } 
})

module.exports = {
    createContact,
    updateContact,
    deleteContact,
    getContact,
    getAllContact
}
