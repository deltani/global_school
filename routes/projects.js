var express = require("express");
var router = express.Router();

/* GET all projects that contain the keyword */
router.get("/", function(req, res) {
  var projects = require("../models/project");
  var projectKeyword = req.query.keyword;

  if (projectKeyword) {
    projects.find(
      { description: { $regex: projectKeyword, $options: "i" } },
      "title",
      function(err, docs) {
        if (err) return console.log(err);
        res.render("projects", { projects: docs });
      }
    );
  } else {
    projects.find({}, "title", function(e, docs) {
      res.render("projects", {
        projects: docs
      });
    });
  }
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
