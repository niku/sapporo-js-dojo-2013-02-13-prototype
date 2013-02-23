var express = require('express');

var app = express.createServer();

app.use(express.static(__dirname + '/javascripts'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view options', { layout: false });

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000);
