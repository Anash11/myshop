const connection = require('../../../model/database_connection')

////////////GET DATA/////////////////

const userget = async(req,res)=>{
  let sqlquery='SELECT * FROM admin_users'
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

/////////////////POST DATA///////////////////




const usercreate =   async(req,res,)=>{
  let data = req.body;
  let sqlquery=`INSERT INTO admin_user_login set?`;
 
  await connection.query(sqlquery,[data],function(error,result){
    if(error){
      console.log(error)
      //res.status(200).json({error:error})
    }
    else{
      console.log(result)
    }
  })
}


const useradd = async(req,res)=>{
  let data1 = req.body;
  let sqlquery=`INSERT INTO admin_users set?`;
 
  await connection.query(sqlquery ,[data1],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
    }
  })
}

////////////////////////UPDATE DATA////////////

const userupdate = async(req,res)=>{
  let uid = req.query.uid;
  let data2 = req.body.pincode;
  let sqlquery=`UPDATE admin_users SET pincode=? WHERE UID=?`;
  await connection.query(sqlquery,[data2,uid],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
    }
  })
}


////////////////////////DELETE DATA////////////

const userdelete = async(req,res)=>{
  let uid = req.query.uid;
  let sqlquery=`DELETE FROM admin_users WHERE UID=?`;
  await connection.query(sqlquery,[uid],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
    }
  })
}






module.exports = {userget,usercreate,useradd,userupdate,userdelete};