#!/usr/bin/env bash

rm -rf build
node_modules/webpack/bin/webpack.js
node webpack node webpack
