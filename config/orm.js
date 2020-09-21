// Taken from previous class activities
// Import MySQL connection
const mysql = require('mysql');

printQuestionMarks = (num) => {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Taken from previous class activities
class ORM {
    connection;

    constructor(connection) {
        this.connection = connection;
    }

    query = (queryString, vals) => {
        return new Promise((resolve, reject) => {
            this.connection.query(queryString, vals, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    };
    
   objToSql = (ob) => {
        var arr = [];
        for (var key in ob) {
            var value = ob[key];
            if (Object.hasOwnProperty.call(ob, key)) {
                if (typeof value === "string" && value.indexOf(" ") >= 0) {
                    value = "'" + value + "'";
                }
                arr.push(key + "=" + value);
            }
        }
        return arr.toString();
    }

    selectAll(tableInput) {
        return this.query("SELECT * FROM " + tableInput + ";");
    }

    insertOne(table, cols, vals) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += this.printQuestionMarks(vals.length);
        queryString += ") ";

        return this.query(queryString, vals);
    }

    updateOne(table, objColVals, condition) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += this.objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        return this.query(queryString);
    }

}

module.exports = ORM;