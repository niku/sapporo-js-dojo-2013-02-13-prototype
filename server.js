var express = require('express');

var app = express.createServer();

app.use(express.static(__dirname + '/javascripts'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view options', { layout: false });

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/pomodoro', function(req, res) {
  res.header('content-type', 'application/json');
  res.render('success');
});

app.listen(3000);
