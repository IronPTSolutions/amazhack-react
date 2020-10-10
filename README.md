![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Amazhack React

In this exercise, we will be developing the front-end side for our Amazhack application. You can find the API [here](https://github.com/IronPTSolutions/amazhack-api), go ahead and clone it and launch it locally! Make sure that your local Mongo instance is running.

## Learning goals

The goals for this exercise are:

- To interiorize "global state" and how to use it in your routes
- To see first-hand how as our application grows, using a state in the App component as a global state can be a pain
  - Prep for next week's Context lesson!
- To get used to making API calls from our React application and where they belong in our component's structure
- To get familiar with React Hooks!
  - This lab **should be coded using only functional components**

## Guidelines

This repo contains a scaffolding for your application. You will see that some parts have been already developed, and there's some comments guiding you:

- Basic App.jsx, with BrowserRouter already plugged in and two basic routes
  - This component says that **one of the routes shouldn't be available for non-authenticated users**
    - Maybe we should create some **wrapper** for a route that returns you to the login page when you're not allowed to access it
  - There is no way yet in the app to **share authentication status between all screens**!
    - We currently have no way of sharing state between multiple components...
    - But we can **pass props to routes** the following way:
  ```jsx
  	const [myState, setMyState] = useState("initialValue");
  	...
  	<Route path="/myroute" render={(props) => <MyRouteComponent {...props} myState={myState} />} />
  ```
  - This component should also render a `Header` component
    - This `Header` should **change depending on the authentication status**:
      - Authenticated: display the user's email and a **log out** button
        - What should we do when we click that button?
      - Non-authenticated: display a log in button that takes the user to the log in screen
      - You can use [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react) for icons
- A Login screen, which uses an API service method to authenticate the user
  - This screen looks pretty dull, so you can give it some style editing `App.css`
    - If you have time, take a look at [Sass](https://sass-lang.com/guide), specially the "Nesting" section
      - You will have to install `node-sass` first:
    ```bash
    npm install node-sass
    ```
  - We don't currently use the return value of the login API call... What a waste!
    - It returns the user if authentication went OK
    - Again, remember the [Lifting State Up lesson](https://reactjs.org/docs/lifting-state-up.html)
- A Products screen, which currently does nothing! It just displays a Loading message.
  - We can see that this screen has a state, `productsList`, that is an empty array by default
  - This screen uses **conditional rendering** to return two different JSXs depending on the value of `productList`
  - This `productList` is currently **never updated**, maybe we should! **Hint**: we have a `getProduct` method in our API service.

I recommend that you follow the following order:

1. Create a `user` state in our App component using `useState`
2. Lift the user we got from the API call from our Login component to the App component using a prop function
3. Create the `Navbar` component that receives this user as a prop and renders conditionally depending on it
4. Create an authentication guard for our routes. Here's how it should be used:
	```jsx
	<AuthenticatedRoute path="/myAuthenticatedRoute" user={user} component={MyAuthenticatedComponent}/>
	```
5. Use it for the `/product` route
6. Finish the `ProductList` component

## Extra

If you have some extra time, you know there's a lot more endpoints in our API that you can use!:

- **Product detail**. We could navigate to this screen when clicking on a product card.
- **Product edition**. Only the user that published that product should be able to edit it!
- **Product deletion**. Same as before.
- **List product reviews**. This should probably go in the product detail screen.
  - We could also display the average score of a product in its card in Product list and in its product detail screen.
  - We could also aggregate the reviews by score and display them.
- **Add review to product**. This could go in the product detail screen or in a different specific route.
- **User profile**. We should be able to display the current user's profile and another user's profile by clicking their name.
  - These views should have some differences depending on whether it's the authenticated user or a different one:
    - Delete/edit buttons for products
    - Delete/edit buttons for reviews
    - Edit profile button
      - Note: this route currently doesn't exist in our API! Maybe implement it?
- **User sign up**. There's no sign up route in our API! Maybe implement it too?
