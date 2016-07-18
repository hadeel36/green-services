var mongoose = require('mongoose');
var db =  require('./config.js');


var usersSchema = new mongoose.Schema({

    username: {
	    type: String,
	    required: true,
	    index: {
	    	unique: true
	    }
    },
    password: {
	    type: String,
	    required: true
	},
	phoneNumber: Number,
	fullName: String,
	address: String
});


var User = db.model('User' , usersSchema);

module.exports = User;


