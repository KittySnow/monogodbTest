var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//shuaishuai add 页面
router.get("/add",function(req,res, next){
  if(!req.session.user){ 					//到达/home路径首先判断是否已经登录
    req.session.error = "请先登录"
    res.redirect("/login");				//未登录则重定向到 /login 路径
  }
  res.render("add",{title:'add'});         //已登录则渲染home页面
});

router.post('/doadd', function (req, res) {
  var shuaishuai = global.dbHandel.getModel('shuaishuai');
  shuaishuai.create({
    name: req.body.name,
    tel: req.body.tel,
    id: req.body.id,
    imgSrc: req.body.imgSrc,

    uId: req.session.user._id

  }, function (error, doc) {
    if (doc) {
      res.send(200);
    }else{
      res.send(404);
    }
  });
});


router.get('/chaxun', function (req, res) {
    if(req.session.user){
      var shuaishuai = global.dbHandel.getModel('shuaishuai');
      shuaishuai.find({}, function (error, docs) {
        res.render('chaxun',{shuaishuais:docs});
      });
    }else{
      req.session.error = "请先登录"
      res.redirect('/login');
    }
  });
router.get('/shanchu', function(req, res, next) {

  var shuaishuai = global.dbHandel.getModel('shuaishuai');
  shuaishuai.find({}, function (error, docs) {
    res.render('shanchu');

  });
});



//删除购物车商品
router.get("/delFromshuaishuai/:id", function(req, res) {
  console.log(111);
  //req.params.id 获取商品ID号
  var shuaishuai = global.dbHandel.getModel('shuaishuai');
  shuaishuai.remove({"_id":req.params.id},function(error,doc){
    //成功返回1  失败返回0
    if(doc > 0){
      res.redirect('/users/shanchu');
    }
  });
});
router.get('/edit', function(req, res, next) {

  var shuaishuai = global.dbHandel.getModel('shuaishuai');
  shuaishuai.find({}, function (error, docs) {
    res.render('edit',{shuaishuais:docs});

  });
});

router.post("/edit/:id",function(req,res){
  console.log(123456);
  var shuaishuai = global.dbHandel.getModel('shuaishuai');
  var condition = {_id:req.body.id},
      update = {name: req.body.name,tel:req.body.tel};

  shuaishuai.update(condition, update, function(error, docs){
    if(error){
      console.log(error);
    }else{
      console.log(6545);
      res.redirect('/users/edit');
    }

  });

});

router.get('/getTest4list', function(req, res, next) {

  var shuaishuai = global.dbHandel.getModel('shuaishuai');
  shuaishuai.find({}, function (error, docs) {
    console.log(1232435);
    //res.render('test4',{shuaishuais:docs});
    //res.json(JSON.stringify({data: docs, message: "success"}));
    //res.json(docs);
    res.json({docs: docs});
  });
});

router.get('/test4', function(req, res, next) {
  res.render('test4');
});
router.get('/test5', function(req, res, next) {
    res.render('test5');
});
router.get('/demo3', function(req, res, next) {
  res.render('demo3');
});
router.post('/getdemo3list', function(req, res, next) {

    var shuaishuai = global.dbHandel.getModel('shuaishuai');
    shuaishuai.find({}, function (error, docs) {
        console.log(1232435);
        //res.render('demo2',{shuaishuais:docs});
        //res.json(JSON.stringify({data: docs, message: "success"}));
        //res.json(docs);
        res.json({docs: docs});
    });
});

router.get('/liebiao', function(req, res, next) {
  res.render('liebiao');
});






module.exports = router;