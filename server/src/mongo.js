var mongoose = require('mongoose');

module.exports.connect = function() {
	mongoose.connect('mongodb://localhost:27017/gymslot');
	var db = mongoose.connection;
	db.on("error", console.error.bind(console, "Connection Failed"));
	db.once("open", function(callback){
	  console.log("Connection Succeeded");
	});
	return db;
}