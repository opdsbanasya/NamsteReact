## Monolith Architecture
- Single codebase
- Single deployment
- Single database
- Single point of failure
- Single point of scaling

## Microservice Architecture
- It is a collection of small services
- Each service is self-contained
- Each service can be deployed independently
- Each service can be written in different languages
- Each service can have its own database

## Separation of concerns and single responsibity principle
- Each service should have a single responsibility
- Each service should be separated from other services
- Each service should be independent

how do these services interact with each other


## useEffect
- After finishing of rendering of component, useEffect will be called.
- You need to first import it from react.
- useEffect takes two arguments, one is `callback function` and second is `array of dependencies`.
- If you pass an empty array, it will be called only once.
```JavaScript
useEffect(() => {
    // code
}, [])
```

## CORS
- Cross-Origin Resource Sharing
- It is a security feature implemented by browsers.
- The browser will block the request of an api call if the request is coming from a different origin.
- `CORS allow extension`: It is a chrome extension that allows you to bypass CORS.

## Shimmer Ui
It is a dummy UI that is shown to the user until the actual data is loaded.

## Conditional rendering
Rendering by a condition is called conditional rendering.
```JavaScript
{condition && <Component />}
```

## React will be render whole component. How react update constant variable in useState?
React render a whole a component and if you update a state, react rerender the component and re-initialize the state variable and assign new value. That's why react update the constant variable in useState.

---

## what in this Episode
In this Episode I learned about `Monolith` and `Microservice architecture`. I also learned about `useEffect`, `CORS`, `Shimmer UI`, `Conditional rendering` and `how react update constant variable in useState`.

Also, built a `shimmer UI` for the loading state of the app and built `search functionality` in out food app, 