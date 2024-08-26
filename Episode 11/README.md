# Episode 10 : Jo Dikhta Hai Wo Bikta hai

## Ways of styling
There are lot of ways to style:
- `Pure CSS`
- `SASS/SCSS`: writing css bacomes more advance and easy
- `Styled Components`: pre styled components, here are some styled components libraries:
    - `Material UI`
    - `Ant Design`
    - `Chakra UI`
    - `Tailwind CSS`
    - `Bootstrap`

## Tailwind CSS
In this project, I will use `Tailwind CSS`. It is a `CSS Framework`. Tailwind uses utility classes to style the components. It used postcss (a tool for transforming styles with JS plugins) to compile the css.
To install Tailwind in your project follow these steps if you are using Parcel:
- Create a Project using parcel
- Run following command in your terminal:
```bash
npm install -D tailwindcss postcss
npm tailwindcss init
```
- configure the postcss: make a `.postcssrc` file in the root of your project and add the following code:
```json
{
    "plugins": {
        "tailwindcss": {},
    }
}
```
The parcel use postcssrc to understand the Tailwind.
- configure the tailwind: add the following code into `tailwind.config.js` file:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```
- add the following code in your `index.css` file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Now, you can use the tailwind classes in your project.
In case of any error, you can check the documentation of [Tailwind CSS](https://tailwindcss.com/docs/installation)

## Example
```HTML
<div>
    <h1 class="text-2xl font-bold ml-5">About Us</h1>
</div>
```


## Tailwind CSS Extension
It is a tool that provided by `Tailwind Intellisense` that suggest css classes when you type class in your IDE.