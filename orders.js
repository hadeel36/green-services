var mongoose = require('mongoose');
var user = require('./user.js');
var service_provider = require('./service_provider');
var db =  require('./config.js');

var ordersSchema = new mongoose.Schema({
	
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: user
	},
	serviceProvider_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: service_provider
	},
	quantity: Number,
	
	address: String,

	total_price: Number,

	order_date: {
		type: Date,
		default: Date.now
	},

	deliverd: {
		type: Boolean,
		default: false
	}
});

var Order = db.model('Order' , ordersSchema);

module.exports = Order;

