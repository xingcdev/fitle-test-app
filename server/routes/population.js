import express from 'express';
import db from '../db/db.js';

const router = express.Router();

router.get('/all', async function (req, res) {
	const sql = `SELECT * FROM demography`;

	db.all(sql, (err, rows) => {
		try {
			if (err) {
				throw err;
			}
			res.send({ population: rows });
		} catch (err) {
			console.log(err);
		}
	});
});

export default router;
