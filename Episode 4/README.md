## Aproch to write React Components
- First do all planning before writing code.
- Figure out all the components you need.
```plaintext
Header
    - Logo
    - Navigation
Body
    - Search
    - RestraurentContainer
        - RestraurentCard
Footer
    - SocialLinks
    - Contact
    - CopyRight
```
# Props
- Props are used to pass data from parent to child component.
- Can say props are just `arguments` to a function.
- React wrpaps props in an object and pass it to the component.

## config Driven UI
- Controlling the Web UI using config data that comes from the server.
- Large scale applications have a lot of config data.

## Hardcoded Data vs Dynamic Data
### Hardcoded Data
- Data that is written in the code itself.
- Data is static and does not change.
- Data is not fetched from the server.

### Dynamic Data
- Data is not written in the code.
- Data changes frequently.
- Data that is fetched from the server.

## Swiggy Data Used
In this Episode, I was using the data from Swiggy API to display the restraurent data of my city. I displayed the data in form of cards. Each card contains the restraurent name, rating, delivery time, delivery charges, and the type of food they serve. In this Episode I learn about props and also about how to display dynamic data in the form of cards using React Components.



