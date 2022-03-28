const router = require("express").Router()
const verify = require("./verifyToken")
const CryptoJS = require("crypto-js")
const Product = require("../models/Product")

//CREATE
router.post("/", verify , async (req, res) => {
    if (req.user.isAdmin) {

        const newProduct = new Product(req.body)
        try {
            const savedProduct = await newProduct.save()
            res.status(200).json(savedProduct)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json('You are not allowed to create users!')
    }

})

//UPDATE
router.put("/:id", verify , async (req, res) => {
    if (req.user.isAdmin) {

        try {
            const updateProduct = await Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            res.status(200).json(updateProduct)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json('You are not allowed to update user!')
    }

})

//DELETE
router.delete("/:id", verify , async (req, res) => {
    if (req.user.isAdmin) {

        try {
            await Product.findByIdAndDelete(req.params.id)
            res.status(200).json('Product has been deleted...')
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('You are not allowed to update user!')
    }

})

//GET PRODUCT
router.get("/find/:id" , async (req, res) => {

    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET ALL PRODUCT
router.get("/", verify , async (req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
        let products

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1)
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                $in: [qCategory],
                },
            })
        } else {
            products = await Product.find()
        }

        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
    

})


module.exports = router