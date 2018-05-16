const express = require('express')
const router = new express.Router()

router.get('/error/505', function(req, res) {
  res.render('error/505', {title: "Page no found."})
});

module.exports = router