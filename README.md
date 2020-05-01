User list built with react for technical test.<br />
It uses [https://reqres.in/](reqres.in) api to retrieve users

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What inside

The project is built with the recommendations technical test libraries and some personal choices:

* `react`: as ui library
* `react-router`: to handle navigations
* `redux`: to manage application global state
* `reselect`: to optimize `redux` selectors
* `redux-saga`: to separate `redux` actions of the async logic
* `connected-react-router`: to manage router state from `redux`
* `redux-dynamic-modules`: to load / unloads `redux` reducers and sagas to code splitting
* `styled-components`: to create components styles
* `css vars`: to handle themes variables and media queries. They are a powerful tool :)
* `storybook`: for develop components in isolation mode and doc them.
* `@testing-library/react`: to do the tests

## Getting started

Clone the repository

```zsh
git clone https://github.com/samuelsantia/react-users-list-test.git
```

Go to the source folder and install dependencies

```zsh
cd react-users-list-test
npm install
```

Start development server to develop the app

```zsh
npm start
```

Start storybook to develop components in isolation mode

```zsh
npm run storybook
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run storybook`

Launches storybook server to develop components in isolation mode

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
