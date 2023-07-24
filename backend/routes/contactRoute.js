const express = require("express")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")
const { createContact, updateContact, deleteContact, getContact, getAllContact } = require("../controller/contactCtrl")
const router = express.Router()

router.post("/", createContact)
router.put("/:id", authMiddleware, isAdmin, updateContact)
router.delete("/:id", authMiddleware, isAdmin, deleteContact)
router.get("/:id", getContact)
router.get("/", getAllContact)

module.exports = router