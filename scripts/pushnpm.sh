#!/usr/bin/env bash
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc

NPM_TOKEN=${NPM_AUTH_TOKEN}

sed s#"@sncf/bootstrap-sncf"#"@sncf/bootstrap-sncf.$1"# -i package.json
npm publish --access public
sed s#"@sncf/bootstrap-sncf.$1"#"@sncf/bootstrap-sncf"# -i package.json
