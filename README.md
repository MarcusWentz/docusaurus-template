# Shardeum Documentation Site

This website is built using [Docusaurus 3.6.3](https://docusaurus.io/), a modern static website generator.

### GitHub Pages Hosted Website

https://marcuswentz.github.io/docusaurus-template/

### Installation

Node Version v22.2.0
```
nvm use v22.2.0
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

### GitHub Pages Deployment Guide

1. Go to the following project path as an admin to a GitHub repo:

`https://github.com/"repo-owner"/"repo-name"/settings/pages`

2. On that page, find

```
    Build and deployment
        Source
```

then click the drop down options to click 

`GitHub Actions`

3. Copy YAML files:

```
deploy.yml
test-deploy.yml
```

into:

`.github/workflows/mdbook.yml`

from this guide under:

`Same > Github action files`

and modify files from yarn to npm as shown in the guide

```
If you use npm, change:
    -cache: yarn, 
    -yarn install --frozen-lockfile, 
    -yarn build 
to 
    -cache: npm, 
    -npm ci, 
    -npm run build 
accordingly.
```

here:

https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions

### Search Bar

Add Algolia Search Bar with API Key:

https://docusaurus.io/docs/search#connecting-algolia

Search bar support without Algolia API Key (loads after deployed to production):

https://github.com/praveenn77/docusaurus-lunr-search
