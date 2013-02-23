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

var doneList = [];
var cancelList = [];
app.post('/pomodoro', function(req, res) {
  var done = req.body.done;
  var cancel = req.body.cancel;
  if(done) {
    doneList.push(done);
  }
  if(cancel) {
    cancelList.push(cancel);
  }
  console.log(doneList);
  console.log(cancelList);
  res.json({
    done: doneList,
    cancel: cancelList
  });
});

app.listen(3000);
