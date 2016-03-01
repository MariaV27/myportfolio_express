var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;


app.use("../js", express.static("js"));
app.use("../css", express.static("css"));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/home.html');
});

app.get('/rps', function(req, res){
  res.sendFile(process.cwd() + '/views/repos.html');
});

app.get('/repo', function(req, res){
  res.sendFile(process.cwd() + '/views/mariavsportfolio.html');
});

app.listen(PORT, function(req, res){
  console.log("listening on port %s", PORT);
});