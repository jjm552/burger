// MYSQL CONNECTION SETUP
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'mysql1234mysql',
    database: 'burgers_db'
});

// MYSQL CONNECTION
connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

// EXPORT CONNECTION FOR ORM
module.exports = connection;