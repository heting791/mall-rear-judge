var mysql = require('mysql');
const {
	MYSQL_CONFIG
} = require('../config/db')

var connection = mysql.createConnection(MYSQL_CONFIG);

connection.connect();

setInterval(function() {
	connection.query('SELECT 1');
}, 30000);

function exexSQL(sql) {
	const promise = new Promise((resolve, reject) => {
		connection.query(sql, (err, result) => {
			if (err) {
				reject(err);
				return;
			}
			console.log("exexSQL-result:" + JSON.stringify(result));
			resolve(result);
		})
	})
	return promise;
}

module.exports = {
	exexSQL
}