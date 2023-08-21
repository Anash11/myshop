const connection = require('../../../model/database_connection')
const bcrypt = require('bcrypt')
/////////////////POST DATA///////////////////

const userregister = async(req,res,)=>{
  let data = req.body;
  let sqlquery=`INSERT INTO users set?`;
  // var value = req.body.password

  // const salt = await bcrypt.genSalt(20)
  // value = await bcrypt.hash(value,salt)

  // var data={
  //   id:req.body.id,
  //   name:req.body.name,
  //   password:value
  // }


  await connection.query(sqlquery,[data],function(error,result){
    if(error){
      console.log(error)
      //res.status(200).json({error:error})
    }
    else{
      console.log(result)
      res.send("user successfully registered")
    }
  })
}

/////////////////////GET DATA////////////////

const userget = async(req,res)=>{
  let sqlquery='SELECT * FROM USERS'
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

const userlistfilter = async(req,res)=>{
  let id = req.query.id;
  let name = req.query.name;
  let status = req.query.status;
  let sqlquery='select * from users where id=? or name=? or status=? '
  await connection.query(sqlquery,[id,name,status],function(error,result){
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

const usermodify = async(req,res)=>{
  let id = req.query.id;
  let data2 = req.body;
  let sqlquery=`UPDATE users SET ? WHERE ID=?`;
  await connection.query(sqlquery,[data2,id],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
      res.send("changes successfully applied!!")
    }
  })
}

const userstatusupdate = async(req,res)=>{
  let id = req.query.id;
  let data2 = req.query.status;
  let sqlquery=`UPDATE users SET status=? WHERE ID=?`;
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

const userpassword = async(req,res)=>{
  let id = req.query.id;
  let data2 = req.body.password;
  let sqlquery=`UPDATE users SET password=? WHERE ID=?`;
  await connection.query(sqlquery,[data2,id],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
      res.send("Your password successfully changed !!")
    }
  })
}

const username = async(req,res)=>{
  let id = req.query.id;
  let data2 = req.body.name;
  let sqlquery=`UPDATE users SET name=? WHERE ID=?`;
  await connection.query(sqlquery,[data2,id],function(error,result){
    if(error){
      console.log(error)
    }
    else{
      console.log(result)
      res.send("Your name successfully updated !!")
    }
  })
}

module.exports = {userregister,userget,usermodify,userstatusupdate,userpassword,userlistfilter,username};