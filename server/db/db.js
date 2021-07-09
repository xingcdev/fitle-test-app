import sqlite3 from 'sqlite3';

let db = new sqlite3.Database('./db/us-census.db', (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log('Connected to the us-census database.');
});

export default db;
