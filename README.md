# Smaply Test Task

## Dev setup -

### Install Dependencies

```
npm install or yarn install
```

### Start the dev environment

```
yarn run dev or npm run dev
```

The dev server will come up at localhost:5173

## Dev Environment

- yarn - v1.22.19
- NodeJS - v20.15.1
- Ubuntu 20.04

## Dev Comments

- Used index.ts in various files just to have a kind of modular formatting
- Tried to declutter logic and JSX on some files whic were becoming very big all at once
- Components are of two types - atoms and compounds. Atoms are single elements very small ones while compounds are complex components that can be fairly reused as well
- Used react quill rich text editor
- utilised some debouncing hooks and optimised how the events and rendering happens
- utilised a dynamic data structre to handle both the cards differently in different columns. This has more scope for optimisation based on use case
- A substantial time elapsed in tailwind config and removing a bottleneck of the inline styles removal as tailwind config was ot very clear on docs and mismatch of opinions about it like an example [here](https://stackoverflow.com/questions/72481680/tailwinds-background-color-is-not-being-applied-when-added-dynamically) `This problem was finally solved by exploring tailwind library`

## What can be improved if more time is provided

- yjs collaboration havent added due to time considerations as this has a substantial learning curve
- Designs can be further inch tweaked and made closer including responsiveness.
- Not implemented Left menubar as found no reference of it in the task description
