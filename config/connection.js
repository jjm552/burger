// MYSQL CONNECTION SETUP
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'mysql1234mysql',
        database: 'burgers_db'
    });
};

// MYSQL CONNECTION
connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected to SQL DB as id: " + connection.threadId);
});

// EXPORT CONNECTION FOR ORM
module.exports = connection;