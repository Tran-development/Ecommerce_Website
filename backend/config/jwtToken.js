const jwt = require('jsonwebtoken')

// user login with corresponding id 
const generateToken = (id) => {
    // infor need to save inn JWT
    // expiresIn: "1d" : require user need to login again after 1 days
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" })
}

module.exports = {
    generateToken
}