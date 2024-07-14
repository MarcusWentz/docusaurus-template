# Shardeum Documentation Site

This website is built using [Docusaurus 3.4.0](https://docusaurus.io/), a modern static website generator.

### Installation

Node Version 18.0.0
```
nvm use 18.0.0
```
Install npm packages:
```
npm install
```
or
```
npm install --legacy-peer-deps
```

### Local Development

```
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
USE_SSH=true npm run deploy
```

Not using SSH:

```
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Search Bar

Add Algolia Search Bar with API Key:

https://docusaurus.io/docs/search#connecting-algolia

Search bar support without Algolia API Key (loads after deployed to production):

https://github.com/praveenn77/docusaurus-lunr-search
