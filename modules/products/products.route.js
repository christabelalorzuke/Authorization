const router = require('express').Router
const {createProduct,getProduct,getAllProducts} = require("./products.controller")

const productsRouter = router()

productsRouter.route("/").get(getAllProducts).post(createProduct)

module.exports = productsRouter