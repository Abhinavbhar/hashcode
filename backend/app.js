// index.js
import express from 'express';

import bodyParser from 'body-parser';
import connect from './db/index.js';
import authentication from './routes/login.route.js';

const app = express();



app.use(bodyParser.json());

// Connect to the database
 connect();

// Routes
app.use('/auth',authentication)
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
