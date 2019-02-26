#!/bin/bash

testFolder="test-website"

mode=$1
cd $testFolder && gulp $mode > /dev/null
