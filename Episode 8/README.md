## Class Based Component
- It is older way of writing component.
- It is normal javascript class which extends React.Component.
- It has render method which returns JSX.
```javascript
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}
```
- There is no difference in import/export.

## Receiving Props
- class based components receive props in constructor.
- make sure to call super(props) in constructor.
- props are accessed using this.props.
- Loading a class component mean creating an instance of class.
```javascript
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>t
        );
    }
}
```

## Creating State
- State variables creating inside constructor using this.state.
- this.state is object which contains all state variables.
- State variables are accessed using this.state.variableName.
- NEVER update state directly, always use this.setState.
```javascript
constructor(props) {
    super(props);
    this.state = {
        status: "active",
    };
}
return (
    <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={()=>{
            this.setState({
                status: status: "active" ? "inactive" : "active",
            })
        }}>
    </div>
);
```
- you sent a state variable to update their state then react only update that variable without touching other variables.

## Lifecycle Methods
### componentDidMount
- It is called after component is mounted.
- If parent and child both are class based components than life cycle methods are called in following order.
    - Parent constructor
    - Parent render
    - Child constructor
    - Child render
    - Child componentDidMount
    - Parent componentDidMount
- It is used to make API calls because first we laod the component with basic data and then we make API calls and fille new data in component. componentDidMount is called after render so we can make API calls in it.

- If parent have multiple instances the the lisfe cycle methods are called in following order.
    - Parent constructor
    - Parent render
        - Child 1 constructor
        - Child 1 render
        - Child 2 constructor
        - Child 2 render
        - Child 1 componentDidMount
        - Child  2componentDidMount
    - Parent componentDidMount

### Phases of React Component
There are two phases of react component.
1. Render Phase
    - constructor
    - rendering
2. Commit Phase
    - Update the DOM
    - componentDidMount

### componentDidUpdate
- It is called after component is updated.

### componentWillUnmount
- It is called when the page gone unmount means when we naviage to another page.

**NEVER** ever compare class component life cycle with functional component life cycle.
**-->**     useEffect (called every render if no dependency array) != componentDidMount (once mount, and call after update with rerender)

- In class component we use if else istead of dependency array inside componentDidMount.
```javascript
componentDidMount(prevProps, prevState){
    if(this.state.status !== prevState.status){
        // code
    }
}
```
#### use of componentWillUnmount
When we leaving the page we need to clear lot of thing like :
- clearInterval is one of them. because SPAs are not reloading and we need to clear the interval when we leave the page. Than we clear the interval in componentWillUnmount.
```javascript
componentDidMount(){
    this.interval = setInterval(() => {
        console.log("Hello");
    }, 1000);
}
componentWillUnmount(){
    clearInterval(this.interval);
}
```

we facing same problem in useEffect. So, we use useEffect with return statement.
```javascript
useEffect(() => {
    const interval = setInterval(() => {
        console.log("Hello");
    }, 1000);
    return () => {
        clearInterval(interval);
    }
}, []);
```

hw
- why do we write super(props) in constructor.
- why we use this.props in render method.
- why we can't use async in useEffect.
