require('dotenv').config();

// get dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var articlesRoutes = require('./server/routes/articles');
var PORT = process.env.PORT || 3000;
var DB_URI = process.env.DB_URI || 'localhost/sc-test';

// init app
var app = express();

// connect to db
mongoose.connect(DB_URI);

// set middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())

// routes
app.use('/articles', articlesRoutes);
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// lounch server
app.listen(PORT, function() {
    console.log('server is running on port ' + PORT);
});