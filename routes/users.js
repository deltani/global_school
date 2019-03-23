var express = require("express");
var router = express.Router();

/* GET a user profile */
router.get("/:id", function(req, res, next) {
  var db = req.db;
  var projects = db.get("User");
  projects.findByID(req.params.id, function(e, docs) {
    res.render("user", {
      user: docs
    });
  });
});

module.exports = router;
