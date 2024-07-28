const heading = React.createElement("h1", {id:"heading"}, "Hello World! inside React");

// console.log(heading); // Object

const root = ReactDOM.createRoot(document.getElementById("root"))

// console.log(root); // Object

root.render(heading);

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am h1 elem"),
        React.createElement("h2",{},"I am h2 elem")
    ]),
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am h1 elem"),
        React.createElement("h2",{},"I am h2 elem")
    ])
])
root.render(parent)