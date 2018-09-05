# Event registration form

Simple app built with React and Node.js

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Please note that the app uses a MongoDB database. To run the app you have to have MongoDB installed and running locally on your machine. [How to install and run MongoDB locally](https://docs.mongodb.com/manual/administration/install-community/)

Before installing and running the app, please create a config.js file in the project's root directory, using given pattern, and fill it with necessary information: a database <name> to store the data in, default collection name and your local MongoDB instance address along with it's port.
```
const config = {
  expressPort: /express port eg. 3000/,
  client: {
    mongodb: {
      defaultDatabase: /default database name eg. 'Events'/,
      defaultCollection: /default collection name eg. 'Events'/,
      defaultUri: /your local MongoDB instance address + port/,
    },
  },
};

module.exports = config;
```

### Installing

Install server dependencies

```
npm install
```

Install client dependencies

```
cd client
npm install
```

### Running the app
Run server and client in the development mode

```
npm start
```

Run server in the development mode
```
npm run server
```

Run client in the development mode
```
npm run client
```

## Running the tests
```
npm run test:client
```

## Deployment

To prepare a build ready for production
```
npm run build:client
```

For more information about production ready build please read [Create-react-app's README.md](/client/README.md)
