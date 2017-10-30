# Bits

## Deployment to S3 & Cloudfront.

Includes a new Docker Compose based dev env.

Deploys to: https://static.raspberrypi.org/styles/Bits/<version> via:

    docker-compose run web ./deploy.sh

(where <version> is taken from package.json & ENV vars are in .env which needs to be created from .env.example)

eg: https://static.raspberrypi.org/styles/Bits/1.0.0/Bits.min.css

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
