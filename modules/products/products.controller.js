const Product = require('./products.model')

exports.getAllProducts = async (req,res) => {
    const product = await Product.find({})
    res.status(200).json({product})
}

exports.createProduct = async(req,res) => {
    const {name,description,quantity,price} = req.body

    const product = await Product.create({
        name,
        description,
        quantity,
        price,
    })

    res.status(201).json({product})
}