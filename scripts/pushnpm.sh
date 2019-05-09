#!/usr/bin/env bash
export NPM_TOKEN=${NPM_AUTH_TOKEN}
if [ "$TRAVIS_BRANCH" = "master" ]; then 
  echo "name=@sncf/bootstrap-sncf.$1" > .npmrc
  echo "auth=${NPM_AUTH_TOKEN}" >> .npmrc
  echo "email=nicolas.wurtz@sncf.fr" >> .npmrc
  sed s#"@sncf/bootstrap-sncf"#"@sncf/bootstrap-sncf.$1"# -i package.json
  npm publish --access public
  sed s#"@sncf/bootstrap-sncf.$1"#"@sncf/bootstrap-sncf"# -i package.json
fi
