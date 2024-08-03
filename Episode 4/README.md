# Class 
## Aproch to write React Components
### First do all planning before writing code.
### Figure out all the components you need.
```plaintext
Header
    ### Logo
    ### Navigation
Body
    ### Search
    ### RestraurentContainer
        ### RestraurentCard
Footer
    ### SocialLinks
    ### Contact
    ### CopyRight
```
# Props
### Props are used to pass data from parent to child component.
### Can say props are just `arguments` to a function.
### React wraps props in an object and pass it to the component.

## config Driven UI
### Controlling the `Web UI` using config data that comes from the server.
### Large scale applications have a lot of config data.

## Hardcoded Data vs Dynamic Data
### Hardcoded Data
### Data that is written in the code itself.
### Data is `static` and does not change.
### Data is not fetched from the server.

### Dynamic Data
### Data is not written in the code.
### Data changes `frequently`.
### Data that is fetched from the server.

## Swiggy Data Used
In this Episode, I was using the data from `Swiggy API` to display the restraurent data of my city. I displayed the data in form of cards. Each card contains the `restraurent name`, `rating`, `delivery time`, `delivery charges`, and the `type of food` they serve. In this Episode I learn about `props` and also about how to display `dynamic data` in the form of cards using React Components.

---

# Assignment
### Is `JSX` mandatory for React?
*Ans* : `JSX` is an Extension Syntax that allows writing HTML and Javascript together easily in React and is used to create React elements. These elements are then rendered to the React DOM. Each JSX element is just to make use of React easy and for calling React.createElement(component, props, …children) with less work. So, anything that is done with JSX can also be done with just plain JavaScript. So `JSX` is not mandatory but is used for writing better and clean code instead of writing code using `React.CreateElement`.

### Is `ES6` mandatory for React?
*Ans*: `ES6` is not mandatory for `React` but is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const).
ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015.

### `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
*Ans*: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable or React element.
  The `{}` can embed a javascript expression or a variable or React element inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. If component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

### How can I write `comments` in JSX?
*Ans*: JSX comments are written as follows:
- `{/*  */}` - for single or multiline comments

### What is `<React.Fragment></React.Fragment>` and `<></>`?
*Ans*: `<React.Fragment></React.Fragment>` is a feature in React that allows us to write code in multple lines and return them. `<></>` is a shorthand for `React.Fragment`.

### What is `Reconciliation` in React?
### What is `React Fiber`?
### Why do we need `keys` in React?
### Can we use `index as keys` in React?
### What is `props in React`? Ways to.

