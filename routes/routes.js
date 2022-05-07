const express = require('express');
const UserModel = require('../models/user.js');
const ProductModel = require('../models/product.js');
var moment = require('moment');
var momentZone = require('moment-timezone');
var jwt = require('jsonwebtoken');
const router = express.Router()

module.exports = router;

//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

//Create a new User
router.post('/post', async (req, res) => {
    const data = new UserModel({
        name: req.body.name,
        age: req.body.age
     })

    try{
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
    }
   catch(error)
   {
   res.status(400).json({message: error.message})
   }
})

app.post('/login', async(req,res) => {
    try{
        const {username, password} = req.body;
        if(!(username && password)){
            res.status(400).send("All input is required")
        }
        const user = await AdminModel.findOne({ username });
        if(user && password==user.password){
            const token = jwt.sign(
                { user_id: user._id, username },
                "Alebief2000!transporteportilloHugo&William2010!",
              );
        
              // save user token
              user.token = token;
              const userUpdated = await AdminModel.updateOne({username:username},
                {
                    $set: {
                        token : token
                    }
                })
              // user
              res.status(200).json(user.token);
        }
        else{
            res.status(400).send("Invalid Credentials");
        }
        
    } catch (err) {
        console.log(err);
      }
})

//Create a new Product
router.post('/post', async (req, res) => {
    const data = new ProductModel({
        title: req.body.title,
        brand: req.body.brand,
        year: req.body.year,
        isOnSale: req.body.isOnSale,
        dateAdded: Date.now(),
        dateToRemove : req.body.dateToRemove,
        discount : req.body.discount,
        addedBy : req.body.user,
        addedById : req.body.id,
     })

    try{
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
    }
   catch(error)
   {
   res.status(400).json({message: error.message})
   }
})

router.get('/leonardo', (req,res) => {
    res.send('Hola Leonardo')
})
