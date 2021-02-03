const router = require("express").Router();
const materialController = require("../controller/materialController");
console.log("coming here")
const cat_subCat = {
  "category":[
    {"name":"ACADEMIC","id":1},
    {"name":"UPSKILL","id":2},
    {"name":"PERSONAL_DEVELOPMENT","id":3}
    ] ,
  "subCategory":[
    {"name": "Account", "parentId":1},
    {"name": "Economics", "parentId":1},
    {"name": "Psycology", "parentId":1},
    {"name": "Mathematics", "parentId":1},
    {"name": "English", "parentId":1},
    {"name": "Sciencs", "parentId":1},
    {"name": "Law", "parentId":1},
    {"name": "Business", "parentId":1},
    {"name": "ComputerScince", "parentId":1},


    {"name": "Data Science", "parentId":2},
    {"name": "Digital MArketing", "parentId":2},
    {"name": "UI/UX", "parentId":2},
    {"name": "Web Development", "parentId":2},
    {"name": "Graphic Designing", "parentId":2},
    {"name": "Content Writing", "parentId":2},
    {"name": "Photography & Video", "parentId":2},
    {"name": "IT & Software", "parentId":2},
    {"name": "Data Science", "parentId":2},
    {"name": "Data Science", "parentId":2},

    
    {"name": "Public Speaking", "parentId":3},
    {"name": "Personal Brand Development", "parentId":3},
      ]
     
         
     
  
}


router.get('/category_subcategory', async (req, res, next) => {
  res.send(cat_subCat);
  }),

  router.get('/material-byCategory/:categoryType', materialController.getMaterialByCategory);
  router.get('/material-bySubCategory/:subcategoryType', materialController.getMaterialBySubCategory);
  router.get('/material-byTeacherId/:teacherId', materialController.getMaterialByTeacherId);

  console.log('object :>>for commit purppse')


  module.exports = router;
