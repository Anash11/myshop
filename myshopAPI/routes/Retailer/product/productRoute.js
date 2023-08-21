const express = require('express');
const productDescription = express.Router();

const { productDesc,productdescription,productsdescription } = require('../../../controller/controller_Retailer/Product_Description/productDescription');

product.post('/productdescription',productDesc)
product.get('/productdescription',productsdescription)
product.patch('/productdescription',productdescription)

module.exports = productDescription;