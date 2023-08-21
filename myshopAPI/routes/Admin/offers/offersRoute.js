const express = require('express');
const offers = express.Router();

const { viewofferlist,createnewoffer,offerstatuschanged} = require('../../../controller/controller_Admin/Offers/offers')

offers.get('/viewofferlist',viewofferlist)
offers.put('/offerstatuschanged',offerstatuschanged)
offers.post('/createnewoffer',createnewoffer)

module.exports = offers;