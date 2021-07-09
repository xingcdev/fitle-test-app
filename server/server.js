import express from 'express';
import personRouter from './routes/person.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('You are successful connecting to the API!');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use('/api/person/', personRouter);

export default app;
