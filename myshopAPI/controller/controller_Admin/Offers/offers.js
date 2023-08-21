const connection = require('../../../model/database_connection')

/////////////////POST DATA///////////////////

const createnewoffer = async(req,res,)=>{
  let data = req.body;
  let sqlquery=`INSERT INTO offers set?`;
 
  await connection.query(sqlquery,[data],function(error,result){
    if(error){
      console.log(error)
      //res.status(200).json({error:error})
    }
    else{
      console.log(result)
      res.send("offer successfully added")
    }
  })
}

/////////////////////GET DATA////////////////

const viewofferlist = async(req,res)=>{
  let sqlquery='SELECT * from offers'
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

////////////////////////UPDATE DATA with PUT////////////

const offerstatuschanged = async(req,res)=>{
  let id = req.query.offer_code;
  let data2 = req.body;
  let sqlquery=`UPDATE offers SET status=? WHERE offer_code=?`;
  await connection.query(sqlquery,[data2,id],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
      res.send("status successfully changed!!")
    }
  })
}

module.exports = {viewofferlist,createnewoffer,offerstatuschanged};