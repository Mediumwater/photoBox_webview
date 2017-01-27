var express = require('express');
var bodyParser = require('body-parser');
var Handlebars     = require('handlebars');
var HandlebarsIntl = require('handlebars-intl');
var exphbs = require('express-handlebars');
var path = require('path');
var handlebars = require('handlebars');
var index = require('./routes/index');

var app = express();

HandlebarsIntl.registerWith(Handlebars);

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({defaultLayout:'layout'}));

handlebars.registerHelper('ifFourth', function (index, options) {
  if((index+1)%4 == 0){
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

app.engine('handlebars', exphbs({defaultLayout:'layout'}));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

// Set static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function(){
	console.log('Server starts on port ' + app.get('port'));
});
