const express = require('express')
const router = new express.Router()
router.get('/users/signup', function(req, res) {
  res.render('users/signup')
});

router.get('/users/login', function(req, res) {
  res.render('users/login')
});

module.exports = router