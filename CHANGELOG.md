# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Upgrade `@stencil/core` to v4 (from v2.4).
- Upgrade `@stencil/react-output-target` to v0.7.
- Support React 16-19 in peer dependencies.
- Fix plugin cleanup on destroy to avoid stale references.
- Fix source map warnings by including `src/` in published files.
- Add CHANGELOG.md.
- Add release.yml for automated releases to npm.

## [1.3.0] - 2021-03-15

### Fixed
- ion-phaser dist appears to bundle Phaser ([#18](https://github.com/proyecto26/ion-phaser/issues/18)).
- How to upgrade to Phaser ([#27](https://github.com/proyecto26/ion-phaser/issues/27)).

## [1.2.3] - 2020-04-30

### Fixed
- Fixed types and configuration for react package.
- Fixed eslint issues and added validations to create the phaser game instance.
- Updated stencil packages.

## [1.2.2] - 2019-11-27

### Fixed
- Fixed an import and using Phaser global object instead, to reduce the bundle size from 1 MB to 269 bytes.

## [1.2.1] - 2019-11-23

### Fixed
- Added watch for `game` prop to fix issues initializing the phaser game.

## [1.2.0] - 2019-09-04

### Fixed
- Update Stencil configuration.
- Fix React wrapper component by using `componentDidMount` and `componentDidUpdate` instead of deprecated `componentWillReceiveProps`.

## [1.1.0] - 2019-07-12

### Added
- Set the configuration of a Phaser game with a `game` property.
- Initialize the game manually with an `initialize` property.
- Include `destroy` method to destroy the Phaser game instance.
- Include `getInstance` method to get the current instance of the game.
- Add React wrapper component to avoid using `ref` manually to attach the configuration of the game.
- Add demo including the component for Angular, React and Vue.js.
- Add codepen example to see the component in action using Vue.js.

[Unreleased]: https://github.com/proyecto26/ion-phaser/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/proyecto26/ion-phaser/compare/v1.2.3...v1.3.0
[1.2.3]: https://github.com/proyecto26/ion-phaser/compare/v1.2.2...v1.2.3
[1.2.2]: https://github.com/proyecto26/ion-phaser/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/proyecto26/ion-phaser/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/proyecto26/ion-phaser/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/proyecto26/ion-phaser/releases/tag/v1.1.0
