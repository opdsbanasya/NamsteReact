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

Babel is a JavaScript compiler that converts the JSX code to JavaScript code.



explore Babel Documentation

React Components
class based components 
functional components

to render components - 
```JSX
<ComponentName>
```

component composition
{ComponentName()}

cross-side scripting