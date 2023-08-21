const connection = require('../../../model/database_connection')

/////////////////POST DATA///////////////////

const shopregistration = async(req,res,)=>{
  let data = req.body;
  let sqlquery=`INSERT INTO retailer_registration set?`;
 
  await connection.query(sqlquery,[data],function(error,result){
    if(error){
      console.log(error)
      //res.status(200).json({error:error})
    }
    else{
      // console.log(result)
      res.send("Shop successfully registered")
    }
  })
}

/////////////////////GET DATA ==> post////////////////

const shops = async(req,res)=>{
  let sqlquery='SELECT * FROM retailer_registration'
  await connection.query(sqlquery,function(error,result){
    if(error){
      console.log(error)
      
    }
    else{
      // console.log(result)
      res.send(result)
    }
  })
}

const shop = async(req,res)=>{
  let sid = req.query.retailer_id;
  let sqlquery=' select * from retailer_registration where retailer_id=?';
  await connection.query(sqlquery,[sid],function(error,result){
    if(error){
      console.log(error)
      
    }
    else{
      // console.log(result)
      res.send(result)
    }
  })
}

////////////////////////UPDATE DATA with PATCH////////////

const shopupdate = async(req,res)=>{
  let sid = req.query.retailer_id;
  let data2 = req.body;
  let sqlquery=`UPDATE retailer_registration SET=? WHERE ID=?`;
  await connection.query(sqlquery,[data2,sid],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
      res.send("Your password successfully changed !!")
    }
  })
}

const shopstatus = async(req,res)=>{
  let sid = req.query.retailer_id;
  let data2 = req.body.status;
  let sqlquery=`UPDATE retailer_registration SET status=? WHERE ID=?`;
  await connection.query(sqlquery,[data2,sid],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
      res.send("Your password successfully changed !!")
    }
  })
}

const shopprofilepicture = async(req,res)=>{
  let sid = req.query.retailer_id;
  let data2 = req.body.profile_photo;
  let sqlquery=`UPDATE retailer_registration SET profile_photo=? WHERE ID=?`;
  await connection.query(sqlquery,[data2,sid],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
      res.send("Your password successfully changed !!")
    }
  })
}

const shoppassword = async(req,res)=>{
  let sid = req.query.retailer_id;
  let data2 = req.body.pasasword;
  let sqlquery=`UPDATE retailer_registration SET password=? WHERE ID=?`;
  await connection.query(sqlquery,[data2,sid],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
      res.send("Your password successfully changed !!")
    }
  })
}

module.exports = {shopregistration,shops,shop,shopupdate,shopstatus,shopprofilepicture,shoppassword};