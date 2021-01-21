const router = require("express").Router();


const cat_subCat = {
  "category":[
   {"name":"ACADEMIC","id":1},
    {"name":"UPSKILL","id":1},
  {"name":"PERSONAL_DEVELOPMENT","id":1}
    ] ,
  "sub_category": 
    {
      "ACADEMIC": {
        "parentId":1,
        "subCategory":[
        "Account",
         "Economics", 
          "Psycology",
           "Mathematics",
            "English", 
             "Sciencs",
              "Law",
               "Business",
                "ComputerScince"
      ]
      },
       "UPSKILL":{ 
         "parentId":2,
         "subCategory":[
        "Data Science",
         "Digital MArketing", 
          "UI/UX",
           "Web Development",
            "Graphic Designing", 
             "Content Writing",
              "Photography & Video",
               "IT & Software"
      ]},  
      "PERSONAL_DEVELOPMENT": {
        "parentId":3,
          "subCategory":[
        "Public Speaking",
         "Personal Brand Development"
     ] }
    }
}


router.get('/category_subcategory', async (req, res, next) => {
  res.send(cat_subCat);
  }),

  module.exports = router;
