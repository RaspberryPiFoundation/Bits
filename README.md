# Bits

## FONTS

Bits doesn't include the CSS for requiring fonts from the Google Fonts CDN.

In the interests of performance, it's best to include these in the HTML so we can prompt the browser to be smarter about connecting and downloading these assets. Use this HTML snippet for MAXIMUM PERFORMANCE:

```html
<link rel="preconnect stylesheet" href="https://fonts.googleapis.com/css?family=Rubik:300,500,700|Space+Mono" media="all" type="text/css" crossorigin />
```

## Deployment to S3 & Cloudfront.

Includes a new Docker Compose based dev env.

Deploys to: https://static.raspberrypi.org/styles/Bits/<version> via:

`docker-compose run web ./deploy.sh`

(where <version> is taken from package.json & ENV vars are in .env which needs to be created from .env.example)

eg: https://static.raspberrypi.org/styles/Bits/1.0.0/Bits.min.css

## Local Development

You can use gulp to watch the scss files & rebuild as necessary:
```
npm run gulp:watch
```

Before creating a PR, make sure you run:
```
npm run build
```
to build all the css & javascript files.

## Local Development in another app

**Taken from the README of https://github.com/transitive-bullshit/react-modern-library-boilerplate**

### Setup this repo for local linking

In the root of this directory, run the following:

    npm link # the link commands are important for local development
    npm install # disregard any warnings about missing peer dependencies
    npm start # runs rollup with watch flag

### Consume this repo in your local slash-learning-ui

In the root of the slash-learning-ui repo, run the following

    npm install
    npm link raspberry-pi-bits

You're now ready to start the development server and use raspberry-pi-bits in your React components.

    npm run dev # runs create-react-app hot-reload dev server

Now, anytime you make a change to your component in src/ or to the example application's example/src, create-react-app will live-reload your local dev server so you can iterate on your component in real-time.

### Releasing

Before merging a PR, make sure you've updated the `version` in `package.json` & the [changelog](./CHANGELOG.md).
Also make sure you've run `npm run build`.
Then once the PR is merged:
* Create & push a tag for the release
  ```
  git tag -a v1.1.10 -m "Release version 1.1.10"
  git push origin --tags
  ```
* Create a release in github:
    * Visit the [repository releases page](https://github.com/RaspberryPiFoundation/Bits/releases)
    * Click "Draft a new release"
    * Select your release tag
    * Use the release version as the title
    * Fill in an appropriate message to describe the changes
    * "Publish release"
* Create a new version of the minified styles on AWS
    * Make sure you have the environment varibles set appropriately in `.env` - you will need S3 access keys available from https://console.aws.amazon.com/iam/home?region=eu-west-1#/users/engineering?section=security_credentials
    * Build the docker container
      ```
      docker-compose build
      ```
    * Run the deploy script in the docker container
      ```
      docker-compose run web ./deploy.sh
      ```


## Usage in a React App

Bits requires the following peer dependencies to be installed in the host application:

```
classnames: ^2.2.5
prop-types: ^15.5.4
```
