# Redux 
- Redux is a data management library that can be used with any UI library or framework, including React.
- Redux & React are both different libraries, Redux is a state management library, while React is a UI library.
- Other libraries like Zustand, MobX, Recoil, etc. can also be used for state management.
### need?
- Redux is not mandatory for React. If you are building small or even mid size applications, you don't need Redux, but if you are building a large application, Where lot of read & write opearations done between components then you should consider using Redux.

- **Redux provides 2 Libararies:**
    - React-Redux: Official library for React bindings(Vanilla Redux).
    - Redux-Toolkit: Redux improve self in world of modern React. Redux toolkit help to address 3 common problems about Redux.
        - Configuring a Redux store is too complicated.
        - I have to add a lot of packages to get Redux to do anything useful.
        - Redux requires too much boilerplate code.
- Read more about [Redux Toolkit](https://redux-toolkit.js.org/)

## Redux Store
- It is big whole JavaScript object that conatains lot of data inside it and it is kept in a central global place.
- The Redux store is the heart of the Redux application. It is a single source of truth for the state of the application.
- The store have small portions that known as **`Slice`**. There can be lot of slices in a store, and these slices can be empty or can have data.
### Operations inside the Redux Store
- **`Write Operation`**: We can't directly write data to the store, here we have a way to write, Suppose we want to built a feature to add items in the cart, then we have to dispatch an action to the store, and then the store will update the data. When we click on add button, it dispatches an action to the store, and it call a function and this function internally modify the cart slice. These functions are known as **`Reducer`**.

- **`Read Operation`**: For reading operation, we use `useSelector` hook, which is provided by `react-redux` library. It read the data from the Redux store and give the data to the component and update the UI. This phonomena is known as **`Subscribing to Store`**, Means it sync the data between store and component. If data changes in store then it automatically update the component.

- See the below Image for better understanding of Redux Store
![Redux Store](./src/assets/workingOfReduxStore.jpg)

## Step to use Redux in React
- Install Libraries
- Build the Redux Store
- Connect the Redux Store to the React App
- Create Slices & add to the Store
- Dispatch Actions
- Subscribe to the Store

### Installing the Redux Library
Just run following commands in the terminal
```terminal
npm install @reduxjs/toolkit react-redux
```

### Building the Redux Store
- Create a folder named `store` in the `src` folder.
- Create a file named `store.js` in the `store` folder.
- Use the `cinfigureStore` function from `@reduxjs/toolkit` to create the store.
```JS
import { configureStore } from '@reduxjs/toolkit';

const appStore = configureStore();

export default appStore;
```
### Connecting the Redux Store to the React App
- Wrap the `App` component with the `Provider` component from `react-redux`.
- Pass the `store` prop to the `Provider` component.
- If you want to provide the store to a small portion just wrap that portion with `Provider` component.
```JS
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Redux Store</h1>
            </div>
        </Provider>
    );
}
```
### Creating Slices & Adding to the Store
- Create a folder named `slices` in the `store` folder.
- Create a file named `cartSlice.js` in the `slices` folder.
- Create a slice using the `createSlice` function from `@reduxjs/toolkit`.
- `createSlice` function takes an configuration object as an argument with 3 properties: `name`, `initialState`, and `reducers`.
- `name` is the name of the slice.
- `initialState` is the initial state of the slice.
- `reducers` also an object where all type of actions(like small APIs to communicate to redux store) are defined.
- Reducers functions are take `2 arguments` as an input, `state` and `action`.
- At the end of we have to export the `actions` and `reducer` from the slice.
```JS
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice;
```
- Now, we have to add this slice to the store. Store have own reducer and consists to all small reducers from different slices.
- We have to import the `cartSlice` in the `store.js` file and add it to the `reducer` property of the `configureStore` function.
```JS
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const appStore = configureStore({
    reducer:{
        cart: cartReducer,
    }
});

export default appStore;
```
### Subscribing to the Store
- Use the `useSelector` hook from `react-redux` to read data from the store, but need to tells the portion which portion of the store we want to read.
```JS
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItems = useSelector(store => store.cart.items);
    return (
        <header>
            <h1>Cart</h1>
            <p>{items.length}</p>
        </header>
    );
}
```
