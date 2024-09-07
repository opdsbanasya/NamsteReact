# Data Management in React

## Higher Order Components

- These are the function that takes a `input as a argument` and `return a enhanced component`.
- These are `normal JavaScript functions`.
- It is a pattern that is derived from React's compositional nature.
- `Restaurent.js`

```js
export const NearbyResCard = (RestruatantCard) => {
  return (props) => {
    return (
      <>
        <label>Nearly</label>
        <RestruatantCard {...props} />
      </>
    );
  };
};
```

- `Body.js`

```js
import RestruatantCard, { NearbyResCard } from "./RestruatantCard";

const RestruatantCardNearly = NearbyResCard(RestruatantCard);

const Body = () => {
    return (
        { restaurant?.info?.sla?.lastMileTravel <= 2.5
            ? <RestruatantCardNearly resCardInfo={restaurant} />
            : <RestruatantCard resCardInfo={restaurant} />
        }
    )
}
```

- `Data management` is an important part of a React application. A react app have `2 layers`:
    - **UI Layer**: It is the layer that is `visible` to the user. UI layer is `very static`, it does not have `own logic`. It is `powered` by Data layer.
    - **Data Layer**: It is the layer that is responsible for `managing the data`. It is dynamic and have `own logic`. It consists state management, data fetching, data manipulation, etc.

## React-devtools
- It is a `browser extension` that allows you to inspect the React component hierarchy in the `Chrome Developer Tools`.
- It gives 2 tabs:
    - **Components**: It shows the component hierarchy. It have the 2 layers - `UI Layer` and `Data Layer`.
    - **Profiler**: Whatever you will do inside app, it try to record all the activities and show in the profiler tab.
- See the below image:
![React-devtools](https://react.dev/images/docs/react-devtools-extension.png)
- To install it, go to the `chrome web store` and search for `React Developer Tools` and install it or follow the link [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi).

## Creating a accordian component
- When you `collapse` and `expend` a part of UI, known as accordian. It have 2 parts - `Header` and `Body`. When you click on header, body will be shown and hide.
- When I will click on header, the body will be expanded and all other item collapsed.
- To implement this, by making `parent component` to `controlled component`. It will have the state of which item is expanded and which is not.
- **Uncontrolled Component**: The parent component does `not` have the state to `control childrens`, all the children have own state.
- **Controlled Component**: The parent component have the state to `control childrens`, all the children do not have own state.
- To code check the `RestaurentInfo.js` and `RestaurentInfoCategoty.js` files.

## Prop Drilling
When you try to pass props from `one` component to `another` component, and this component to another component, but the `middle components` does not need the props, then it is called `prop drilling`. 
```
App -> Parent -> Child -> GrandChild
```
It is a `bad` practice. To avoid this, we can use `React Context` or `Redux`.

## React Context 
It is like a `global place` and anybody can `access` the data from it. It is a way to pass data through the `component tree` without having to pass props down manually at every level. For example, `authenticated user`, `theme`, `preferred language`, etc.
### createContext
It creates a `context object`. When React renders a component that subscribes to this Context object it will read the `current context` value from the closest matching `Provider` above it in the tree. You can create multiple context objects. does not `put all data` inside context, only the data that is needed by multiple components. 
```js
const MyContext = createContext(defaultValue);
```
There are `2 ways` to access the data from context:
- `useContext hook`: It can only be used inside a functional component.
```js
const value = useContext(MyContext);
```
### Context.Consumer
It can used inside a class component as well as functional component.
```js
<MyContext.Consumer>
    {value => /* render something based on the context value */}
</MyContext.Consumer>
```
### Context.Provider
It is used to `modify` the value of context. For using it `import` your context component and wrap the component where you want to use it by `Context.Provider` and pass the `value` as a prop.
```js
import myContext from 'path';

const App = () => {
    return (
        <MyContext.Provider value={/* some value */}>
            <ChildComponent />
        </MyContext.Provider>
    )
}
```
- You can use `nested Provider` for some specific part of the component tree.
- Also you can pass function as props to the context provider.
