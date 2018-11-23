var http = require('http');
var fs = require('fs');
var util = require('util');
var readFile = util.promisify(fs.readFile);

var app = http.createServer(function(req , res){
  res.writeHead(200, {'Content-Type':'text/plain'});
  getData().then(data => {
    res.write(data);
    res.end();
  })

});

app.listen(3000);


async function getData(callback) {
  console.log("we are here");
  return await readFile('./products.txt');
}
