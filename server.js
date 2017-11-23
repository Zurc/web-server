var express = require('express');
var app = express();
var PORT = 3000;
var middleware = require('./middleware');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication , function(req, res) {
  res.send('About Us.');
});

// tell express we want to expose an entire folder to the web server
app.use(express.static(__dirname + '/public'))

// the second argument gets called once the server started
app.listen(PORT, function() {
  console.log('Express server running at port ' + PORT + '...')
});
