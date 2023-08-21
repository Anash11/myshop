const connection = require('../../../model/database_connection')

/////////////////POST DATA///////////////////

const addsubcategory = async(req,res,)=>{
  let data = req.body;
  let sqlquery=`INSERT INTO sub_category set?`;
 
  await connection.query(sqlquery,[data],function(error,result){
    if(error){
      console.log(error)
      //res.status(200).json({error:error})
    }
    else{
      console.log(result)
      res.send("sub_category successfully added")
    }
  })
}

/////////////using multer//////////

const addSubCat = (req, res, next) => {
  const data=[req.query.subCategory_id,req.query.subCategory_name,req.file.location,req.query.category_id]
      // let data =[req.body.cat_id,req.body.category_name]
      let sql_query = `INSERT into sub_category(subCategory_id,subCategory_name,subCategory_image,category_id) values(?,?,?,?)`
      connection.query(sql_query,data,(err, result) => {
          if (err) {
              console.log(err);
          } else {
              res.send(result);
          }
      })
  };
/////////////////////GET DATA////////////////

const subcategorylist = async(req,res)=>{
  let sqlquery='SELECT * from sub_category'
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

const updatesubcategory = async(req,res)=>{
  let id = req.query.subcategory_id;
  let data2 = req.body;
  let sqlquery=`UPDATE sub_category SET ? WHERE subcategory_id=?`;
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

module.exports = {subcategorylist,updatesubcategory,addsubcategory,addSubCat};

