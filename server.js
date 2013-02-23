var connect = require('connect');

var server = connect.createServer();

server.use(function (req, res, next) {
  if ('/' == req.url) {
    res.writeHead(200);
    res.end('Hello world.');
  } else {
    next();
  }
});

server.listen(3000);
