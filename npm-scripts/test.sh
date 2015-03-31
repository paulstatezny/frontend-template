#!/usr/bin/env bash

cd __tests__
rm -rf build
../node_modules/webpack/bin/webpack.js
node webpack
