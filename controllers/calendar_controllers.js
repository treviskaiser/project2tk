var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var calendar = require("../models/calendar");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  calendar.selectAll(function(data) {
    var today = [];
    var today1 = [];
    var today2 = [];
    var today3 = [];
    var today4 = [];
    for (var i = 0; i < data.length; i++) {
      var month = new Date().getMonth() + 1;
      var day = new Date().getDate();
      var day1 = new Date().getDate() + 1;
      var day2 = new Date().getDate() + 2;
      var day3 = new Date().getDate() + 3;
      var day4 = new Date().getDate() + 4;
      var year = new Date().getFullYear();
      if (data[i].dates === month + "-" + day + "-" + year) {
        today.push(data[i]);
      }
      if (data[i].dates === month + "-" + day1 + "-" + year) {
        today1.push(data[i]);
      }
      if (data[i].dates === month + "-" + day2 + "-" + year) {
        today2.push(data[i]);
      }
      if (data[i].dates === month + "-" + day3 + "-" + year) {
        today3.push(data[i]);
      }
      if (data[i].dates === month + "-" + day4 + "-" + year) {
        today4.push(data[i]);
      }
    }
    console.log(month + "-" + day1 + "-" + year);
    console.log(data);
    console.log(today1);
    res.render("index", {
      calendar: today,
      calendar1: today1,
      calendar2: today2,
      calendar3: today3,
      calendar4: today4
    });
  });
});

router.post("/api/calendar", function(req, res) {
  console.log(req.body.dates);
  calendar.insertOne([req.body.dates, req.body.app, req.body.time], function(
    result
  ) {
    // Send back the ID of the new quote
    res.json(result);
  });
});

module.exports = router;
