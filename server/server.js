//server/server.js

var express = require('express');
var getData = require('./routes/getData.js');
// var login = require('./routes/login.js');
// var checkAuth = require('./routes/checkAuth.js');
var path = require('path');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../dist'));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));


// let options = {
// 	db: {native_parser: true},
// 	server: {poolSize: 5},
// 	// user:
// 	// pass: 	
// };
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://vietlinhco:Ankedalinhco1@ds127783.mlab.com:27783/users_test_app', options).then(
// 	() => {
// 		console.log("connect DB successfully")
// 	},
// 	err => {
// 		console.log(`Connection failed. Error: ${err}`)
// 	}
// )


// Deal with header error
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	if(req.method === 'OPTIONS'){
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
		return res.status(200).json({})
	}
	next()
})


app.get('/favicon.ico', (req, res) => res.status(204));
app.use('/', getData);
// app.use('/login', login);
// app.use('/checkauth', checkAuth);


module.exports=app;