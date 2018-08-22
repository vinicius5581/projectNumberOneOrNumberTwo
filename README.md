# Project "number one or number 2"

This project is inteended to be a playground for me to play with React and React Native on top of a backend using node express server and mongodb to run rest apis.

The product is an app that allow people to search for restrooms. The restrooms will be clasified in categories, including if its public or not, hours of operation, etc. Users will be able to rate the restrooms giving it stars, or more specific reviews as for example how clean it is.

The reestroms can be viewed on a list or in a map and can be searched by name or location. The default is to show the near by reestroms.

Anyone can insert new reestroms and the communite will manage the validity of the inputs by providing feedbacks, flaging, etc.

This project is open for colaboration. Please get in touch if you want to join our team.

## Stack

- Web app
- Native app
- Rest APIs
- Server
- MongoDB

## Deployment

- AWS

## Development

### Run the backend server

Create a project with google apis and then create a credentials. We are going to need a clientID and clientSecret. While there, add the development URL, http://localhost.com:3000, to the authorized JavasScript origins and add the authorized redirect url as well, http://localhost.com:3000/auth/google/redirect.

Once you have those credentials, add them to `projectH/config/keys.js`:

```javascript
module.exports = {
  ...
  google: {
    clientID: "GOOGLE_CLIENT_ID",
    clientSecret: "GOOGLE_CLIENT_SECRET"
  },
  ...
}
```

Create a database on mongo, add a user and password to the database, and then add the following to `projectH/config/keys.js`.

```javascript
module.exports = {
  ...
  mongodb: {
    MONGO_US: "DATABASE_USERNAME",
    MONGO_PW: "DATABASE_PASSWORD",
    MONGO_SR: "DATABASE_SERVER",
    MONGO_DB: "DATABASE_NAME",
  },
  ...
}
```

```bash
cd ~/projectH
yarn server
```

### Run the web app

```bash
cd ~/projectH/app/webapp
yarn start
```

### Run the native app

```bash
cd ~/projectH/app/nativeapp/
yarn server
```
