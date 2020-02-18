_The format of this document is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html)._

## [v1.3.3](https://github.com/RaspberryPiFoundation/Bits/compare/v1.3.2...v1.3.3) - 2020-02-18

### Changed

- Added support for responsive iframe / video embeds via `.responsive-embed`, `.responsive-embed--video` and `.responsive-embed__iframe`

## [v1.3.2](https://github.com/RaspberryPiFoundation/Bits/compare/v1.3.1...v1.3.2) - 2020-02-17

### Changed

- Added `<blockquote>` support for `.c-wysiwyg`

## [v1.3.1](https://github.com/RaspberryPiFoundation/Bits/compare/v1.3.0...v1.3.1) - 2019-11-11

### Fixed

- Fixed warnings relating to interpolation of color vars in Sass selectors
- Fixed warning relating to `text-decoration-skip`

### Changed

- Update NodeJS version dependency
- Updated Gulp packages and config

## [v1.3.0](https://github.com/RaspberryPiFoundation/Bits/compare/v1.2.2...v1.3.0) - 2019-11-06

### Added

- `PrintPageBreak` component
- `c-print-page-break` styling
- `.prettierrc` config

### Fixed

- `NoPrint` and `PrintOnly` test root components and snapshots
- Changed `docs:serve` to `docs` in npm `start` task

## [v1.2.2](https://github.com/RaspberryPiFoundation/Bits/compare/v1.2.1...v1.2.2) - 2019-10-14

### Changed

- Added `disabled` styles for buttons as per Sketch doc

## [v1.2.1](https://github.com/RaspberryPiFoundation/Bits/compare/v1.2.0...v1.2.1) - 2019-10-09

### Changed

- Figure no longer stretches images beyond their intrinsic width

## [v1.2.0](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.20...v1.2.0) - 2019-07-05

### Changed

- Added documentation

## [v1.1.20](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.19...v1.1.20) - 2019-05-23

### Changed

- Add left margin to ul and ol to align with other text in wysiwyg

## [v1.1.19](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.18...v1.1.19) - 2019-05-22

### Changed

- Updates to many dependencies, including babel, rollup, jest, and node-sass

## [v1.1.18](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.17...v1.1.18) - 2018-12-14

### Fixed

- `c-input--option-button` components were inheriting the `min-height` rule introduced in v1.1.17 - this is now fixed

## [v1.1.17](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.16...v1.1.17) - 2018-12-11

### Changed

- `c-input`, `c-textarea`, and `c-button` all have `appearance: none` to remove some unwanted extra styling in iOS Safari.
- `c-input` and `c-select` have had their heights standardised

## [v1.1.16](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.15...v1.1.16) - 2018-12-06

### Changed

- Vertical sizing of `c-input` no longer dependent on line-height, which was causing IE to render inputs with vertically clipped text. Using padding instead.

## [v1.1.15](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.14...v1.1.15) - 2018-10-01

### Added

- `c-select--inline` modifier
- `c-form-group--grid` modifier
- `c-form-group--inline` modifier
- `c-form-group--option` modifier
- `c-form-group__list` element
- `c-label--pill` modifier

### Changed

- `Input` var names updated to BEM-ish syntax. Seems to be working as a decent mental model so far
- Bottom margin on `c-form-group` is NOT omitted if it's the last of type

### Removed

- `OptionButton` is now a modifier on `c-input`

## [v1.1.14](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.13...v1.1.14) - 2018-08-07

### Added

- `Fieldset` sass component
- `Form` sass component
- `OptionButton` sass component
- `c-label--inline` modifier for `Label` component

### Changed

- Bottom margin on `c-form-group` is omitted if it's the last child
- `input`, `select`, and `textarea` now have pure white background colors
- Black/white colors, and any brand related color are no longer overridable

## [v1.1.13](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.12...v1.1.13) - 2018-07-16

### Added

- `!default` overrides for pretty much everything. EVERYTHING.

## [v1.1.12](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.11...v1.1.12) - 2018-07-03

### Added

- Styles & component for badges

## [v1.1.11](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.10...v1.1.11) - 2018-06-29

### Added

- Generate a button of for each color in `$colors`

## [v1.1.10](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.9...v1.1.10) - 2018-06-27

### Added

- `!default` added to variables when set, so they can be set and overridden in consuming applications

## [v1.1.9](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.8...v1.1.9) - 2018-05-31

### Fixed

- Print visibility utility classes work in IE11

## [v1.1.8](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.7...v1.1.8) - 2018-05-16

### Added

- New `.u-no-print` classname to hide content in `@media print {}`
- New `.u-print-only` classname to only show content in `@media print {}`
- Created NoPrint and PrintOnly components for the two new utility classes

### Removed

- The `/stories` directory - we won't be using [Storybook](https://storybook.js.org/) for the docs, and the tests in this directory were failing and would prevent a merge.

## [v1.1.7](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.6...v1.1.7) - 2018-05-04

### Added

- New `.u-no-motion` classname to remove animations and transitions
- Accessbility base file. Currently just reduces motion if user has requested it
- Updated default font stack for monospace fonts
- Added some guidance on font inclusion in README file
- A PR template to make sure this changelog actually gets updated

### Removed

- Anything relating to scss-lint. We'll be moving away from that to stylelint and Prettier for styles in future.

## [v1.1.6](https://github.com/RaspberryPiFoundation/Bits/compare/v1.1.5...v1.1.6) - 2018-04-18

### Added

- `npm` now inclues the `src/components` directory, so you can install this package and access the raw `.sass` files for each component to be compiled in your project.

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
