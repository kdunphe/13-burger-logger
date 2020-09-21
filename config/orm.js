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



module.exports = ORM;