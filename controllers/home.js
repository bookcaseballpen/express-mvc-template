const express = require('express')
const router = new express.Router()
router.get('/', function(req, res) {
  res.render('home/index', {title: "Home page"})
});
router.get('/home', function(req, res) {
  res.render('home/index', {title: "Home page"})
});

module.exports = router