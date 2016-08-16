var mongoose = require("mongoose");

var memberSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  school:{ type: String, required: true}

});

module.exports = mongoose.model('Member', memberSchema);