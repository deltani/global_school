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
  projects: [ObjectID] //store project id
});

var Organizations = mongoose.model("Organization", organizationSchema);

module.exports = Organization;
