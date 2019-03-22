var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  title: {
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
  // feedback
  // references
  // target group
  //
});

var projects = mongoose.model("projects", projectSchema);

module.exports = projects;
