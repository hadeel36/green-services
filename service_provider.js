var mongoose = require('mongoose');
var db =  require('./config.js');


var service_providerSchema = new mongoose.Schema({
	service_provider_id: {
		type: Number,
		required: true,
		index: {
			unique: true
		}
	},
	user_name: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	password: {
		type: Number,
		required: true
	},
	service_provider_name: String,

	service_provider_phoneNumber: Number,

	address: String,

	Service_type: String,

	price: Number
});


var ServiceProvider = db.model('ServiceProvider' , service_providerSchema);

module.exports = ServiceProvider;