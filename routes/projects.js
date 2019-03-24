var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  var projects = require("../models/project");

  if (req.query.id) {
    // get a specific project profile
    projects.findById(req.query.id, "title description _id", function(e, docs) {
      res.render("project", {
        project: docs.title
      });
    });
  } else {
    // get a project list
    projects.find(
      { description: { $regex: req.query.keyword, $options: "i" } },
      "title description _id",
      function(e, docs) {
        res.render("projects", {
          projects: docs
        });
      }
    );
    if (req.query.keyword === undefined || req.query.keyword === null) {
      res.redirect("projects");
    }
  }
});

/* GET a specific project */
router.get("/:id", function(req, res) {
  var db = req.db;
  var projects = db.get("Project");
  projects.findByID(req.params.id, "_id title description", function(e, docs) {
    res.render("project", {
      project: docs
    });
  });
});

module.exports = router;
