#!/usr/bin/env bash
npm install --no-safe --no-scripts request
npm uninstall --no-safe --no-scripts request
find node_modules -type f ! -name 'README.md' -delete
find node_modules ! -type d -and ! -type f -delete
find node_modules -type d -empty -delete
rm package-lock.json
