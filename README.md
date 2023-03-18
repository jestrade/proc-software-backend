# Node JS basic API
`Academic purpose`
# API Rest :: 2023

```
Academic purpose
```

## Prerequisites

- [Node](https://nodejs.org/)
- NPM, built into Node.
- [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) or any client api rest.
- MongoDB

## Clone the repo

```sh
> git clone https://github.com/jestrade/todo-backend.git
```

## Enter to folder project

```sh
> cd backend
```

## Install the app

```sh
> npm i
```

## Create database in docker
docker run --name mongodb -v /your_path/db:/data/db -d mongo

## Create .env file

- Configuration Example:
  - HTTP_HOST -> IP of server, default is 127.0.0.1.
  - HTTP_PORT -> Node listening port, default is 3000.
  - DB_CONNECTION_STRING -> Mongo db connection string, default running locally is mongodb://localhost:27017/my-db

Rename .env.example to .env, and set parameters required, please dont include `env:`.

```yaml
env:

# This is parameters required.
HTTP_HOST=
HTTP_PORT=
DB_CONNECTION_STRING=
LOG_ACCESS=
```

## Install nodemon as development dependency

```sh
> npm i --save-dev nodemon
```

## Run the seeds

If database is running,

```sh
npm run seed
```

## Run the app
If database is running,

### Without nodemon

Run project without nodemon

```sh
> npm start
```

### With nodemon

Run project with nodemon

```sh
> npm run dev
```

### Run tests

```sh
none
```

## Access points

domain/api/\*

## Authenticacion

´´´
none
´´´

## API


# Author
@jestrade