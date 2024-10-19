var express = require('express');
var router = express.Router();

//카카오 페이지
router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName:'kakao/book.ejs' });
});

//도서정보 페이지
router.get('/book/info', function(req, res, next) {
  const info={title:req.query.title, thumbnail:req.query.thumbnail, isbn:req.query.isbn, price:req.query.price, authors:req.query.authors, publisher:req.query.publisher, contents:req.query.contents};
  res.render('index', { title: '도서정보', pageName:'kakao/info.ejs', info:info });
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