# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.5.0] - 2026-03-16
### Changed
- v1.4.0 ([76f1fed](https://github.com/proyecto26/ion-phaser/commit/76f1fedc9f7037b62d4297504c2a5d8ba9043e54)).

### Fixed
- remove Phaser typeRoots/types from tsconfig for CI compatibility ([eda7a05](https://github.com/proyecto26/ion-phaser/commit/eda7a051c6864a80df0615a9e8a91c84f4829457)).
- install devDependencies for Phaser types in build step ([6f126df](https://github.com/proyecto26/ion-phaser/commit/6f126dfc9b74a8f2e684ded117be4941664851a7)).




## [1.4.0] - 2026-03-16
### Added
- upgrade Stencil v4, React 17/18 support, release automation ([95b75e6](https://github.com/proyecto26/ion-phaser/commit/95b75e68080be3136d58fb13407da465bc319f1f)).

### Changed
- Update README.md ([2abd545](https://github.com/proyecto26/ion-phaser/commit/2abd54559f234f91b5c9e6196a99e88076576a8d)).
- Update README.md ([838131f](https://github.com/proyecto26/ion-phaser/commit/838131f7b3a5b1467114d01260113c94a43d295d)).
- Update README.md ([1c3ec36](https://github.com/proyecto26/ion-phaser/commit/1c3ec367db157ad5b542dd66618219116c9a4909)).
- Update FUNDING.yml ([dbe24b1](https://github.com/proyecto26/ion-phaser/commit/dbe24b15208345bf9f4926765114c2f645fee6cc)).
- Update README.md ([42be2a6](https://github.com/proyecto26/ion-phaser/commit/42be2a6cc290853566e0cb83c2368cffff014145)).
- Update README.md ([8a0d9a9](https://github.com/proyecto26/ion-phaser/commit/8a0d9a94dfc912632b27f7cc379f3e659b8cb81d)).
- Fix scripts to be used from HTML ([8d54af2](https://github.com/proyecto26/ion-phaser/commit/8d54af21803fe1d47059e9fbcfcc7279cc4501e7)).
- Update README.md ([bb3f9b1](https://github.com/proyecto26/ion-phaser/commit/bb3f9b10947159b91b8bcd9fd379800f33e90629)).




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

[Unreleased]: https://github.com/proyecto26/ion-phaser/compare/v1.5.0...HEAD
[1.5.0]: https://github.com/proyecto26/ion-phaser/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/proyecto26/ion-phaser/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/proyecto26/ion-phaser/compare/v1.2.3...v1.3.0
[1.2.3]: https://github.com/proyecto26/ion-phaser/compare/v1.2.2...v1.2.3
[1.2.2]: https://github.com/proyecto26/ion-phaser/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/proyecto26/ion-phaser/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/proyecto26/ion-phaser/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/proyecto26/ion-phaser/releases/tag/v1.1.0
