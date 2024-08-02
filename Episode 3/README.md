### JSX
- JSX is not part of `React`, it is defferent thing.
- JSX is a convension to merge `HTML` and `JavaScript`.
- JSX looks like HTML but it is not HTML.
- JSX is a syntax extension for JavaScript.
```JSX
const element = <h1>Hello, world!</h1>;
// it is also a React element
```
- Browser does not understand JSX, because it is not valid pure `JavaScript`.


### How JSX works?
The jsx code transpiled before reached to browser and it is done by `babel` than at the end the babel transpile the jsx code to js code that the browser can understand.
```plaintext
JSX code -> Babel -> React Element - JS Object -> HTML(render)
```

`Babel`: is a JavaScript compiler that converts the JSX code to JavaScript code. explore [Babel Documentation](https://babeljs.io/docs/en/) to more.


### React Components
- React components are the building blocks of any React application.
- A React component is a reusable piece of code that defines how a part of the UI should appear.
- There are two types of components in React:
    - `Class components` : Old way of writing components.
    - `Functional components` : New way of writing components.
        - Functional components are just JavaScript functions that return React elements.
        - Make sure to start the name of the component with a capital letter.
        ```JSX
        const HeadingComponent = () => {
            return <h1>React Functional Component</h1>
        }
        ```
        - To render these functional components, use following syntax:
        ```JSX
        // to render on root element
        <HeadingComponent />

        // to render inside another component
        <div>
            <HeadingComponent />
            <HeadingComponent></HeadingComponent>
        </div>
        // you can call as a normal function
        <div>
            {HeadingComponent()}
        </div>

        
        ```
        - `{}` : You can write any expression of JS.

`Component composition` : Nesting components inside other components.

### Cross-side-scripting Attacks
Some APIs are sending some malicious code into your browser, the browser will execute that blindly, it knows as `Cross-side-scripting Attack`. React sanitize the code before rendering it to the browser.