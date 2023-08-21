const connection = require('../../../model/database_connection')

/////////////////POST DATA///////////////////

const addBankDetails = async(req,res,)=>{
  let sid = req.query.retailer_id;
  let data = req.body;
  let sqlquery=`INSERT INTO retailer_banking set? where retailer_id=?`;
 
  await connection.query(sqlquery,[data,sid],function(error,result){
    if(error){
      console.log(error)
      //res.status(200).json({error:error})
    }
    else{
      // console.log(result)
      res.send("Banking Deatils successfully Added")
    }
  })
}

/////////////////////GET DATA ==> post////////////////

const bankingdetails = async(req,res)=>{
  let sid = req.query.retailer_id;
  let sqlquery=' select * from retailer_banking where retailer_id=?';
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

const bankingupdate = async(req,res)=>{
  let pid = req.query.retailer_id;
  let data2 = req.body;
  let sqlquery=`UPDATE retailer_banking SET=? WHERE retailer_id=?`;
  await connection.query(sqlquery,[data2,sid,pid],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
      res.send("banking details successfully changed !!")
    }
  })
}

module.exports = {addBankDetails,bankingdetails,bankingupdate};