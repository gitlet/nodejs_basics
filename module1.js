// console.log('Hi');
// var a = 1;
// console.log(a);


// var _ = require('underscore');
// var m2 = require('./module2');
// // console.log(m2);
// // m2();
// console.log(_);


// BUILDING A SERVER:

var http = require('http');

var server = http.createServer(function (request, response) {
  console.log('Got a request..');
  response.write('Hi there!');
  response.end();
});

server.listen(3000);
