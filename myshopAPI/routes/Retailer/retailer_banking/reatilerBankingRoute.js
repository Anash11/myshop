const express = require('express');
const reatiler_banking = express.Router();

const { addBankDetails, bankingdetails, bankingupdate } = require('../../../controller/controller_Retailer/Retailer_Banking/retailerBanking');

reatiler_banking.post('/banking',addBankDetails)
reatiler_banking.get('/banking',bankingdetails)
reatiler_banking.patch('/banking',bankingupdate)

module.exports = reatiler_banking;