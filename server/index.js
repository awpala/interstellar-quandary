require('dotenv').config();

const express = require('express'),
massive = require('massive');

const phraseCtrl = require('./phraseCtrl');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

// instantiate Express server
const app = express();

app.use(express.json());

// connect to database
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(db => {
    app.set('db', db);
    console.log('Database Connected');
})
.catch(err => console.log(err));

// phrase controller endpoints - database interactions
app.get('/api/phrase', phraseCtrl.getLastPhrase);
app.put('/api/phrase', phraseCtrl.addNewPhrase);

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))