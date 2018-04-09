# Changelog

*The format of this document is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).*

## [v1.1.5](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.4...v1.1.5) - 2018-04-09

### Fixed

- CSS banner correctly outputs package author details

## [v1.1.4](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.3...v1.1.4) - 2018-04-08

### Added

- Minified CSS includes banner with version number

### Fixed

- Box shadow utility now actually has option for "none"

## [v1.1.3](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.2...v1.1.3) - 2018-04-05

### Fixed

- External urls were rendered as Router links and Internal urls were rendered as anchor links

## [v1.1.2](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.1...v1.1.2) - 2017-12-11

### Fixed

- Link has rpi styles
- Slice has bg color instead of transparency by defauly
- Card width set to 100%
- Border utility has options for "none"
- Box shadow utility has options for "none"

## [v1.1.1](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.0...v1.1.1) - 2017-12-11

### Fixed

- Link can accept `lightOnDark` as a prop
- Slice can accept `white` as a prop

## [v1.1.0](https://github.com/RaspberryPiFoundation/Bits/compare/v1.0.0...v1.1.0) - 2017-12-11

### Added

- THIS CHANGELOG - HOW META
- React component for `Figure`
- React component for `Hr`
- React component for `LightOnDark`
- React component for `Panel`
- React component for `Slice`
- `react-iotacss` lib now included - Bits exports its `Base`, `Container`, `Grid`, and `Media` components

### Changed

- Base styles updated - defaults to `sans-serif` font face if Rubrik is unavailable
- `Button` modifiers can now be specified with props
- Primary `Button` has light on dark hover styles
- `Button` can render a `Link`

## [v1.0.0](https://github.com/RaspberryPiFoundation/Bits/releases/tag/v1.0.0) - 2017-12-11

### Added

- EVERYTHING - this was the initial release. Includes iotaCSS config, base styles, components, a few React bits, and tools for developing locally. Too much to go into individually in this file!
