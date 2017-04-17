var express = require('express')

var app = express();

var webpack = require('loaders/webpack');
var system = require('loaders/system');
var require = require('loaders/require');

app.use('webpack', webpack);
app.use('system', system);
app.use('require', require);

app.listen(8080, function() {
    console.log('App is listening to port 8080);
}


module.exports = app;
