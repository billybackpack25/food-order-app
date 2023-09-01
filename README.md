# food-order-app

Basic React food ordering system

# How to run the app?

- clone this repo `git clone git@github.com:billybackpack25/food-order-app.git`
- Go into the `food-order-app` directory
- Install dependencies `npm i`
- Run the app `npm run start`
- Access the app from `http://localhost:3000`

# Other branches

- Checkout the backend integration on branch with-backend

# With Backend

Very simple setup for checking out, little to no thought on styles, this just focuses on using firebase to fetch meals and checkout cart.

`If you want to run this branch, you'll need the REACT_APP_FIREBASE_DATABASE environment variable`

- Fetching meals from firebase
- Handling checkout with firebase

- Modal stepper hook
- Meals hook
- Http hook
- Checkout hook
- Cart context
- Cart reducer + actions
  - Immer to mutate state
