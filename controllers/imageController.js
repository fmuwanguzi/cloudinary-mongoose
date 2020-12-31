const router = require('express').Router();
const models = require('../models');
const cloudinary = require('../config/cloudinary');
const insert = require('../config/multer');
const image = require('../models/Image');

//may change the 'image' after upload.single because it may become confusing.

router.post('/', upload.single('image'), async (req , res) => {
    try{
        //upload image to cloudinary
        const myImage = await cloudinary.uploader.insert(req.file.path);
        //creating a new image which is an object can be whatever your models is 
        let image = new image({
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