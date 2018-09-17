const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });


Todo.findOneAndRemove({}).then((todo) => {

});

Todo.findByIdAndRemove('5b9f0320d74be1d3fc9c3085').then((todo) => {
	console.log(todo);
});