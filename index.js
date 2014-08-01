var express = require('express');
var app = express();
var fs = require('fs');
var buffer = new Buffer(16);

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

buffer = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(buffer.toString())
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
