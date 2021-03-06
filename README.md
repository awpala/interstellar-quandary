# Interstellar Quandary

## About The Application

This simple web application provides a validated translation from English to Gorbyoyo via external API.

**Financial Disclosures**: No Cutko knives were sold on Gorbyoyo during the production of this application.

## Live Version

This application is hosted [here](http://46.101.218.116:4000/).

## Local Setup and Deployment

**Note**: This project requires `git`, `node.js`, and `npm` as principal dependencies.

To deploy this project locally, issue the appropriate `git clone` command in the terminal (e.g., Bash) to clone a local copy of the repository. Once the files are copied locally, issue terminal command `npm install` to install the additional dependencies (see `/package.json` and/or **Technologies Used** below for more information).

**Note**: Create a new file entitled `.env` in the root project directory (i.e., in `interstellar-quandary`) to store secured environmental-variable strings. This file is `.gitignore`d and must be created locally instead.

`/db/seed.sql` contains the seed file to create the PostgreSQL database table entitled `phrase`. Once the table is created in the database schema, to connect the server via MassiveJS, add the appropriate `CONNECTION_STRING` variable containing the location of the database table (e.g., Heroku) to the `.env` file.

Finally, add the appropriate `SERVER_PORT` string to the `.env` file to declare the server port being used by the server application. 

To launch the application, activate the server on the specified `SERVER_PORT` (e.g., via `node` or `nodemon`) and then issue terminal command `npm run start` to launch the client-side application.

## Running Unit Tests

To run the unit tests (see `/__tests__`), issue terminal command `npm test`. Testing is performed using Jest and Enzyme on the client-side application React components.

## Technologies Used

### Client

The client-side application is built with React and bootstrapped via `create-react-app`. All React components are functional components built using Hooks (see `/src/Components`). Furthermore, the English-to-Gorbyoyo translation logic is encapsulated in the custom Hook `useTranslator` (see `/src/Hooks/useTranslator.js`).

### Server

The server-side application is an Express server running on Node.js. The server provides RESTful APIs to mediate interaction between the client-side application and the database for data persistence. The API consists of two endpoints via route `/api/phrase`:
* **GET** - queries the most recently translated English phrase from the database
* **PUT** - adds a new query to the database when a translation is performed by the user

### Database

The database comprises one table entitled `phrase` (see `/db/seed.sql`), consisting of the fields `phrase_id`, `english`, and `gorbyoyo`. This table persists the ad hoc translation data. The PostgreSQL database is hosted via Heroku and connected to the server-side application via [MassiveJS](https://massivejs.org/).