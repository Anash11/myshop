const connection = require('../../../model/database_connection')

/////////////////////GET DATA////////////////

const userprofile = async(req,res)=>{
  let sqlquery='SELECT * FROM user_profile'
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

const updateprofile = async(req,res)=>{
  let id = req.query.id;
  let data2 = req.body.status;
  let sqlquery=`UPDATE user_profile SET=? WHERE ID=?`;
  await connection.query(sqlquery,[data2,id],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
      res.send("status changed!!")
    }
  })
}

////////////////////////UPDATE DATA with PATCH////////////

const changephoto = async(req,res)=>{
  let id = req.query.id;
  let data2 = req.body.profilephoto;
  let sqlquery=`UPDATE user_profile SET profilephoto=? WHERE ID=?`;
  await connection.query(sqlquery,[data2,id],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
      res.send("Your profile photo successfully changed !!")
    }
  })
}

module.exports = {changephoto,userprofile,updateprofile};