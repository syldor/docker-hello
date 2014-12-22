var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hello from inside a container!');
});

app.listen(8080, function() {
	console.log('app listening to port 8080');
});
