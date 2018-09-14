var mongoose = require('mongoose');
var user = mongoose.model('user', {
	// name: {
	// 	type: String,
	// 	required: true,
	// 	minlength: 1,
	// 	trim: true
	// },
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
		
	},
	password: {
		type: Number,
		default: null
	}
});

module.exports = {user};