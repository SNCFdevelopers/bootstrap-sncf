#!/usr/bin/env bash

# Adjusts git deploy repo for documentation
GIT_DEPLOY_DOC_INT=${GIT_DEPLOY_DOC_INT}
GIT_DEPLOY_DOC_EXT=${GIT_DEPLOY_DOC_EXT}

# For Github's pages reverse proxy
echo "designmetier-bootstrap.sncf.fr" > documentation/intern/CNAME
echo "design-bootstrap.sncf.fr" > documentation/extern/CNAME

# INTERN
cd documentation/intern && \
git init && \
git config user.name "Travis CI" && \
git config user.email "github@travis-ci.org" && \
git add . && \
git commit -m "Deploy to GitHub Pages - Metier" && \
git push --force "${GIT_DEPLOY_DOC_INT}" master:gh-pages

# EXTERN
cd ../extern && \
git init && \
git config user.name "Travis CI" && \
git config user.email "github@travis-ci.org" && \
git add . && \
git commit -m "Deploy to GitHub Pages - Communication" && \
git push --force "${GIT_DEPLOY_DOC_EXT}" master:gh-pages
