const {shema,model, Schema} = require('mongoose')
const { stringify } = require('querystring')

const productSchema = new Schema({
    name: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    price: {
        type:Number,
        required:true,
        min:[0, 'Price cannot be less zero']
    },
    quantity: {
        type:Number,
        required:true,
        min:[0, 'Quantity cannot be less zero']
    }
})
module.exports = model('Product',productSchema)