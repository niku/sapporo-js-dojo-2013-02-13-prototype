var express = require('express');

var app = express.createServer();

app.use(express.logger('dev'));
app.use(express.static(__dirname + '/javascripts'));
app.use(express.bodyParser());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view options', { layout: false });

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/pomodoro', function(req, res) {
  var done = req.body.done;
  console.log(done);
  res.header('content-type', 'application/json');
  res.render('success');
});

app.listen(3000);
