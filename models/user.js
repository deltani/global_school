var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var projectSchema = require("./project").projectSchema;
var organizationSchema = require("./organization").organizationSchema;

var userSchema = new Schema({
  username: {
    type: String,
    required: True
  }, //validation needed
  registeredOn: {
    type: Date,
    required: True,
    default: Date.now
  },
  pwd: {
    type: String,
    required: True
  }, // encrypted
  phone: Number, //validation needed
  email: {
    type: String,
    required: True
  }, //validation needed
  degree: {
    // highest degree obtained
    type: String,
    enum: ["High School", "Bachelor", "Master", "PhD"]
  },
  firstName: String, //validation needed
  lastName: String, //validation needed
  ongoingProjects: [projectSchema],
  doneProjects: [projectSchema],
  organizations: [organizationSchema],
  interests: {
    type: String,
    required: True
  },
  lectures: {
    type: String,
    required: True
  },

});

var User = mongoose.model("User", userSchema);

module.exports = { User, userSchema };
