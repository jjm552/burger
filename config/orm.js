// IMPORT MYSQL CONNECTION
var connection = require("../config/conection.js");

// HELPER FUNCTION FOR SQL SYNTAX ??
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// HELPER FUNCTION FOR SQL SYNTAX 
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}

// ORM SQL STATEMENT FUCNTIONS
var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log("SQL Create: " + queryString);

        connection.query(queryString, vals, function(err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },

    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log("SQL Update: " + queryString);

        connection.query(queryString, function(err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },

    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;

        queryString += " WHERE ";
        queryString += condition;

        console.log("SQL Delete: " + queryString);

        connection.query(queryString, function(err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    }
};
// END SQL ORM

module.exports = orm;