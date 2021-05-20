<h4 align="center">
  <img src="./gui/src/assets/logo.svg"></a>
  <br></br>
  A platform where NGOs find the heroes they need. 
</h4>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/-Node.js-43853d?style=for-the-badge&logo=Node.js&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="React Native" src="https://img.shields.io/badge/-React Native-764ABC?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="Insomnia" src="https://img.shields.io/badge/-Insomnia-5849BE?style=for-the-badge&logo=insomnia&logoColor=white" />
</p>

Be The Hero is an web/mobile application that connects NGOs with people interested in contributing to a noble cause.

## Demo
<p align="center">
    <img src="./docs/be-the-hero-web.gif" width="78%"/>
    <img src="./docs/be-the-hero-mobile.gif" width="15.6%" />
</p>

## Getting Started

### **Architecture**

1. **CORE**: the server;
2. **GUI**: the web interface;
2. **NGUI**: the native interfaces for Android and iOS.

### **Prerequisites**

- It is **necessary** to have **[Node.js](https://nodejs.org/en/)** installed on the machine;
- Also, it is **necessary** to have a package manager either **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/ )**;
- Finally, it is **essential** to have **[Expo](https://expo.io/)** installed globally on the machine.

1. Make a clone:

```sh
   git clone https://github.com/amintasvrp/be-the-hero.git
```

2. Running the Application:

```sh
   # Install the dependencies
   npm install

   ## Create the database
   cd core
   npx knex migrate:latest

   # Start the API
   npm start

   # Launch the web application
   cd gui
   npm start

   # Launch the mobile application
   cd ngui
   npm start
```

## Running the tests
We can run the unit and integration tests using the command below:
```bash
npm run test
```

## Contributing
Make a pull request and make clear what changes have been made and which bugs persist. Do not introduce bugs, be proactive!

## Licenses
* **MIT License** - [*Ver detalhes*](./LICENSE.txt)

