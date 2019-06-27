var orm = require("../config/orm");

var calendar = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(d, a, t, cb) {
    orm.insertOne(d, a, t, function(res) {
      console.log(res);
      cb(res);
    });
  }
};

module.exports = calendar;
