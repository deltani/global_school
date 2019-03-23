var express = require("express");
var router = express.Router();

/* GET all projects */
router.get("/", function(req, res) {
  var projects = require("../models/project");
  projects.find({}, "title", function(e, docs) {
    console.log(docs);
    res.render("projects", {
      projects: docs
    });
  });
});

/* GET satisfied condition projects */
router.get("/:keyword", function(req, res) {
  var projects = require("../models/project");

  //new RegExp(projectKeyword, "i")
  projects.find({ description: req.params.keyword }, function(err, docs) {
    if (err) return console.log(err);
    res.render("projects", { projects: docs });
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
