require('dotenv').config();

const express = require('express'),
massive = require('massive');

const wordCtrl = require('./wordCtrl');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(db => {
    app.set('db', db);
    console.log('Database Connected');
})
.catch(err => console.log(err));

// database endpoints
app.get('/api/word', wordCtrl.getLastWord);
app.put('/api/word', wordCtrl.addNewWord);

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))