var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  _id: Number,
  username: {
    type: String,
    required: true
  }, //validation needed
  registeredOn: {
    type: Date,
    required: true,
    default: Date.now
  },
  pwd: {
    type: String,
    required: true
  }, // encrypted
  phone: Number, //validation needed
  email: {
    type: String,
    required: true
  }, //validation needed
  degree: {
    // highest degree obtained
    type: String,
    enum: ["High School", "Bachelor", "Master", "PhD"]
  },
  firstName: String, //validation needed
  lastName: String, //validation needed
  ongoingProjects: [Number], //project id
  doneProjects: [Number], //project id
  organizations: [Number], //organization id
  interests: {
    type: String,
    required: true
  },
  lectures: {
    type: String,
    required: true
  }
});

var users = mongoose.model("users", userSchema, "users");

module.exports = users;
