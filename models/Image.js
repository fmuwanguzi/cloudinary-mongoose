const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name:String,
    description: String,
    cloudinary_id: String
})

module.exports = mongoose.model('Image', imageSchema);