var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
  requireAuthentication: function(req, res, next) {
    console.log('Private route hit!');
    next(); 
  },
  logger: function(req, res, next) {
    console.log('Request '+ ' ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl );
    next();
  }
}
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication , function(req, res) {
  res.send('About Us page');
});

// tell express we want to expose an entire folder to the web server
app.use(express.static(__dirname + '/public'))

// the second argument gets called once the server started
app.listen(PORT, function() {
  console.log('Express server running at port ' + PORT + '...')
});
