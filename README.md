# GitStart Engine App

[![Codecov Coverage](https://img.shields.io/codecov/c/github/GitStartHQ/client-gitstart-engine-app.svg?style=flat-square)](https://codecov.io/gh/GitStartHQ/client-gitstart-engine-app/)

## Setting up the development enviroment

### Running the app

- Set up your env file:
  - Run `cp .env.example .env`
- Use `yarn run codegen` to generate files in lib/graphql/generated
- Run `yarn run dev`
- The app should start at http://localhost:3000

### Working with Theme

The UX / UI of the project are based on a theme which lives in `src/template/...` and is linked by pages under `src/pages/template/...`. To go to the theme, start the project and go to https://app.gitstart.dev/template/overview to see the theme rendered with dummy data. 

To use the theme components in your code, use the following guidelines:

- Do NOT modify any files inside the template except minor changes such as exporting components or minor conditions. IF you want to modify more then usual, then copy over the associated code into `src/components/...` and then make the required modifications (While still importing as much of theme code as possible
- Goal is to re-use 100% of the theme styles as its already responsive. Always look for components in the theme before creating a new one (and suggest changes in ticket to use more of the theme components)

### Documenting Components with Storybook

- Create a file with `.stories.tsx` extension
- Import react and the necessary packages
- Import the component to be documented
- Document the component by using the storyOf method
- Run `yarn storybook` to start the storybook server.
- The app should start on the browser on a port
- Checkout documentation on `https://storybook.js.org/docs/guides/guide-react/`
