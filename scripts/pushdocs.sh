#!/usr/bin/env bash

# Adjusts git deploy repo
GIT_DEPLOY_DOC_INT=${GIT_DEPLOY_DOC_INT}
GIT_DEPLOY_DOC_EXT=${GIT_DEPLOY_DOC_EXT}

cd documentation/intern && \
git init && \
git config user.name "Travis CI" && \
git config user.email "github@travis-ci.org" && \
git add . && \
git commit -m "Deploy to GitHub Pages - Metier" && \
git push --force "${GIT_DEPLOY_DOC_INT}" master:gh-pages

cd documentation/extern && \
git init && \
git config user.name "Travis CI" && \
git config user.email "github@travis-ci.org" && \
git add . && \
git commit -m "Deploy to GitHub Pages - Communication" && \
git push --force "${GIT_DEPLOY_DOC_EXT}" master:gh-pages
