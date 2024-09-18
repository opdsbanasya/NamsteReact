### Why React?
React is used to build user interfaces (`UI`) on the front end. React is a `JavaScript` library created by `Facebook`. It is used for building `reusable UI` components. React allows developers to create large web applications that can `change data`, without `reloading` the page. The main purpose of React is to be `fast`, `scalable`, and `simple`. It works only on user interfaces in the application. This corresponds to the view in the `Model–view–controller` (MVC) template. It can be used with a combination of other JavaScript libraries or frameworks, such as Angular JS in MVC.

### CDN
`CDN` stands for `Content Delivery Network`. Yah ek network hota hai jo aapke website ke static files jaise CSS, JS, Images ko `store` karta hai. Jab koi user aapki website ko open karta hai to CDN us static files ko user ke `nearest server` se `load` karta hai. Isse aapki website ki speed `fast` hoti hai.```

here are React CDN links:
```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

### Crossorigin attribute:
The crossorigin attribute is a CORS (Cross-Origin Resource Sharing) setting that can be added to elements such as `<img>`, `<video>`, `<audio>`, `<link>`, `<script>`, and `<style>`. This attribute allows you to `configure` the CORS settings for those elements.

### Library:
- Library is a collection of functions and methods that allows you to perform many actions without writing your code.
- bounded by less rules and guidelines.
- isme kuch changes karne ki freedom hoti hai.

### Framework:
- Framework is a collection of libraries that helps you to perform many actions without writing your code.
- bounded by more rules and guidelines.
- isme kuch changes karne ki jyada freedom nahi hoti hai.

### Hello World in React
Elements are created using `React.createElement()` method. This method takes three arguments: `elementType`, `attributes`, and `innerHTML`. The `createElement()` method returns an object that represents the element. After creating the element, need to create a `root` element where the element will be rendered, to create root element we use `ReactDOM.createRoot()`. The `root.render()` method is used to render the element in the `root` element.
```js
// creating an element
const heading = React.createElement('h1', {}, 'Hello World');

// creating a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// rendering the element
root.render(heading);
```

#### Nested Elements
For creating nested elements, we can pass an array of elements as the third argument of the `React.createElement()` method.
```js
const Parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"children"}, [
        React.createElement("h1", {class:"grandchild"}, "Hello World"),
        React.createElement("h2", {class:"grandchild"}, "Namaste React")
    ]),
])
```
- If we use createElement to build large code, it makes cery complex nested structure that not easy to read and understand. To solve this problem, we use `JSX`.
- Make Sure the `react` and `react-dom` libraries `CDN` are included in the project.
- `render()` method replaces the content of the `root` element with the new element.