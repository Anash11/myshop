const connection = require('../../../model/database_connection')

/////////////////POST DATA///////////////////

const assignRole = async(req,res,)=>{
  let data = req.body;
  let sqlquery=`INSERT INTO role_assign set?`;
 
  await connection.query(sqlquery,[data],function(error,result){
    if(error){
      console.log(error)
      //res.status(200).json({error:error})
    }
    else{
      console.log(result)
      res.send("role assigned successfully registered")
    }
  })
}

/////////////get==> post

const getassignroles = async(req,res)=>{
  let sqlquery='select * from role_assign natural join users natural join role'
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

const getassignrolebyid = async(req,res)=>{
  let id = req.query.id;
  let sqlquery='select * from role_assign natural join role natural join users where id=?'
  await connection.query(sqlquery,[id],function(error,result){
    if(error){
      console.log(error)
      
    }
    else{
      // console.log(result)
      res.send(result)
    }
  })
}

////////////////////////DELETE DATA////////////

const removerole = async(req,res)=>{
  let id = req.query.id;
  let role_id = req.query.role_id;
  let sqlquery=`DELETE FROM role_assign WHERE id=? AND role_id=?`;
  await connection.query(sqlquery,[id,role_id],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
      res.send("Role Successfully Removed")
    }
  })
}

module.exports = {assignRole,getassignroles,getassignrolebyid,removerole};