const connection = require('../../../model/database_connection')

/////////////////POST DATA///////////////////

const addnewcategory = async(req,res,)=>{
  let data = req.body;
  let sqlquery=`INSERT INTO category set?`;
 
  await connection.query(sqlquery,[data],function(error,result){
    if(error){
      console.log(error)
      //res.status(200).json({error:error})
    }
    else{
      console.log(result)
      res.send("category successfully added")
    }
  })
}

/////////////using multer//////////
   
const addCat = (req, res, next) => {
  const data=[req.query.category_id,req.query.category_name,req.file.location,req.query.GST_no]
      // let data =[req.body.cat_id,req.body.category_name]
      let sql_query = `INSERT into category(category_id,category_name,category_image,GST_no) values(?,?,?,?)`
      connection.query(sql_query,data,(err, result) => {
          if (err) {
              console.log(err);
          } else {
              res.send(result);
              // res.send("Successfully Added")
          }
      })
  };
/////////////////////GET DATA////////////////

const categorylist = async(req,res)=>{
  let sqlquery='SELECT * from category'
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

const updatecategory = async(req,res)=>{
  let id = req.query.category_id;
  let data2 = req.body;
  let sqlquery=`UPDATE category SET ? WHERE category_id=?`;
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

module.exports = {addnewcategory,addCat,categorylist,updatecategory};