# Project - NetflixGPT

## [click](https://github.com/opdsbanasya/NetflixGPT) to check the project

From Episode 14 to 16, I build a Project is `NetflixGPT`. In this project, I learned about the following topics:

## form validation

`Form validation` is the process of ensuring that user input is `clean`, `correct`, and `useful`. It is usually done by checking the input against a `set of rules`. If the input does not meet the rules, the form is considered `invalid` and the user is prompted to fix the errors. If you have a `large` form with many fields than you should consider using a form `validation library `like `Formik` or `React Hook Form`. But for small forms, you can use the `useRef` hook.

## useRef

`useRef` is hook that comes from `react`. It is used to create a reference to a DOM element or a value and to access a DOM element directly. It take a initial value that can be `null` or `undefined` and return an object that have single property `current object`. current have the element that you want `reference`. To make a reference to a `DOM element`, you can use `ref` attribute in the element and pass the `ref` object to it.

```js
import { useRef } from "react";

const Form = () => {
  const email = useRef(null);

  return (
    <div>
      <input ref={email} type="email" />
    </div>
  );
};
```

## Regex Expressions

In JavaScript, you can create a regex expression by using `/pattern/flags` syntax. Here is an example of regex expression that checks if the input is a valid email or not.

```js
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
```

---

## Authentication

- `Authentication` is the process of verifying the identity of a user.
- `Authorization` is the process of determining what a user is allowed to do.
- There are I use `Firebase` for authentication in this project. Firebase provides a `simple` and `easy` way to authenticate users using `email` and `password`, `Google`, `Facebook`, `Twitter`, and `GitHub`.
- Firebase is also provide `Hoisting` services.
- **Steps**:

  - Create a firebase project.
  - Enable `Email/Password` authentication.
  - Install `firebase` package.

  ```bash
  npm i -g firebase-tools
  ```

  - Initialize firebase in your project.

  ```bash
  firebase init
  ```

  - Create a `firebase.js` file and add the following code.

  ```js
  // You will found the code when you create a project in firebase.
  import firebase from "firebase/app";
  import "firebase/auth";

  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getAuth } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export const auth = getAuth();
  ```

---

## Deployment

To deploy your project, use the following command:

```bash
firebase login
firebase init
```

- This command ask following question to configure your project:

  - ? **Which Firebase features do you want to set up for this directory?**
    - _Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys_
  - ? **Please select an option:**
    - _Use an existing project_
    - _It show all projects that you have created in firebase dashboard._
  - ? **What do you want to use as your public directory?**
    - _Give the path of your `build` or `dist` folder._
  - ? **Configure as a single-page app (rewrite all urls to /index.html)?**
    - _No_
  - ? **Set up automatic builds and deploys with GitHub?**
    - _No_

- After these questions it create a `firebase.json` and `.firebaserc` files in your project root directory.
- Now need to build your project.

```bash
npm run build
```

- Now deploy your project.

```bash
firebase deploy
```

- Now your project is live on the internet. In the terminal, you will see the URL of your project.

---

## Implementing Authentication

- To implement authentication in your project, you need to create a `Sign Up` and `Sign In` form.
- You need to add `onClick` event on the `Sign Up` and `Sign In` buttons.
- Write follewing logic in the `onClick` event.

```jsx
const handleOnClick = () => {
  if (message) return;
  // There message is a state that show the error message.

  // sign in/up logic
  if (formType === "signup") {
    // Sign Up
  } else {
    // Sign In
  }
};
```

- To `Sign up` you need to import `auth` from `firebase.js` and call `createUserWithEmailAndPassword` method from `firebase/auth`. In firebase authentication, we have `auth = getAuth()`, everywhere in auth api and there need to pass getAuth() method every time. So, keep it in `firebase.js` and import it where you need.

### Sign up

It comes from `firebase/auth`. It is huge to create a oath by email and password. It take `auth(getAuth)`, `email`, `password`. This method returns a `Promise` that need to resolve or reject. If Promise resolved than auth created successfully, it give a `user` object and it `signin` automatecally. If There is an error than catch the error and show the error message.

```js
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + errorMessage);
  });
```

- Create an `user` slice and add it to the `store`. In the `user` slice, add following resucers:
  - addUser: return `action.payload` and set it to the `state`.
  - removeUser: return `null` and set it to the `state`.

### Sign in

We use `signInWithEmailAndPassword` method to sign in. it takes `auth`, `email`, & `password` and return a promise same as sign up. Implementation same as sign up.

```js
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + errorMessage);
  });
```

### `onAuthStateChanged`

It is also gives by firebase, This api is called whenever user sign in, sign up and sign out. Whenever auth state is changed, it used for manage users. Write it's logic on app level.

```js
uuseEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName, photoURL } = user;
      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
}, []);
```

### `useNavigate` hook

It comes from `react-router-dom`, used to navigate from one page to another page. It work inside Router.

```js
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
navigate("/browse");
```

### `signOut` method

There is also `signOut` method in firebase auth api. It is used to sign out the user.

```js
signOut(auth)
  .then(() => {})
  .catch((error) => {
    console.log(error);
  });
```

---

## Preventing navigation from url bar
Still the project has bug, an unauthorized user can access browse page by url. So, to fix it, we navigate inside onState change, there login user can navigate to `browse` page, otherwise is an unauthrized user try to navigate by url, automatically navigate to login page. But the onState chnage at the similar level than need to shift one level above, otherwise there can be got an error. There `Header` Component is present all over web, it is the right place for `onStateChanged`.

```js
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName, photoURL } = user;
      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
}, []);
```

- `onAuthStateChanged` is called every time and this reloads the `Header` component repeatedly, so you need to `unsubscribe`. There is an unsubscribe function in the Firebase documentation.

```js
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        // Code
    });

    return () => unsubscribe();
});
```
We unsubscribe whenever component unMount.

---

## Getting Movies from TMDB
- TMDB is an open-source movie database.
- Follow the steps:
    - First nedd to create an API key, create it.
    - Noe go to TMDB DOCs and find `API URL` of the data that you need like I need `now playing` movie data.
    - Now fetch the data by api
    ```js
    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_API_URL);
        const json = await data.json();
        console.log(json);
    }
    ```
    - Add the data into Redux store.
- **Always make hooks to fetch APIs and never use hardcode data in react Apps.**
- Breaking code into separate modules, known as `Modular Coding`.

---

## Add GPT API Into Our App
- First create a `search bar` and `button`, and add `onClick` event to button.
- Also create a gpt-slice, add it to store.
- Generate API key from [OpenAI Platform](https://platform.openai.com/docs/models/chatgpt).
- Install openAI modules by
```bash
npm i openai
```
- Initialze the openai
```js
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey:'[REPLACE BY YOUR API KEY]'
})

export default openai;
```
- Add this function to onClick event on Button.
```js
const handleClick = async () => {
    const results = await openai.chat.completions.create({
        message:[{
            role: 'user',
            content: 'REPLACE BY YOUR PROMPT'
        }],
        model: 'gpt-4o'
    })
}
```
- **Due to expensive prize of OpenAI Platform, there i used `Grok APIs` that based on Llama 3.2, is an open-source, implementation same as OpenAI.**
- We get results from `GrokAI` than , we need to get data from `TMDB`.

## Check out the source code from [NetflixGPT](https://github.com/opdsbanasya/NetflixGPT)

## References
- [Firebase Web Doc](https://firebase.google.com/docs/auth/web/start)
- [TMDB Doc](https://developer.themoviedb.org/reference/intro/getting-started)
- [OpanAI Platform](https://platform.openai.com/docs/models/chatgpt)
- [GrokAI Platform](https://console.groq.com/docs/text-chat)