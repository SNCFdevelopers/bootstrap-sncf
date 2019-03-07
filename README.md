## Builds status

### Master Branch
[![MASTER Build Status](https://travis-ci.com/SNCFdevelopers/bootstrap-sncf.svg?branch=master)](https://travis-ci.com/SNCFdevelopers/bootstrap-sncf) This is the branch you'll see on documentations sites [sn.cf/socledesign](https://sn.cf/socledesign)

### Dev Branch
[![DEV Build Status](https://travis-ci.com/SNCFdevelopers/bootstrap-sncf.svg?branch=dev)](https://travis-ci.com/SNCFdevelopers/bootstrap-sncf) This is developement branch, be careful, it could destroy your computer and burn your mouse.

## How to build

First steps, install dependencies, go inside bootstrap-sncf directory, then :

1. `npm install` to install Node.js dependencies.
2. `yarn` to install yarn dependecies.
3. _Documentation building only_ Run through the [tooling setup](https://getbootstrap.com/docs/4.0/getting-started/build-tools/#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.

To compile Bootstrap-SNCF you will have to :

1. Decide which version you need (intern or extern, cf. [SNCF Digital resources](http://sn.cf/socledesign))
2. Run `npm run build-intern` or `npm run build-extern` to build all the project, including distributed CSS and JavaScript files, as well as our docs assets.
3. Run `npm run dist-intern` or `npm run dist-extern` to generate `dist/` folder with minified css & js, and assets (icons & fonts).

### Running documentation locally

Bootstrap's documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com/) and publicly hosted on GitHub Pages at <https://getbootstrap.com/>. The docs may also be run locally.

Documentation search is powered by [Algolia's DocSearch](https://community.algolia.com/docsearch/).

1. From the root `/bootstrap-sncf` directory, run `npm run docs-serve-intern` or `docs-serve-extern` in the command line **after building the version you want**
2. Open `http://localhost:9001` in your browser, and voilà. Modifications in `template` folder will force regenerating.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/home/).

### Icofont

1. Run `yarn run icofont`
