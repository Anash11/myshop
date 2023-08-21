const connection = require('../../../model/database_connection')

/////////////////POST DATA///////////////////

const product = async(req,res,)=>{
  let id = req.query.retailer_id;
  let data = req.body;
  let sqlquery=`INSERT INTO product set? where retailer_id=?`;
 
  await connection.query(sqlquery,[data,id],function(error,result){
    if(error){
      console.log(error)
      //res.status(200).json({error:error})
    }
    else{
      // console.log(result)
      res.send("Product successfully Added")
    }
  })
}

/////////////////////GET DATA ==> post////////////////

const productAvailable = async(req,res)=>{
  let sid = req.query.retailer_id
  let sqlquery='SELECT COUNT(P_ID) AS NumberOfProducts FROM Product where retailer_id=?';
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

const products = async(req,res)=>{
  let sid = req.query.retailer_id;
  let sqlquery=' select * from product where retailer_id=?';
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

const productQuantity = async(req,res)=>{
  let sid = req.query.retailer_id;
  let pid = req.query.p_id;
  let data2 = req.body.available_qty;
  let sqlquery=`UPDATE product SET available_qty=? WHERE retailer_ID=? AND p_id=?`;
  await connection.query(sqlquery,[data2,sid,pid],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
      res.send("Product Quantity successfully changed !!")
    }
  })
}

const productUpdate = async(req,res)=>{
  let sid = req.query.retailer_id;
  let pid = req.query.p_id;
  let data2 = req.body;
  let sqlquery=`UPDATE product SET=? WHERE retailer_ID=? AND p_id=?`;
  await connection.query(sqlquery,[data2,sid,pid],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
      res.send("Product Updated successfully changed !!")
    }
  })
}

module.exports = {product,products,productQuantity,productAvailable,productUpdate};