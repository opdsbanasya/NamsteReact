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





HW
- explore the parcel doc
- expolre all getBy and getAllBy
- expolre all roles