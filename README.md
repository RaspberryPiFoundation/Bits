# Bits

## Deployment to S3 & Cloudfront.

Includes a new Docker Compose based dev env.

Deploys to: https://static.raspberrypi.org/styles/Bits/<version> via:

    docker-compose run web ./deploy.sh

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
react: ^0.14.9 || ^15.0.0 || ^16.0.0
react-dom: ^0.14.9 || ^15.0.0 || ^16.0.0
react-router-dom: ^4.2.2
prop-types: ^15.5.4
```

----

### Dev Notes

* Using iota-react for all the super low-level stuff - all colors,
  paddings/margins/font families/text styles/grid system all done for us
* Should be as few styles defined at component level as possible
* Everything is functional and stateless
* shelving idea of doc site for now - Gatsby was playing up anyway
* most important thing is this is built and ready to use - has to happen quickly
* shelving docs site will mean time can be spent on tests
* docs will still exist in the form of README files in each component
* docs site can happen as a future block of work/web week task
* won't be providing compiled assets - React is the more likely use case for now
* if we need these styles in older sites then we can look at a build tool that sticks it on a CDN somewhere with version number
