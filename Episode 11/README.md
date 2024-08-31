# Data Management in React

## Higher Order Components

- These are the function that takes a input as a argument and return a enhanced component.
- These are normal JavaScript functions.
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

- `Data management` is an important part of a React application. A react app have 2 layers:
    - **UI Layer**: It is the layer that is visible to the user. UI layer is very static, it does not have own logic. It is powered by Data layer.
    - **Data Layer**: It is the layer that is responsible for managing the data. It is dynamic and have own logic. It consists state management, data fetching, data manipulation, etc.

## Creating a accordian component
When you collapse and expend a part of UI, known as accordian. It have 2 parts - `Header` and `Body`. When you click on header, body will be shown and hide.

## React-devtools
- It is a browser extension that allows you to inspect the React component hierarchy in the Chrome Developer Tools.
- It gives 2 tabs:
    - **Components**: It shows the component hierarchy. It have the 2 layers - `UI Layer` and `Data Layer`.
    - **Profiler**: Whatever you will do inside app, it try to record all the activities and show in the profiler tab.
