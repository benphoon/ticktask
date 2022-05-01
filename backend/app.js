const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv/config');

// Establish instance of express app
const app = express();

// BodyParser takes the entire body portion of an incoming request stream and exposes it/makes it accessible via req.body
app.use(bodyParser.json());

// cors allows cross origin resource sharing
app.use(cors({
    origin: 'http://localhost:3000'
}));

//ROUTES
// Home
app.get('/', (req, res) => {
    res.send('TickTask')
})

// Tasks
const tasksRoute = require('./routes/tasks')
app.use('/tasks', tasksRoute)

// Connect to MongoDB database
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to Database!');
})

// Listening on...
app.listen(3010);