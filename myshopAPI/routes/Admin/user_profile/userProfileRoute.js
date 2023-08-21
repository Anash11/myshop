const express = require('express');
const userProfile = express.Router();

const {changephoto,userprofile, updateprofile} = require('../../../controller/controller_Admin/User_Profile/userProfile')

userProfile.patch('/changephoto',changephoto)
userProfile.get('/userprofile',userprofile)
userProfile.put('/updateprofile',updateprofile)

module.exports = userProfile;