var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var controller = require('./controller');

var app = express();

app.set('port', process.env.APP_PORT || 3000);

/**
 * 
 * Declare cors and urlencoded
 */
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());

/**
 * 
 * Routes api
 * URL/authorize
 * URL/search @param query @headers Authorization token
 */
app.get('/authorize', controller.authorize);
app.post('/search', controller.search);


app.listen(app.get('port'), () => {
    console.log(` ✔ Express server listening on port ${app.get('port')}`);
});