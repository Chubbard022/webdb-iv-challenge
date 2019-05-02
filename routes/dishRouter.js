const knex = require("knex");
const router = require("express").Router();

const knexConfig = {
    client: "sqlite3",
    connection: {
        filename: "./data/lambda.sqlite3"
    },
    useNullAsDefault: true,
    debug: true
}

const db = knex(knexConfig);
//-----------------------------------------
//          GET LIST OF DISHES
//-----------------------------------------
router.get("/",(req,res)=>{
    db("dish")
        .then(response=>{
            console.log("+++++++++++",response)
                res.status(200).json(response)
        })
        .catch(err=>{
            console.log("ERRR::::::",err)
        })
})

//-----------------------------------------
//          POST TO DISHES
//-----------------------------------------
router.post("/",(req,res)=>{
    db("dish")
    .insert(req.body,"id")
    .then(response=>{
        db("dish")
            .where({id: id})
            .first()
            .then(response=>{
                console.log("+++++++++++",response)
                res.status(201).json(response)
            })
            .catch(err=>{
                console.log("ERRR::::::",err)
                res.status(500).json(err)
            })
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})
//-----------------------------------------
//          GET DISHES BY ID
//-----------------------------------------
router.get("/:id",(req,res)=>{

})
//-----------------------------------------
//          GET LIST OF RECIPES
//-----------------------------------------
router.get("/recipes",(req,res)=>{

})
//-----------------------------------------
//          POST TO RECIPES
//-----------------------------------------
router.post("/recipes",(req,res)=>{

})
module.exports = router;