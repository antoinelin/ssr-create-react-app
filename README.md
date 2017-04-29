[![dependencies Status](https://david-dm.org/toinelin/ssr-create-react-app/status.svg)](https://david-dm.org/toinelin/ssr-create-react-app)
# SSR react-app

This is my React universal application boilerplate based on the [Create React App](https://github.com/facebookincubator/create-react-app) bootstrap.

**WIP** : im still working on it, it is ready to use if you want to develop a server-rendered React app with it.

Working on:
- Add Redux with reducers hot reloading and redux serverside implementation
- Add flow types
- Connect API through Redux and React-Router v4

Feedbacks are welcome !

**I will develop doc ASAP**

## Stacks
- [Node.js](https://nodejs.org/en/)
- [Express](http://expressjs.com/fr/)
- [React](https://facebook.github.io/react/)
- [React Router v4](https://reacttraining.com/react-router/)
- [Webpack](https://webpack.github.io/docs/)
- [Create React App](https://github.com/facebookincubator/create-react-app)

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  client/
    index.html
  public/
    imgs/
    favicon.ico
  config/
    webpack
  scripts/
    build.js
    dev.js
    serv.js
    test.js
  server/
    express/
    middlewares/
    entry.js
    index.js
  src/
    components/
      component/
    config/
      index.js
    containers/
      container/
        meta.js
        index.js
    ressources/
```

## Running the app localy

**Requirement:** Node.js 5.x or newer
 
Clone the repo:
```shell
$ git clone https://github.com/toinelin/ssr-create-react-app
```
Install dependencies :
```shell
$ cd ssr-create-react-app && yarn
```
Run dev:
```shell
$ yarn dev
```
Run build:
```shell
$ yarn prod dev && yarn start
```
