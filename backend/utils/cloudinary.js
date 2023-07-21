const cloudinary = require("cloudinary")

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// upload img func
const cloudinaryUploadImg = async (fileToUploads) => {
    return new Promise((resolve) => {
        //  we can call fileToUploads is path of img
        cloudinary.uploader.upload(fileToUploads, (result) => {
            resolve(
                {
                    url: result.secure_url,
                },
                {
                    resource_type: "auto"
                }
            )
        })
    })
}

module.exports = {
    cloudinaryUploadImg
}