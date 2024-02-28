var express = require('express');
var path  = require('path');
var exphbs = require('express-handlebars');

var app = express();

app.use(express.json());
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}))
app.set('view engine', 'handlebars');


app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res){
    res.render('home');
})

app.get('/about', function(req, res){
    res.render('about');
})

app.get('/reviews', function(req, res){
    res.render('review');
})

app.get('/contact', function(req, res){
    res.render('contact');
})

app.get('/explore', function(req, res){
  res.render('explore');
})

app.listen(app.get('port'), function(){
    console.log('Server started on port '+app.get('port'))
})