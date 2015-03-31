#!/usr/bin/env bash

rm -rf build
APP_ENV=production node_modules/webpack/bin/webpack.js -p
zip -r build-`date +%s` application build node_modules server server.js
