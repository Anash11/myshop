const connection = require('../../../model/database_connection')

/////////////////POST DATA///////////////////

const productDesc = async(req,res,)=>{
  let pid = req.query.p_id;
  let data = req.body;
  let sqlquery=`INSERT INTO product_description set? where p_id=?`;
 
  await connection.query(sqlquery,[data,pid],function(error,result){
    if(error){
      console.log(error)
      //res.status(200).json({error:error})
    }
    else{
      // console.log(result)
      res.send("Product Description successfully Added")
    }
  })
}

/////////////////////GET DATA ==> post////////////////

const productsdescription = async(req,res)=>{
  let sid = req.query.p_id;
  let sqlquery=' select * from product_description where p_id=?';
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

const productdescription = async(req,res)=>{
  let pid = req.query.p_id;
  let data2 = req.body;
  let sqlquery=`UPDATE product_description SET=? WHERE p_id=?`;
  await connection.query(sqlquery,[data2,sid,pid],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
      res.send("Product Description successfully changed !!")
    }
  })
}

module.exports = {productDesc,productdescription,productsdescription};