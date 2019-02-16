
# Gulp Static StarterKit

This project borns from my daily work needs.

I needed a Gulpfile able to cover all the routine operations. Something able
to let me quickly build and inject assets.
During the time I improved it since I decided to publish it as a public
repository, here on GitHub!

Hope that share it can help who is looking for a stable and effective Gulpfile
for static websites, so easy to set up and work with.

## :sparkles: Features

- **Sass superpowers!** — Sass is included and it brings you a lot of new possibilities: variables, mixins, extends and many more
- **Future JS in your hands** — thanks to Babel, you can write beautiful ES6 and ES7 JS since now
- **Pug** - Yeah, HTML is not so bad, but Pug rocks! It brings awesome features like functions, imports, variables and many more to your templates.
- **A lint to rule them all** — You can not do it wrong! Stylelint, ESLint and PugLint are here to help you to code it cleanly
- **Built-in HTTP Server** - A built-in server for previewing your site locally is included
- **It's so tiny!** - Every single line of HTML, JS and CSS is concatenated and minified. Your pages will load super fast!
- **Cache ready** - Were we talking about speed, no? Well, this Gulpfile also takes care of adding static revisioning hash to the assets
- **GoogleFonts injector** - Just list which Google Fonts you want to use and… they're automatically inject. Magic, no?
- **PageSpeed Insights** - Thanks to Ngrok, you can test your website with Google PageSpeed directly from your local machine

## :zap: Quickstart

1. First of all, you will need **Node.js**. You can download it from the [offical website](https://nodejs.org/it/) and follow the installation process for your OS.
2. Then you'll need **Gulp**. To install it, follow instruction described [here](https://gulpjs.com/)
3. The last thing to install is **Yarn**, the dependency manager. Follow the steps described on the [website](https://yarnpkg.com/en/docs/getting-started)
3. Install Gulp Static StarterKit with `yarn add --dev gulp-static-starterkit`
4. Create a gulpfile.js in the root of your project and require the gulp-static-starterkit package (see [sample.gulpfile.js](https://github.com/LucaPipolo/gulp-static-starterkit/blob/master/sample.gulpfile.js))
5. Finally, test if everything works running `gulp`

Great: you can now start to use Gulp Static StarterKit! :smile:

## :mag: What's behind the scenes?

Are you curious to know what's happening behind the scenes?
So here below you can find a detailed list of the already defined Gulp tasks. Have fun!

### Style files

Sass files are compiled into the `dist` folder. Copyright is injected taking information
from the package.json file. If the gulp command have the production option, the sourcemaps are not created,
the assets are minified and static asset revisioning hashes are added.

### Script files

ES6 and ES7 code is transpiled thanks to Babel. Copyright is injected taking information
from the package.json file. If the gulp command have the production option, the sourcemaps are not created,
the assets are minified and static asset revisioning hashes are added.

### Template files

Pug files are compited into the `dist` folder. If the gulp command have the production option, the images rev-manifest
JSON file is used to replace the images references in the compiled HTML file.
Also, gul-useref is used to inject CSS and JavaScript files into the compiled HTML file, minifing the assets and adding static asset revisioning hashes.

### Images and Fonts

All custom fonts are flattened and moved into the `dist` folder. It is possible to automatically install Google Fonts, reading from a `google-fonts.list` file.

All images, instead, are compressed using `gulp-imagemin`. More plugin options are described [here](https://www.npmjs.com/package/gulp-imagemin#custom-plugin-options)

### Google Page Speed

Uses ngrok + PSI to locally test Google Page Speed performances.
Run it with `gulp performance`.

## :computer: Contribute

Any kind of contribute is welcome! If you notice something wrong please open an issue [here](https://github.com/LucaPipolo/gulp-static-starterkit/issues) and, eventually, provide a patch using pull requests. Also, Be sure to read our [code of conduct](https://github.com/LucaPipolo/gulp-static-starterkit/blob/master/CODE_OF_CONDUCT) before start to coding.

## :pencil2: License

[GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html) © [Luca Pipolo](https://www.lucapipolo.com)
