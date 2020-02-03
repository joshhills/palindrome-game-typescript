import express from 'express';
import { PORT } from './config/constants';

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Hello world!');
});

app.listen(3000, () => {
    console.log('Server listening...');
});