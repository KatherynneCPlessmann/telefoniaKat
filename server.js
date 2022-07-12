//Require modules
var express= require('express');
var bodyParser = require ('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var app = express ();
var port = process.env.PORT || 8082;

//use ejs and express layouts
app.set('view engine', 'ejs');
app.use(ejsLayouts);

//Recursos Estaticos laylouts
app.use(express.static('public'));

//use bbody Parser (lee los datos de http)
app.use(express.urlencoded({extended : true}));

// route our app
const router = require('./routes/routes');
app.use ('/', router);


// start the server
app.listen(port, function() {
    console.log('app started');
});