const jwt = require('jsonwebtoken')

// user login with corresponding id 
const generateToken = (id) => {
    // infor need to save inn JWT
    // expiresIn: "3d" : require user need to login again after 3 days
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" })
}

module.exports = {
    generateToken
}