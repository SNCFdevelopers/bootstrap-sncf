# Bootstrap SNCF

## Table of contents

- [Quick start](#quick-start)
- [Status](#status)
- [Documentation](#documentation)
- [Cookbooks](#cookbooks)

## Quick start

Several quick start options are available:

- Install with [npm](https://www.npmjs.com/): `npm install @sncf/bootstrap-sncf.metier` or `npm install @sncf/bootstrap-sncf.communication`
- Install with [yarn](https://yarnpkg.com/): `yarn add @sncf/bootstrap-sncf.metier` or `yarn add  @sncf/bootstrap-sncf.communication`

Read the [Getting started page](http://sn.cf/socledesign) for information on the framework contents, templates and examples, and more.

## Status

[![MASTER Build Status](https://travis-ci.com/SNCFdevelopers/bootstrap-sncf.svg?branch=master)](https://travis-ci.com/SNCFdevelopers/bootstrap-sncf) This is the branch you'll see on documentations sites [sn.cf/socledesign](http://sn.cf/socledesign)   
[![DEV Build Status](https://travis-ci.com/SNCFdevelopers/bootstrap-sncf.svg?branch=dev)](https://travis-ci.com/SNCFdevelopers/bootstrap-sncf) This is developement branch, be careful, it could destroy your computer and burn your mouse.

## Documentation

Bootstrap's documentation, included in this repo in the root directory, is built with [Hugo](https://gohugo.io/) and publicly hosted on GitHub Pages at <https://design-bootstrap.sncf.fr/> and <https://designmetier-bootstrap.sncf.fr/>. The docs may also be run locally.

### Running documentation locally

1. Run `yarn install` to install the Node.js dependencies, including Hugo (the site builder).
2. Decide which version you need (intern or extern, cf. [SNCF Digital resources](http://sn.cf/socledesign))
3. Run `yarn run docs-serve-intern` or `yarn run docs-serve-extern` to build the templates.
4. Run `yarn run watch-intern` or `yarn run watch-extern` to generate and watch css & js.
5. Open `http://localhost:9001/` in your browser, and voilà.

Learn more about using Hugo by reading its [documentation](https://gohugo.io/documentation/).

## Cookbooks

### How to use with Reactjs

<details>

<summary>Read the cookbook</summary>

If you want to create a new [Reactjs](https://github.com/facebook/create-react-app) project, you need to:

1. Create a new project:

    ```bash
    npx create-react-app reactjs-sncf
    ```

2. Add `bootstrap-sncf` package:

    ```bash
    yarn add @sncf/bootstrap-sncf.metier
    ```

3. Import

    ```js
    import '@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf.min.css';
    import '@sncf/bootstrap-sncf.metier';
    ```

4. Start
    ```bash
    yarn start
    ```

</details>
