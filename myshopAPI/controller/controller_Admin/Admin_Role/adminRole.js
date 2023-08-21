const connection = require('../../../model/database_connection')

/////////////////POST DATA///////////////////

const addrole = async(req,res,)=>{
  let data = req.body;
  let sqlquery=`INSERT INTO role set?`;
 
  await connection.query(sqlquery,[data],function(error,result){
    if(error){
      console.log(error)
      //res.status(200).json({error:error})
    }
    else{
      console.log(result)
      res.send("role successfully added")
    }
  })
}

/////////////get==> post

const viewroles = async(req,res)=>{
  let sqlquery='select * from role order by role_id'
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

// ////////////////////////UPDATE DATA with PUT////////////

const updaterole = async(req,res,)=>{
  let role_id = req.query.role_id
  let role = req.body.role_name;
  let sqlquery=`update role set role_name=? where role_id=?`;
 
  await connection.query(sqlquery,[role,role_id],function(error,result){
    if(error){
      console.log(error)
      //res.status(200).json({error:error})
    }
    else{
      console.log(result)
      res.send("role successfully updated")
    }
  })
}

module.exports = {addrole,updaterole,viewroles};