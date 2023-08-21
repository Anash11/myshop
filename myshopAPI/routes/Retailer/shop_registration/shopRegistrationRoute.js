const express = require('express');
const shop_registration = express.Router();

const { shopregistration,shops,shop,shopupdate,shopstatus,shopprofilepicture, shoppassword } = require('../../../controller/controller_Retailer/Shop_Registration/shopRegistration');

shop_registration.post('/shopregistration',shopregistration)
shop_registration.get('/shops',shops)
shop_registration.get('/shop',shop)
shop_registration.patch('/shopupdate',shopupdate)
shop_registration.patch('/shopstatus',shopstatus)
shop_registration.patch('/shopprofilepicture',shopprofilepicture)
shop_registration.patch('/shoppassword',shoppassword)

module.exports = shop_registration;