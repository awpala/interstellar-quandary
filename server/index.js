// import dependencies and process string variables
require('dotenv').config({ path: __dirname + '/../.env'});

const express = require('express'),
massive = require('massive');

const phraseCtrl = require('./phraseCtrl');

const path = require('path');

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

// phrase controller endpoints (database interactions)
app.get('/api/phrase', phraseCtrl.getLastPhrase);
app.put('/api/phrase', phraseCtrl.addNewPhrase);


// build configuration (client redirect)
app.use(express.static(__dirname + '/../build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

// server listening
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))