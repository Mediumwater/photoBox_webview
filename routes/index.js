var express = require('express');
var router = express.Router();
var fs = require('fs');

//Get Homepage
router.get('/', function(req, res){
	var path="./public/img/photoBox/";
	fs.readdir(path, function(err, items) {
	    res.render('index', {pictures: items.reverse()});
	});
})

module.exports = router;