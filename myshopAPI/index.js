const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
// swaggerDocument = require('./swaggeer.json');

const option = {
  definition: {
    openapi : '3.0.0' ,
    info : {
      title: 'MyShop Node.JS API for MySql',
      version: '1.0.0'
    },
    servers : [
      {
      url: 'http://localhost:5500/'
      }
    ]
  },
  apis: ['./routes/Admin/admin_user/admin_route.js']
}

// const swaggerSpec = swaggerJSDoc(options)
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/testing',swaggerUi.serve,swaggerUi.setup(swaggerJSDoc(option)))


//=============ADMIN==========================//

//for users table
const userRouter = require('./routes/Admin/admin_user/admin_route')
//const userRouter = express.Router()
app.use('/api/admin',userRouter)

//for userProfile table
const userProfile = require('./routes/Admin/user_profile/userProfileRoute')
app.use('/api/admin',userProfile)

//for category
const category = require('./routes/Admin/category/categoryRoute')
app.use('/api/admin',category)

//for sub sub_category
const subcategory = require('./routes/Admin/sub_category/subCategoryRoute')
app.use('/api/admin',subcategory)

//for sub offers
const offers = require('./routes/Admin/offers/offersRoute')
app.use('/api/admin',offers)

//=============RETAILERS==========================//

//for retailer or shop registration
const shop_registration = require('./routes/Retailer/shop_registration/shopRegistrationRoute')
app.use('/api/retailer',shop_registration)

//for products
const product = require('./routes/Retailer/shop_registration/shopRegistrationRoute')
app.use('/api/retailer',product)

//for Product Description
const productDescription = require('./routes/Retailer/shop_registration/shopRegistrationRoute')
app.use('/api/retailer',productDescription)

//for Reatiler Banking
const reatiler_banking = require('./routes/Retailer/shop_registration/shopRegistrationRoute')
app.use('/api/retailer',reatiler_banking)

const port=5500;
app.listen(port,()=>{
  console.log(`server is listening to port ${port}`)
})