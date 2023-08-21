const express = require('express');
const userRouter = express.Router();

const {usercreate,useradd, userupdate,userdelete} = require('../../../controller/controller_Admin/admin_user/admin_user');

const {userget, userregister, usermodify, userstatusupdate,
        userpassword ,userlistfilter ,username} = 
        require('../../../controller/controller_Admin/Admin_Users/adminUsers');

const { addrole, updaterole, viewroles } = require('../../../controller/controller_Admin/Admin_Role/adminRole');

const { assignRole ,getassignroles,getassignrolebyid,removerole} = require('../../../controller/controller_Admin/Assign_role/assignRole');

userRouter.post('/api/usercreate',usercreate)
userRouter.post('/api/useradd',useradd)
userRouter.patch('/api/userupdate',userupdate)
userRouter.delete('/api/userdelete',userdelete)

/**
 *  @swagger
 *  components:
 *        schemas:
 *              user:
 *                  type: object
 *                  properties:
 *                      id:
 *                              type: string
 *                      name:
 *                              type: string
 *                      password:
 *                              type: string
 *                      status:
 *                              type: string
 *                      createdon:
 *                              type: date
 *                
 *
 */

/**
 * @swagger
 * /api/admin/userget:
 *        get:
 *             summary: node js api
 *             discription: node js api
 *             responses:
 *                 200:
 *                    description: to test Get method
 *                    content:
 *                         application/json:
 *                                  schema:
 *                                      type: array
 *                                      items:
 *                                          $ref : '#components/schemas/display'
 */

/**
 * @swagger
 * /api/admin/registeruser:
 *      post:
 *          summary: node js api
 *          description: nodejs api
 *          requestBody:
 *                  required: true
 *                  content:
 *                     application/json:
 *                         schema:
 *                              $ref : '#component/schemas/display'
 *          responses:
 *               200:
 *                    description: added successfully
 */
//for admin_users
userRouter.post('/registeruser',userregister)
userRouter.get('/userget',userget)
userRouter.put('/usermodify',usermodify)
userRouter.put('/userstatusupdate',userstatusupdate)
userRouter.patch('/userpassword',userpassword)
userRouter.patch('/username',username)
userRouter.get('/userlistfilter',userlistfilter)

//for admin_role
userRouter.post('/addrole',addrole)
userRouter.put('/updaterole',updaterole)
userRouter.get('/viewroles',viewroles)

//for role_assign
userRouter.post('/assignroletouser',assignRole)
userRouter.get('/getassignroles',getassignroles)
userRouter.get('/getassignrolebyid',getassignrolebyid)
userRouter.delete('/removerole',removerole)

// const {usercreate} = require('../../controller/admin_user/admin_user')
// userRouter.put('/api/usercreate')

module.exports = userRouter;