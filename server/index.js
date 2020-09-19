require('dotenv').config();

const express = require('express'),
massive = require('massive');

const translateCtrl = require('./translateCtrl');

const { SERVER_PORT } = process.env;

const app = express();

// TO-DO add DB endpoints

app.use(express.json());

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))