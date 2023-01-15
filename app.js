const express = require('express');
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

const app = express()

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(express.static("public"));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');

});



app.listen('3000', function(req,  res){
  console.log('Server started on port 3000.')
});


