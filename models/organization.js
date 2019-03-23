var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var organizationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  homepage: String, //validation needed
  logo: { type: Buffer, contentType: String },
  projects: [Number] //store project id
});

var organizations = mongoose.model(
  "organizations",
  organizationSchema,
  "organizations"
);

module.exports = organizations;
