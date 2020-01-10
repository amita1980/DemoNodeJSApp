var express =  require("express");
var router = express.Router();

router.get("/", function(req,res){
    console.log("Hello I am on the basics");
    res.render("index");
});
module.exports = router;