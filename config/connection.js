const mysql = require('mysql');
let connection;


// Set up connection information
let connection = mysql.createConnection({
        port: 3306,
		host: "localhost",
		user: "root",
		password: "",
		database: "burgers_db"
	});


// Connect to the database
connection.connect(function(err) {
	if (err) {
	  console.error("error connecting: " + err.stack);
	  return;
	}
	console.log("connected as id " + connection.threadId);
  });  


// Connection
module.exports = connection;