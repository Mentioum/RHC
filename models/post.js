var Mongoose = require('mongoose');

exports.PostSchema = new Mongoose.Schema({
	title: {type: String, required: true},
	date: {type: Date, required: true},
	body: {type: String, requred: true}
});