# Project - NetflixGPT
From Episode 14 to 16, I build a Project is `NetflixGPT`. You can checkout [repository](https://github.com/opdsbanasya/NetflixGPT)

- In this project, I learned about the following topics:
## form validation
`Form validation` is the process of ensuring that user input is `clean`, `correct`, and `useful`. It is usually done by checking the input against a `set of rules`. If the input does not meet the rules, the form is considered `invalid` and the user is prompted to fix the errors. If you have a `large` form with many fields than you should consider using a form `validation library `like `Formik` or `React Hook Form`. But for small forms, you can use the `useRef` hook.

## useRef
`useRef` is hook that comes from `react`. It is used to create a reference to a DOM element or a value and to access a DOM element directly. It take a initial value that can be `null` or `undefined` and return an object that have single property `current object`. current have the element that you want `reference`. To make a reference to a `DOM element`, you can use `ref` attribute in the element and pass the `ref` object to it.
```js
import { useRef } from 'react';

const Form = () =>{
    const email = useRef(null);

    return (
        <div>
            <input ref={email} type="email" />
        </div>
    )
}
```
## Regex Expressions
In JavaScript, you can create a regex expression by using `/pattern/flags` syntax. Here is an example of regex expression that checks if the input is a valid email or not.
```js
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
```