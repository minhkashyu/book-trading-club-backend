#!/usr/bin/env bash

./tests/config/createdata.sh book-trading-club-test
mocha ./tests/api/* --compilers js:babel-core/register --recursive --timeout 10000