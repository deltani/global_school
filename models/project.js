var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = require("./user").userSchema;

var projectSchema = new Schema({
  title: {
    type: String,
    required: True
  },
  description: {
    type: String,
    required: True
  },
  supervisor: [userSchema],
  status: {
    type: String,
    enum: ["available", "ongoing", "finished"],
    required: True
  },
  assignedUsers: [userSchema]
  // accessibility: {
  //   type: String,
  //   enum: ["public"]
  // }
  // feedback
  // references
  // target group
  //
});

var Project = mongoose.model("Project", projectSchema);

module.exports = { Project, projectSchema };
