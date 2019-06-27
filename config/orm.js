var connection = require("./connection.js");

var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM schedule ORDER BY tim ASC";
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function([d, a, t], cb) {
    var queryString =
      "INSERT INTO schedule (dates, appointment, tim) VALUES (?,?,?)";

    connection.query(queryString, [d, a, t], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  }
};

module.exports = orm;
