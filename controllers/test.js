const express = require('express')
const router = new express.Router()
router.get('/test', function(req, res) {
  res.render('test/index', {title: "Test page"})
});
router.get('/test/:id', function(req, res) {
  // dynamic template
  res.render('test/'+  (req.params.id %2 ===0 ? "plural" : "single"), {title: "Test page"})
});

module.exports = router