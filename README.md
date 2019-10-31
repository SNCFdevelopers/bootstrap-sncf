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
3. Run `watch-docs-extern` or `watch-docs-intern` to watch css & js.
4. Run `yarn docs-serve-extern` or `yarn docs-serve-intern` to build the templates.
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

### Use Bootstrap and SNCF components with Reactjs

<details>

<summary>Read the cookbook</summary>

See the [Bootstrap JavaScript](https://getbootstrap.com/docs/4.2/getting-started/webpack/) section, import what you need:

1. Import

    ```js
    import 'bootstrap/js/dist/dropdown';
    import SelectExclusive from './dist/js/components/selectRadios'
    ```

2. Init

    ```js
    useEffect(() => {
        const dataSelectRadios = 'select-radios';
        const components = document.querySelectorAll(dataComponent);
    
        components.forEach((component) => {
            if (component.dataset.component === dataSelectRadios) {
                new SelectRadios(component)
            }
        });
    }, []);
    ```

3. Use template

    ```js
    return (
        <div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                <div className="btn-group dropdown" data-component="select-radios">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="actionsgroup">
                    <span data-role="placeholder">Tous ces mots</span>
                    <i className="icons-arrow-down" aria-hidden="true"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" id="actionsgroup">
                    <input data-role="value" type="radio" name="keywordSearch" value="keywordSearch1" id="action1" className="sr-only" />
                    <label className="dropdown-item" htmlFor="action1">Action</label>
                    <hr className="dropdown-divider"/>
                    <input data-role="value" type="radio" name="keywordSearch" value="keywordSearch2" id="action2" className="sr-only" />
                    <label className="dropdown-item" htmlFor="action2">Another action</label>
                    <input data-role="value" type="radio" name="keywordSearch" value="keywordSearch3" id="action3" className="sr-only" />
                    <label className="dropdown-item" htmlFor="action3">Something else here</label>
                    </div>
                </div>
                </div>
                <div className="form-control-container">
                <input id="entertext" type="text" className="form-control" title="Enter text" placeholder="Enter text" />
                <span className="form-control-state"></span>
                </div>
            </div>
        </div>
    );
    ```
