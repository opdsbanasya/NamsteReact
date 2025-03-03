# Advance Hooks 🪝

## 🧠 `useMemo` 

- _It is a React hook that lets you cache the result of a calculation between re-renders._
- If you want to cache the result of a calculation between re-renders, Why there your app do calculation every time it renders, because it can be an expensive operation and it will take time, sometime crash your app.
- **Exmaple:**
  - Let suppose you want to find `nth-prime number`, there take `n` in input by user, It is a heavy opeartion. till 6 digit number it can be take less time but after that it will take time.
  - On the other hand, you have a button to toggle theme of your app. If you click on button, the component is re-rendered and the app again calculate the `nth-prime number` which is not necessary. It can freeze your app and it provide bad user experience.
- Such type of problem can solved by `memoization` and `useMemo` hook is there for React Apps.
- **Syntax:**

```js
import React, { useMemo } from "react";
const cache = useMemo(calculateValue, [dependencies]);
```

- **Example:**

```js
import React, { useState, useMemo } from "react";
import { findNthPrime } from "./utils/findNthPrime";
const App = () => {
  const [number, setNumber] = useState(0);
  const [toggleTheme, setToggleTheme] = useState(false)

  const prime = useMemo(()=> findNthPrime(number), [number])

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        className={`${toggleTheme ? "bg-black" : "bg-purple-700"}`}
        onClick={() => setToggleTheme(!toggleTheme)}
      >
        Toggle
      </button>
    </div>
  );
};
```
- You can see the [source code](./src/Components/Box.js)

## 🧠 `useCallback`
- Cache the function definition between re-renders same as `useMemo` but it is used for functions.
- **Syntax:**

```js
const cache = useCallback(() => {
  // function body
}, [dependencies]);
```

## `useRef` 🔗
- Lets you reference a value that not need to re-render.