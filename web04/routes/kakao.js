var express = require('express');
var router = express.Router();

router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName:'kakao/book.ejs' });
});

//지역 검색 기능 추가
//req = request, res = respond
router.get('/local', function(req,res){
  res.render('index', { title: '지역검색', pageName:'kakao/local.ejs' });
});
//블로그 검색 기능 추가
router.get('/blog', function(req,res){
  res.render('index', { title: '블로그검색', pageName:'kakao/blog.ejs' });
});


module.exports = router;