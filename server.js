var http = require('http');
var path = require('path');

var express = require('express');
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));

console.log('Démarage ! PLease attend ta grand mère !')
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Tout est pret !", addr.address + ":" + addr.port);
});