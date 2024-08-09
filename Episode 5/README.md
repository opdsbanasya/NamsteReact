## React file structure
You can use the following file structure for your React project:
```plaintext
    src
    ├── components
    │   ├── Component1
    │   ├── Component2
    │   ├── Component3
    │   └── Component4
    ├── utils
    |   ├── Constants
    |   ├── Data
    |   └── Routes
``` 

## 2 type of export/import
- **default export/import** : you can only have `one default export` in a file. if you want to import a single function, class, or variable, you can use default export/import.
syntax:
```JavaScript
const myFunction = () => {
    console.log('Hello World');
}

export default myFunction;
```
```JavaScript
import myFunction from './myFunction';
```
- **named export/import**: you can have multiple named exports in a file. if you want to import multiple functions, classes, or variables, you can use named `export`/`import`. JS wrap your data in an `object` and you can access it using the object name.
syntax:
```JavaScript
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL = "https://imgs.search.brave.com/hkG-MNTaxFwfJGO7_WouUVHTfPzCYqLO1xWUnzur-_w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9zXy0ycWdSclBa/bldVcFdJaDROZUl1/OTVVQ0U9LzB4MDo5/OTl4OTk5L2ZpdC1p/bi81MDB4NTAwLzk5/ZGVzaWducy1jb250/ZXN0cy1hdHRhY2ht/ZW50cy8xMTgvMTE4/NjEyL2F0dGFjaG1l/bnRfMTE4NjEyOTQz.jpeg";
```
```JavaScript
import { CDN_URL, LOGO_URL } from './Constants';
```

## Can i use both in the same file?
`Yes`, you can use both in the same file. But you can only have one `default export` in a file.

## React hook
- It is a normal JavaScript function.
- It allows you to use state and other React features without writing a class.

**some hooks**:
### useState
- Super power `state variable` in functional component.
- You have to import it from 'react'.
```JavaScript
import React, { useState } from 'react';
```
- useState give two things:
    - state variable
    - function to update the state variable
```JavaScript
const [count, setCount] = useState(0);
```
- whenever you update the `state variable`, React will `re-render` the component.

## Reconcilation algorithm (React Fiber)
- It is a process of comparing the virtual DOM with the real DOM.
- It is a process of updating the `real DOM` with the `virtual DOM`.
- React Fiber is a new way of finding differences.
- React fiber comes in `react 16`.
- React Can efficiently find out the difference between virtual DOM and update the UI.
- This `COR of React algorithm`.

## Diffing  algorithm
- It try to finding difference between `Old Virtual DOM` and `New Virtual DOM`.


# what in this Episode
In this episode, I built dynamic our food app using `import`/`export`. also I bulit a feature that filters `top rated Restuarents`. This feature implemented by using `useState`.
