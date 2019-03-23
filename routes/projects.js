var express = require("express");
var router = express.Router();

/* GET all projects */
router.get("/", function(req, res) {
  var db = req.db;
  var projectKeyword = req.body.projectKeyword; //?
  var projects = db.get("Project");
  projects.find({}, {}, function(e, docs) {
    res.render("project", {
      projects: docs
    });
  });
});

/* GET a specific project */
router.get("/:id", function(req, res) {
  var db = req.db;
  var projects = db.get("Project");
  projects.findByID(req.params.id, function(e, docs) {
    res.render("project", {
      project: docs
    });
  });
});

module.exports = router;
