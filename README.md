# Wrg challenge




## Installation

Requires [Node.js](https://nodejs.org/en/) v14+ to run.

Requires database (MySQL / PostgreSQL) to store data.

Clone the repo

```sh
git clone https://github.com/nikhilunni511/wrg-challenge.git
```

Change directory

```sh
cd wrg-challenge
```

Create a .env file with the following content and add required details to it.

```sh
DB_NAME=''
DB_USER=''
DB_PASSWORD=''
DB_DIALECT=''
DB_HOST=''
DB_PORT=
```

Install the dependencies.

```sh
npm i
```

Run the migration to create tables in database

```sh
npm run migrate
```

start the server

```sh
npm start
```

URLs

```sh
View
____

GET /users - Listing users
GET /users/create - To create new user
GET /users/<user-id> - To view an user data

REST APIs to get data as JSON
____

GET /users - Listing users
POST /users/create - To create new user
GET /users/<user-id> - To view an user data

```