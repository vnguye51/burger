// Set up MySQL connection.
require('dotenv').config()
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "mysql://b5c147a9b4292e:6ad067d8@us-cdbr-iron-east-01.cleardb.net/heroku_27cf5591577f650?reconnect=true",
  port: 3306,
  user: "root",
  password: null,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
