/* Path of forever binary file: ./node_modules/forever/bin/forever */

/* set up express */
var express = require('express');
var app = express();

/* set up express-handlebars */
var handlebars = require('express-handlebars').create({defaultLayout: 'main-co2'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

/* set up body-parser */
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* set up MySQL using dbcon.js file  */
var mysql = require('./dbcon.js');

/* set up route to static files */
app.use(express.static('public'));

/* set port number based on command-line input */
app.set('port', process.argv[2]);

/* Create route for simple get request to render the home page. */
app.get('/', function renderHome(req, res) {
    /* IDEA FOR NEXT MEETING: 
     * Create string variable pageToRender, initialize to 'user-home'.
     * Change pageToRender to 'user-account' if user does not exist.
     * At end, render 'page-to-render.' */
    
    /* If the user does not exist in the database, redirect to user account page
     * so that they can finish signing up for their account. */
    /* mysql.pool.query("SELECT email FROM user_account_data WHERE email = ?", decodeURIComponent([req.query.uid]), function(err, rows, fields) {
        if (err) {
           next(err);
           return;
        }
        
        if (rows.length === 0) {
            res.render('user-account');
        }
    }); */
    
    /* If the user does exist in the database, render home page. */
    res.render('user-home');
});

/* Create route for get request for user account page. */
app.get('/user-account', function renderUserAccount(req, res) {
    res.render('user-account');
});

/* Listen on port and display message to indicate listening */
app.listen(app.get('port'), function(){
    console.log('Express started at http://flip3.engr.oregonstate.edu:' + app.get('port') + '; press ctrl-C to terminate.');
});