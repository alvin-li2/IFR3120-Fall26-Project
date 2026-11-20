const { default: mongoose, Collection } = require("mongoose");

let productModel = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
},
{
    Collection:"products"
});
module.exports = mongoose.model('Product', productModel);