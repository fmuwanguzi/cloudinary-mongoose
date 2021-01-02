const router = require('express').Router();
const models = require('../models');
const cloudinary = require('../config/cloudinary');
const upload = require('../config/multer');
const Image = require('../models/Image');
require("dotenv").config();

//may change the 'image' after upload.single because it may become confusing.

router.post('/', upload.single('image'), async (req , res) => {
    //console.log(cloudinary);
    console.log(process.env.CLOUD_NAME);
    try{
        //upload image to cloudinary
        const myImage = await cloudinary.uploader.upload(req.file.path);
        //creating a new image which is an object can be whatever your models is 
        const image = new Image({
            name: req.body.name,
            description: myImage.secure_url,
            cloudinary_id: myImage.public_id, 
        });
        await image.save();
        res.json(image);
    }catch (error){
        console.log(error)
    }
});

module.exports = router; 









module.exports = router;