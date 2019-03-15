## Installation

Run `npm install` to install all of the necessary dependencies.
Make sure the database connection is configured properly.
Create a `env` file with a configuration like the one in `env.example` adding the correct password to the DB.

## Install PostgreSQL
https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

## Create .env file
Copy the content from .env.example into a new .env file

## Setup
`npm install -g sequelize-cli`
`npm install -g mysql2`
Run `sequelize db:create` to create the databse.
Run `sequelize db:migrate` to create the databse tables.
Run `sequelize db:seed:all` to populate the tables.

Run `sequelize db:drop` to drop the database.

## Testing standard coding:
        Run: standard
## Automatically try and fix standard coding issue:
        Run: standard --fix

## Starting the App
Run `npm run start:dev` to start the server