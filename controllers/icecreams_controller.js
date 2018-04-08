var express = require("express");

var router = express.Router();

var icecream = require("../models/icecreams.js")

router.get("/", function (req, res) {
    icecream.selectAll(function (results) {
        res.render("index", { icecreams: results });
    });
});

router.post("/api/icecreams", function(req, res) {
    icecream.insertOne(["icecream_name", "devoured"], [req.body.icecream_name, req.body.devoured], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/icecreams/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    icecream.updateOne(
      {
        devoured: req.body.devoured
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;