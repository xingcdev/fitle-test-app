import express from 'express';
import populationRouter from './routes/population.js';

const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('You are successful connecting to the API!');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use('/api/population/', populationRouter);

export default app;
