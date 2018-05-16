const express = require('express')
const router = new express.Router()
router.get('/test', function(req, res) {
  res.render('test/index', {title: "Test page"})
});

module.exports = router