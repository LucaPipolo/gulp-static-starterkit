[![Build Status](https://travis-ci.org/LucaPipolo/gulp-static-starterkit.svg?branch=master)](https://travis-ci.org/LucaPipolo/gulp-static-starterkit)

# Gulp Static StarterKit

This project born from my daily work needs.
I wanted something able to cover all the routine operations, like building and injecting assets.
I've been improving it, until the point I decided it was ready to be published on GitHub.

I hope that this tool helps anybody who is looking for a stable and effective Gulpfile
to easily build static websites.

## :sparkles: Features

- **Future JS in your hands** — thanks to Babel, you can write beautiful ES6 and ES7 JS since now.
- **Pug** - Yeah, HTML is not so bad, but Pug rocks! It brings awesome features like functions, imports, variables and many more to your templates.
- **A lint to rule them all** — You can not do it wrong! Stylelint, ESLint and PugLint are here to help you to code it cleanly.
- **Built-in HTTP Server** - A built-in server for previewing your site locally is included.
- **It's so tiny!** - Every single line of HTML, JS and CSS is concatenated and minified. Your pages will load super fast!
- **Cache ready** - Were we talking about speed, no? Well, this Gulpfile also takes care of adding static revisioning hash to the assets.
- **GoogleFonts injector** - Just list which Google Fonts you want to use and they're automatically inject. Magic, no?
- **PageSpeed Insights** - Thanks to Ngrok, you can test your website using Google PageSpeed directly from your local machine.

## :zap: Quickstart

1. First of all, you will need **Node.js**. You can download it from the [offical website](https://nodejs.org/it/) and follow the installation steps for your OS.
2. Then you'll need **Gulp**. To install it, follow instruction described [here](https://gulpjs.com/).
3. The last thing to install is **Yarn**, the dependency manager. Follow the steps described on the [website](https://yarnpkg.com/en/docs/getting-started).
4. Install Gulp Static StarterKit with `yarn add --dev @luca.pipolo/gulp-static-starterkit`.
5. Create a `gulpfile.js` in the root of your project and require the gulp-static-starterkit package (see [sample.gulpfile.js](https://github.com/LucaPipolo/gulp-static-starterkit/blob/master/sample.gulpfile.js)).
6. Finally, test if everything works running `gulp`.

Great, you can now start to use Gulp Static StarterKit! :smile:

## :wrench: Change default configuration

It's possible to change the default configuration by copying [`config.js`](https://github.com/LucaPipolo/gulp-static-starterkit/blob/master/config.js) file into your project root directory.

## :mag: What's behind the scenes?

Are you curious to know what's happening behind the scenes?
Below you can find a detailed list of the defined Gulp tasks. Have fun!

### Style files

Sass files are compiled into the `dist/styles` folder.
Copyright information from `package.json` is injected in the compiled CSS file.
If the gulp command is executed with the `--production` option, sourcemaps are not created.

### Script files

ES6 and ES7 code is transpiled using Babel into the `dist/scripts` folder.
Copyright information from `package.json` is injected in the compiled JS file.
If the gulp command is executed with the `--production` option, sourcemaps are not created.

### Template files

Pug files are compiled into the `dist` folder.
If the gulp command is executed with the `--production` option, the images `rev-manifest.json` file is used to replace the images references in the compiled HTML file.
Also, `gul-useref` is used to inject CSS and JS files into the compiled HTML file, minifing the assets and adding static asset revisioning hashes.

### Images and Fonts

Custom fonts are flattened and moved into the `dist/fonts` folder. It's possible to automatically install Google Fonts, adding them to a `google-fonts.list` file.

Images are compressed using `gulp-imagemin`. More plugin options are described [here](https://www.npmjs.com/package/gulp-imagemin#custom-plugin-options).
If the gulp command is executed with the `--production` option, the `rev-manifest.json` is created to store the hashed images references.

### Google Page Speed

Uses ngrok + PSI to locally test Google Page Speed performances.
Run it with `gulp performance`.

## :computer: Contribute

Any kind of contribution is welcome!
If you notice something wrong please open an issue [here](https://github.com/LucaPipolo/gulp-static-starterkit/issues) and create a Pull Request.
Be sure to read our [code of conduct](https://github.com/LucaPipolo/gulp-static-starterkit/blob/master/CODE_OF_CONDUCT) before starting to code.

## :pencil2: License

[GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html) © [Luca Pipolo](https://www.lucapipolo.com)
