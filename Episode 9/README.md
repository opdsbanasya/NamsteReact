# Optimising our App
## Single Responsibility Principle
- _A single entity takes single responsibility._
- For example, ResMEnu is a component that has a single job to display the menu of restaurants.
- This is a good way to maintain the code in mosular passion, means breakdown the code into small modules.
- When we apply test cases, it will be easy to test the code, or easy to catch the bug.
- _SRP_ makes code reusable, testable, and maintainable.

## Custom Hooks
- Hooks are just a utility function that can be used to share logic between components.
- We can create our own hooks.
- When you creating a hook, you should start the name of the hook with 'use'. It in not mandatory but it is a convention. If you don't start the name with 'use', then React will not be able to identify it as a hook or linter will give you a warning if you are using eslint.
- Let's create a custom hook for fetching data from the server:
```javascript
const useResMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () =>{
        const data = await fetch(api);
        const json = await data.json();
        setResInfo(json);
    }

    return resInfo;
}
export default useResMenu;
```
- First finilise the `Input` and `Output` of your hook then start writing the code.
- In the above code, we have created a custom hook `useResMenu` that takes `resId` as an argument and returns the `resInfo` object.


## Optimising the App
Basically, bundlers like parcel etc. are minified our code into single file, and it becomes a large size file that can take lot of time to load. When you build large scale Apps make sure to break down your app into small pieces.
    - Should bundle your thousand file.
    - Should not bundle thousand file into single file.
Means, try to make smaller bundles of your files, this process known as `Chuncking`, `Code Splitting`, `Lazy Loading`, `Dynamic Bundling`, `On Demand Loading`, `Dynamic Importing`

- make small bundles for a specific feature, and load them when needed.

## lazy loading
- Lazy loading is a technique in which you load the code only when it is needed.
- The Component not imported diractly, it is imported using `lazy()` function.
```javascript
import { lazy } from 'react';
const Grocery = lazy(()=> import('./Grocery'));
```
- This one line of code make separate bundle for the `Grocery` component, but this code gives an error on page because when we load the page, we got only single bundle that does not contain the `Grocery` component. When `Grocery` Component is loaded on user-demand, it take some time to load, and react is fast, so react quickly write component logic, but there is no bundle found for the `Grocery` component, so it gives an error.
- To resolve this error, we use **`Suspense`** component that will show a loader until the component is loaded.
- **fallback** prop of `Suspense` component is used to show the loader.
```javascript
{
    path: '/grocery',
    element: (
        <Suspense fallback={<div>Loading...</div>}>
            <Grocery />
        </Suspense>
    )
}
```
hw 
make a hook for fetch data for body ✅
make a hook without 'use', mean try to change the name of the hook ✅