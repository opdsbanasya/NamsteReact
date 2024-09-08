# Testing

- Testing is a process of evaluating a system or its component(s) with the intent to find whether it satisfies the specified requirements or not.
- Testing is Very important because we all make mistakes, and even a single line fo code can mess up the whole application. So, we should worry about every line of code we write.
- There are 2 types of testing:
  - **Manual Testing**: Testing the application manually without any automation tools.
  - **Automated Testing**: A developer writes a script to test the application.
  - There are 3 types of automated testing:
    - **Unit Testing**: Test the react component in isolation, means test the component without its child components.
    - **Integration Testing**: There are multiple component and they are talking to each other, and they develop a flow of an action in react app that we will test. Bassically, we will test weather somebody writes some feature. This is `Integration testing`.
    - **End-to-End Testing**: Testing the the react app as soon as user lands in the website to the user leaves the website. This is `End-to-End testing`. We will test all flow of the application. `E2E` testing require different type of tools like `Cypress`, `Selenium`, `Puppeteer` etc.
- As a react developer, we will focus on `Unit Testing` and `Integration Testing`.
- If build every small thing, than `DEFINITELY` write test for it.

## React Testing Library (RTL)

- React Testing Library is a library to test react apps. It is build on top of `DOM Testing Library`.
- `DOM testing library` is like a base for all other libraries that provided by `testing-library`.
- If you craete your project using `create-react-app`, than you will get `React Testing Library` by default.
- `React Testing Library` uses `Jest` as a test runner.
- `Jest` is a delightful JavaScript Testing Framework with a focus on simplicity. Jest is also work with `Babel`.
- Read more about [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## Steps to write test

- Install React testing Library
- Install Jest
- Install babel
- Configure babel
- Configure Parcel to disable default Babel transpilation
- Initialize Jest
- Install JSDOM
- Install @babel/preset-react to make JSX work
- Include @babel/preset-react inside Babal configuration
- Install @testing-library/jest-dom

## Install React Testing Library

```bash
npm install --save-dev @testing-library/react
```

- or Check [RTL Docs](https://testing-library.com/docs/react-testing-library/intro/)
- `--save-dev`: It will save the package as a development dependency(-D).

## Install Jest

```bash
npm install --save-dev jest
```

- Read more on [Jest Docs](https://jestjs.io/docs/getting-started)

## Install Babel

Here are some addition dependencies for React Testing Library:

```bash
npm install --save-dev @babel-jest @babel/core @babel/preset-env
```

- Read more on [Babel docs](https://babeljs.io/docs/)

## Configure Babel

create a file `babel.config.js` in the root of the project and add the following code:

```javascript
module.exports = {
    presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```

## Configure Parcel to disable default Babel transpilation

- when we config babel, that we have a problem with parcel. Parcel already uses Babel with own configuration. Now we try to add extra babel configuration, So parcel get confused, means parcel configurstion conflicts with our configuration. We will have to change the parcel's behaviour to accomodate to use babel along with Jest. You have to make change in `.parcelrc` file. create a `.parcelrc` file in the root of the project and add the following code:
```json
{
    "extends": "@parcel/config-default",
    "transformers": {
        "*.{js,mjs,jsx,cjs,ts,tsx}": [
            "@parcel/transformer-js",
            "@parcel/transformer-react-refresh-wrap"
        ]
    }
}
```
- Now to test the App run command `npm run test`.

## Initialize Jest
Run the command:
```bash
npx jest --init
```
- It ask following question:
```
The following questions will help Jest to create a suitable configuration for your project

√ Would you like to use Typescript for the configuration file? ... no
√ Choose the test environment that will be used for testing » jsdom (browser-like)
√ Do you want Jest to add coverage reports? ... yes
√ Which provider should be used to instrument code for coverage? » babel
√ Automatically clear mock calls, instances, contexts and results before every test? ... yes
```

## Install JSDOM
now we have to install `JSDOM`, if you use `jest 28` or higher version.
```bash
npm i --save-dev jest-environment-jsdom
```
### Where we write test cases
There are 2 places to write testcase:
- create a folder `__tests__` and inside it write the test cases inside `JS/TS` file.
```
__tests__
    |-> .[js/ts]
```
- create file with the name `.test.[JS/TS]` or `.spec.[JS/TS]` and write inside the file.

## Install @babel/preset-react to make JSX work
- **WHENEVER** you test an UI component inside react, you will have to `render` that component on to JSDOM first. For rendering a component to jsdom use render method from `React Testing Library`. This render method takes component which going to be render. Whatever you render can accessed using `screen` object from `React Testing Library`. This screen object have lot of method for different type of queries to access from render method. It known as `Quering`. When we get accessed all Elements taht role a specific query. These are stored an varible. Now we check the the result when a Function or Component is Invoking self by using `expect`. It is known as `Assertion`. 
- When we try to test the a React Component that get an error `JSx syntax isn't enable` and it say a message `add @babel/preset-react`. To add @babel/preset-react run the command:
```bash
npm i -D @babel/preset-react
```
## Include @babel/preset-react inside Babal configuration
Now need to configure `babel.config.js` to include @babel/preset-react inside Babal configuration.
```js
module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        ["@babel/preset-react", { runtime:"automatic" }]
    ],
};
```
- `@babel/preset-react` help to testing library to convert that JSX to HTML, so that it can read properly.


## Install @testing-library/jest-dom
- It provide lot of method to `expect` to assertion the components like `.toBeInTheDocument`, and other.
- If we do not install it than we get an error `.toBeInTheDocument` is not a function.
- Run following command in terminal:
```bash
npm i -D @testing-library/jest-dom
```






-HW

- explore the parcel doc
- expolre all getBy and getAllBy
- expolre all roles
