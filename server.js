var express = require('express')
      ,path = require('path')
      ,server = express()
      ,favicon = require('serve-favicon')
      ,fs = require('fs');
 
server.set('port', process.env.PORT || 8080);
server.set('views', __dirname + '/views');
server.set('view engine', 'pug');
server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

/* optional middlewares
server.use(express.logger('dev'));
server.use(express.bodyParser());
server.use(express.methodOverride());
server.use(express.cookieParser('your secret here'));
server.use(express.session());
*/
server.use(express.static(path.join(__dirname, 'public')));
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
     server.use(require('./controllers/' + file))
  }
});
fs.readdirSync('./landing-pages/').forEach(function (file) {
     server.use(require('./landing-pages/' + file + '/index.js'))
});

server.use('*', (req, res) => res.redirect('/error/505'))

server.listen(server.get('port'), console.log('Express server listening on port ' + server.get('port')))