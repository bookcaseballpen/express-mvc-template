const express = require('express')
const path = require('path')
const router = new express.Router()
router.use('/sample/src', express.static(path.join(__dirname, 'src')))
router.get('/sample', function(req, res) {
  res.render(require.resolve('./index.pug'), {title: "Landing page"})
});


module.exports = router