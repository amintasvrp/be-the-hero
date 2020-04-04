
<h1 align="center">
  <img src="./gui/src/assets/logo.svg"></a>
</h1>

<h4 align="center">
  A platform where NGOs find the heroes they need. 
</h4>

<p align="center">
  <a><img alt="node" src="https://img.shields.io/badge/node-10.19.0-brightgreen.svg" ></a>
  <a><img alt="react" src="https://img.shields.io/badge/react-16.13.1-blue.svg" ></a>
  <a><img alt="react-native" src="https://img.shields.io/badge/react_native-0.62.1-blue.svg" ></a>
</p>

## Getting Started

The architecture of this project consists of 3 modules:

1. CORE, which consists of the backend;
2. GUI, which is the web interface;
2. NGUI, responsible for generating native interfaces for Android and iOS.

To use of each of them, after cloning the repository:

1. Install depencencies:

```bash
npm install
```
2. Run the application on a local port:

```bash
# CORE
npm start
npx knex migrate:latest

# GUI and NGUI
npm start
```

### Prerequisites
Have **Node.js v10.x** installed on the machine.

## Running the tests
We can run the unit and integration tests using the command below:
```bash
npm run test
```
## Deployment
To deploy the entire application, we use the following commands:
```bash
# CORE
npm install
npm start
npx knex migrate:latest

# GUI and NGUI
npm install
npm start
```

## Built With
* [Node.js](https://nodejs.org/en/) - Used on CORE 
* [React](https://pt-br.reactjs.org/) - Used on GUI
* [React Native](https://reactnative.dev/) - Used on NGUI

## Contributing
Make a pull request and make clear what changes have been made and which bugs persist. Do not introduce bugs, be proactive!

## Contributors
* **Amintas Victor** - *Initial work* - [GitHub](https://github.com/amintasvrp)

 If you contributed with this project, your name will be placed here. Welcome to the hall of fame :)

## Acknowledgments
* JavaScript and ECMAScript 6+
* Knowledge about Node.js, React and React Native
* Willingness to learn, research and develop (no laziness!)


