#!/usr/bin/env bash

# Adjusts git deploy repo, or gets it if unavailable
cd documentation && \
git init && \
git config user.name "Travis CI" && \
git config user.email "github@travis-ci.org" && \
git add . && \
git commit -m "Deploy to GitHub Pages" && \
git push --force "https://github.com/SNCFdevelopers/bootstrap-sncf" master:gh-pages
