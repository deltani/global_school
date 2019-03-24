var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index");
});

router.get("/update", function(req, res, next) {
  var projects = require("../models/project");

  projects.findOne({ title: "Digital Ocean" }, "description", function(
    err,
    project
  ) {
    projects.update(project, {
      $push: {
        description:
          'Tools like Apple\'s "Screentime" tracking have become increasingly \
                  popular as a reaction of the problem(even Tech Companies realising \
                  themselves that their products rare harmful in not so specific use cases anymore). \
                  Today, teenagers start realizing how their screen time has increased, yet there are\
                   no tools and even less culture to tackle the reduction of screen time in particular, \
                   and in more general what application categories are used for how much time, for example\
                    "educational" vs. "social".My solution is to collect screen time data and visualize \
                    it in order to develop a collec - tive understanding and / or tool to work on the \
                    reduction of screen time and the balance of application use.'
      }
    });
  });
  res.send("succeeded");
});

router.get("/search", function(req, res, next) {
  res.redirect("/projects?keyword=".concat(req.query.keyword));
});

// /* POST to Add User Service */
// router.post("/adduser", function(req, res) {
//   // Submit to the DB
//   collection.insert(
//     {
//       username: userName,
//       email: userEmail
//     },
//     function(err, doc) {
//       if (err) {
//         // If it failed, return error
//         res.send("There was a problem adding the information to the database.");
//       } else {
//         // And forward to success page
//         res.redirect("userlist");
//       }
//     }
//   );
// });

// /* GET Userlist page. */
// router.get("/userlist", function(req, res) {
//   var db = req.db;
//   var collection = db.get("usercollection");
//   collection.find({}, {}, function(e, docs) {
//     res.render("userlist", {
//       userlist: docs
//     });
//   });
// });

// /* GET New User page. */
// router.get("/newuser", function(req, res) {
//   res.render("newuser", { title: "Add New User" });
// });

// /* POST to Add User Service */
// router.post("/adduser", function(req, res) {
//   // Set our internal DB variable
//   var db = req.db;

//   // Get our form values. These rely on the "name" attributes
//   var userName = req.body.username;
//   var userEmail = req.body.useremail;

//   // Set our collection
//   var collection = db.get("usercollection");

//   // Submit to the DB
//   collection.insert(
//     {
//       username: userName,
//       email: userEmail
//     },
//     function(err, doc) {
//       if (err) {
//         // If it failed, return error
//         res.send("There was a problem adding the information to the database.");
//       } else {
//         // And forward to success page
//         res.redirect("userlist");
//       }
//     }
//   );
// });

module.exports = router;
