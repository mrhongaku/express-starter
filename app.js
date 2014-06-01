var express = require("express");
var ejs = require("ejs");
var app = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('facts.db');


///////////////////////////////////////////////////////////////////////////////
// APP CONFIGURATION                                                         //
///////////////////////////////////////////////////////////////////////////////
//configure logging
app.use(express.logger());
//make files in static folder publicly accessible
app.use('/static', express.static(__dirname + '/static'));
//use ejs for html templates
app.engine('html', ejs.renderFile);


///////////////////////////////////////////////////////////////////////////////
// APP ROUTES                                                                //
///////////////////////////////////////////////////////////////////////////////
//default route
app.get('/', function(req, res) {
  res.render('index.html', { });
});

app.get('/test', function(req, res) {
  res.render('test.html', { });
});

app.get('/calc', function(req, res) {
  res.render('calc.html', { });
});

app.get('/stuff', function(req, res) {
  res.render('stuff.html', { });
});

app.get('/imgrr', function(req, res) {
  res.render('imgrr.html', {});
});

app.get('/canvas', function(req, res) {
  res.render('canvas.html', {});
});

app.get('/funcs', function(req, res) {
  res.render('funcs.html', {});
});

app.get('/ball', function(req, res) {
  res.render('ball.html', {});
});

app.get('/chain_reaction', function(req, res) {
  res.render('chain_reaction.html', {});
});

var allfacts = ['I love cheese', 'China is a big country', 'A young donkey is called a kid'];

app.get('/fact', function(req, res) {
  facts: allfacts
  var item = db.get('SELECT * FROM fact_table ORDER BY RANDOM()', function(err, item) {
  res.render('fact.html', {fact: item.fact_str});// render page here
});
    
});

app.get('/submit_fact', function(req, res) {
  var newFact = req.query['fact'];
  allfacts.push(newFact);
  res.redirect('/fact');
});

///////////////////////////////////////////////////////////////////////////////
// RUN CONFIGURATION                                                         //
///////////////////////////////////////////////////////////////////////////////
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Yo website is at " + port + " son!");
});
