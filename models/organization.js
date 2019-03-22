var mongoose = require("mongoose");
var Schema = mongoose.Schema;

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

var organizations = mongoose.model("organizations", organizationSchema);

module.exports = organizations;
