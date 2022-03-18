var express = require('express');
var router = express.Router();
let list = require("../models/todo")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {list});
});

router.post("/todos", function(req, res){
  list.push({todo:req.body.todo, done:"false"})
  res.redirect('/')
})


router.get("/delete/:id", function(req, res){

  list.splice(req.params.id,1)
  console.log(list)
  res.redirect('/')
})



module.exports = router;
