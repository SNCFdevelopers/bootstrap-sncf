#!/usr/bin/env bash
NPM_TOKEN=${NPM_AUTH_TOKEN}
if [ "$TRAVIS_BRANCH" = "master" ]; then 
  echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
  sed s#"@sncf/bootstrap-sncf"#"@sncf/bootstrap-sncf.$1"# -i package.json
  npm publish --access public
  sed s#"@sncf/bootstrap-sncf.$1"#"@sncf/bootstrap-sncf"# -i package.json
fi
