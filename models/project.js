var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = require("./user").userSchema;

var projectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  supervisor: [Number], //store userid
  status: {
    type: String,
    enum: ["available", "ongoing", "finished"],
    required: true
  },
  assignedUsers: [Number] //store userid
  // accessibility: {
  //   type: String,
  //   enum: ["public"]
  // }
  // feedback
  // references
  // target group
  //
});

var projects = mongoose.model("projects", projectSchema, "projects");

module.exports = projects;
