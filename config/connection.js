var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '3xtx5734CCX938',
        database: 'burgers_db'
    });
}

connection.connect(function (err) {
    if (err) {
        console.error("no connection: " + err.stack);
        return;
    }
    console.log("connected at " + connection.threadId);
});

module.exports = connection;
