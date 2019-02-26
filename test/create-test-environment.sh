#!/bin/bash

testFolder="test-website"

mkdir $testFolder
mkdir $testFolder/src $testFolder/src/{styles,scripts,imgs,templates}
mkdir -p $testFolder/node_modules/@luca.pipolo/gulp-static-starterkit
cp -R index.js config.js tasks utils package.json $testFolder/node_modules/@luca.pipolo/gulp-static-starterkit
cp sample.gulpfile.js $testFolder/gulpfile.js

cp -r test/templates/*.scss $testFolder/src/styles
cp -r test/templates/*.js $testFolder/src/scripts
cp -r test/templates/test.jpg $testFolder/src/imgs
cp -r test/templates/*.pug $testFolder/src/templates
cp -r test/templates/fonts $testFolder/src/fonts
cp -r test/templates/.htaccess $testFolder/src
cp -r test/templates/.babelrc $testFolder/src
