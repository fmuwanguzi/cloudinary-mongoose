const cloudinary = require('cloudinary').v2


cloudinary.config({
    name: process.env.CLOUD_NAME,
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
});

module.exports = cloudinary;