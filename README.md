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

## Local Development using storybook

[Storybook](https://storybook.js.org/) is set up on this app to allow interactive development. To use it, run:
```
npm run storybook
```
and visit http://localhost:9001

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

## Usage in a React App

Bits requires the following peer dependencies to be installed in the host application:

```
classnames: ^2.2.5
prop-types: ^15.5.4
```
