var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var projectSchema = require("./project").projectSchema;

var organizationSchema = new Schema({
  name: {
    type: String,
    required: True
  },
  address: String,
  homepage: String, //validation needed
  logo: { type: Buffer, contentType: String },
  projects: [projectSchema]
});

var Organizations = mongoose.model("Organization", organizationSchema);

module.exports = { Organization, organizationSchema };
