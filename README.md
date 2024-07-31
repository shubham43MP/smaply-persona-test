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

## What can be improved if more time is provided

- yjs collaboration havent added due to time considerations
- Designs can be further inch tweaked and made closer including responsiveness.
- There are a few inline styles being used due to a tailwind config issue, those colors are not recognised so have used at a few places, and that
- Not implemented Left menubar as found no reference of it in the task description
