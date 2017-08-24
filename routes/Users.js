var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao');


router.get('/add', function(req, res, next) {
    res.render('users/add');
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users/list-json');
});


router.post('/addUser', function(req, res, next) {
    userDao.create(req.body,function(error, doc) {
        console.log(doc);
        if (doc) {
            res.redirect('/users/');
        }else{
            res.json({msg:'出错了'});
        }
    });
});


router.get('/queryAll', function(req, res, next) {
    userDao.all(function(error, docs){
        console.log(docs);
        if (docs) {
            res.json(docs);
        }
    });
});

router.get('/edit', function(req, res, next) {
   /* console.log(req.params);
    console.log(req.query);//URL里面的
    console.log(req.body);
    console.log(req.params._id);*/
    res.render('users/edit', { user: req.query._id});
});

router.post('/doEdit', function(req, res, next) {
    userDao.updateById(req.body._id,req.body,function(error, doc) {
        console.log(doc);
        if (doc) {
            res.redirect('/users/');
        }else{
            res.json({msg:'出错了'});
        }
    });
});

router.get('/query', function(req, res, next) {
    userDao.findOne(req.body,function(error, doc) {
        if (doc) {
            res.json({code:200,msg:'成功'});
        }else{
            res.json({code:4000,msg:'出错了'});
        }
    });
});

router.post('/deleteUser', function(req, res, next) {
    console.log('111111',req);
    userDao.remove(req.body,function(error, doc) {
        console.log(doc);
        if (doc) {
            res.send(200);
        }else{
            res.send(404);
        }
    });
});

router.post('/updateUser', function(req, res, next) {
    userDao.update(req, res, next);
    res.redirect('/users/queryAll');
});

module.exports = router;
