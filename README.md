# Interstellar Quandary

## About The Application

This simple web application provides a validated translation from English to Gorbyoyo via external API.

**Financial Disclosures**: No Cutko knives were sold on Gorbyoyo during the production of this application.

## TO-DO: Live Version

## Local Setup

**Note**: This project requires `git`, `node.js`, and `npm` as principal dependencies.

To deploy this project locally, issue the appropriate `git clone` command in the terminal to clone a local copy of the repository. Once the files are copied locally, issue terminal command `npm install` to install the additional dependencies (see `package.json` and/or **Technologies Used** below for more information).

Create a new file `.env` in the root project directory (i.e., in `interstellar-quandary`) to store secured variable strings. This file is `.gitignore`d and must be created locally instead.

`/db/seed.sql` contains the seed file to create the PostgreSQL database table entitled `phrase`. Once the table is created in the schema, to connect the server via MassiveJS, add the appropriate `CONNECTION_STRING` variable containing the location of the database table (e.g., Heroku) to the `.env` file.

Finally, add the appropriate `SERVER_PORT` string to the `.env` file to declare the server port being used by the server application. 

To run the application, activate the server on the specified `SERVER_PORT` and then issue terminal command `npm run start` to launch the client-side application.

## TO-DO: Running Unit Tests

## Technologies Used

### Client

The client-side application is bootstrapped using `create-react-app`. All React components are Hooks (see `src/Components`). Furthermore, the principal translation logic is encapsulated in a custom Hook (see `src/Hooks/useTranslator.js`).

### Server

The server-side application is an Express server running on Node.js. The server provides RESTful APIs to mediate interaction between the client-side application and the database. The API consists of two endpoints via route `/api/phrase`:
* **GET** - queries the most recently translated English phrase to provide data persistence
* **PUT** - adds a new query to the database when a translation is performed by the user

### Database

The database consists of one table `phrase` (see `db/seed.sql`) having fields `phrase_id`, `english`, and `gorbyoyo`. This table persists the translation data. The PostgreSQL database is connected to the server-side application using [MassiveJS](https://massivejs.org/).