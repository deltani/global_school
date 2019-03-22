var express = require("express");
var router = express.Router();

/* GET list of organizations */
router.get("/", function(req, res) {
  var db = req.db;
  var organizations = db.get("Organization");
  collection.find({}, {}, function(e, docs) {
    res.render("organizations", {
      organizations: docs
    });
  });
});

/* GET a specific organization */
router.get("/:id", function(req, res) {
  var db = req.db;
  var organizations = db.get("organizations");
  // collection.remove({ '_id' : userToDelete }, function(err) {
  //   res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  // });
  collection.findByID(req.params.id, function(e, docs) {
    res.render("organization", {
      organization: docs
    });
  });
});

module.exports = router;
