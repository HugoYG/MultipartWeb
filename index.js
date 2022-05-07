const express = require('express');
const mongoose = require('mongoose');
const app = express();
const http = require('http');

const server = http.createServer(app);
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const axios = require('axios');
const port = 3000;
const mongoString = 'mongodb://localhost:27017/multipart';
const routes = require('./routes/routes.js');

app.use(express.json());
app.use('/api', routes)


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Connected to mongo');
})

server.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});


app.get('/', async(req, res) => {
    res.status(200).send('API MULTIPART V1.0.0');
});
