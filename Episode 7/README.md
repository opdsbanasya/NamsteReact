## react-router-dom
- It is a library that allows you to create routes in your application.
- Routes are used to navigate between different components.
- You need to install the library using the following command:
```bash
npm install react-router-dom
```

## createBrowserRouter
- It is a coponent that provided by react-router-dom.
- It create Router for your application.
- It is used to wrap the entire application.
- Syntax
```JS
import {createBrowserRouter} from 'react-router-dom';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    }
]);
```

## RouterProvider
- It is a component that provided by react-router-dom.
- It is used to provide the router to the application.
- Syntax
```JS
import {RouterProvider} from 'react-router-dom';

root.render(
    <RouterProvider router={appRouter} />
);
```

## useRouteError
- It is a hook that provided by react-router-dom.
- It is used to handle the error in the route.
- Syntax
```JS
import {useRouteError} from 'react-router-dom';

const ErrorPage=()=>{
    const error = useRouteError();
    return <div>{error.message}</div>
}
```

## childrenRoutes
These are the routes that are nested inside the parent route.
```JS
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        childen: [ pass the children routes here ]
    }
]);
```

## Outlet
- It is a component that provided by react-router-dom.
- It is used to render the child routes.
- Whenever pathe changes, the outlet fills the component that matches the path.
- Syntax
```JS
import {Outlet} from 'react-router-dom';

const App=()=>{
    return (
        <div>
            <h1>Header</h1>
            <Outlet />
        </div>
    );
}
```

## useParam
- It is a hook that provided by react-router-dom.
- It is used to get the parameter from the URL.
- Syntax
```JS
import {useParam} from 'react-router-dom';

const User=()=>{
    const {id} = useParam();
    return <div>{id}</div>
}
```

## Link
- It is a component that provided by react-router-dom.
- It works like an anchor tag.
- Link does not refresh whole page, so react applications are known as single page applications.
- Behind the seen Link uses anchor tag, can say it is a wrapper around anchor tag.
- Syntax
```JS
import {Link} from 'react-router-dom';

const App=()=>{
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}
```

## 2 type of routing
- **client side routing**: It is used to navigate between different components without refreshing the page.
- **server side routing**: You make a network call to webpage that comes from the server.