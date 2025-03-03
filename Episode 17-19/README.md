# Project YouTube Clone
In these episodes, I build a YouTube clone. 
- Source code for the project is available at [GitHub](https://github.com/opdsbanasya/OpTube.git)
- In this project, I learned following topics:
    - [How to attempt machine coding round](#machine-coding-round)
    - [Higher Order Components](#higher-order-components)
    - [Debouncing](#debouncing)
    - [Cache storage](#cache-storage)
    - [Recursion - n level nested comments](#recursion)
    - [Live Chat](#live-chat)
    - [Web Socket](#web-socket)
    - [API Polling](#api-polling)

## Machine Coding Round
- **Machine coding round** is a coding round where you are given a problem statement and you have to write code to solve the problem.
- The problem statement is generally a real-world problem and you have to write code to solve the problem.

### Practices
- Before start a project following keep in mind:
    - **Understand the problem statement**
    - **Requirement Clarification**
        - Features
        - Tech Stack
            - For example in project, I use `React` for `UI`, `Redux` for `state management`, `React-Router-Dom` for `Routing`, `Tailwind css` for `styling`,` YouTube APIs` for `Data`.
    - Low-level design
        - Do a rough sketch of the project
        - How the project will look like
        - How the project will work

## Higher Order Components
Component that takes a component and return a new component with som additional props, state or functionality.
- **Example:** 
    - Video.js
    ```jsx
    const Video  = () => {
        return (
            <div>
                <h1>Video</h1>
            </div>
        )
    }
    ```
    - AdVideo.js
    ```jsx
    const AdVideo = (Video) => {
        return (
            <div>
                <h1>AdVideo</h1>
                <Video />
            </div>
        )
    }
    ```

### Need of Higher Order Components
Suppose you have a that contains some User Cards, Now you want to add label for premium users, Then You can do this easily by Higher Order Components, There no need to create new Component or code changes.

- UserCard.js
```js
const UserCard = () => {
    return <div>
        <h1>{name}</h1>
    </div>
}
```
- PremiumUserCard.js
```js
const PremiumUserCard = (UserCard) => {
    return <div>
        <h3>Premium</h3>
        <UserCard /> 
    </div>
}
```
- Users.js
```js
const Users = () => {
    return isPrimium ? <PremiumUserCard />:<UserCard />
}
```

## Debouncing
- When you are doing events very fast than webs skip some events, this phenomenon known as `Debouncing`
- **For example**, when you type in search bar to search slowly, there API calls make with every key stroke and give suggestions to you. Other hand you type very fast, it skip API calls for some key strokes.
- There are number of API calls is then length of search query because difference between 2 keys trikes very less than those are skips.
- If there are call API for intermidiate result, it does not make sense becuase you are typing fast and you don't need suggestions.
- **Debouncing with 200ms**: If difference between 2 key strokes is 200ms:
    - `<200`: Decline API call
    - `>200`: Make API call
- **Example:**

```js
useEffect(()=>{
    const timer = setTimeOut(()=> {
        getSearchSuggestions()
    }, 200)

    return ()=>{
        clearTimeOut(timer);
    }
},[searchQuery])
```

- **Working**
    - key: i
        - component rendering
        - start timer => make api call after 200ms
    - key: ip
        - destroy the component (useEffect return the method)
        - re-render the component
        - useEffect() called
        - start timer => make api call after 200ms 

## Cache storage
- If you store results in cache memory, does not need to make API call.
- There I use `Redux` to cache, create a slice, add it to store.
- Add result of every API call to cache, and if user again do same query fetch from here, if query is not there than make API call.
- Set a limit of number of queries for cache, otherwise it can slow your app.
- **Example:**

```js
if(cacheSearch[searchQuery]){
    setSuggetions(cacheSearch[searchQuery]);
} else{
    // make API call
}
```

### LRU

## Recursion
When a component called inside self, known as Recursion.
- Example:
```js
const Component = () => {
    return <div>
        <p>Comment</p>
        <p>Replies</p>
        <Component />
    </div>
}
```

## Live Chat
### Web Socket

### API Polling

