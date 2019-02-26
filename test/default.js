const chai = require('chai');
const expect = require('chai').expect;
const fs = require('chai-fs');
chai.use(fs);

describe('default', function () {
  it('The `dist` folder is created.', function(done) {
    expect('test-website/dist').to.be.a.directory();
    done();
  });

  // Styles.
  it('The Sass is correctly compiled in the `.tmp/styles` folder.', function(done) {
    expect('test-website/.tmp/styles/main.css').to.be.a.file().and.not.empty;
    done();
  });

  it('The CSS sourcemaps are created.', function(done) {
    expect('test-website/.tmp/styles/main.css').to.be.a.file().with.contents.that.match(/sourceMappingURL/);
    done();
  });

  it('Copyright is injected in the CSS file.', function(done) {
    expect('test-website/.tmp/styles/main.css').to.be.a.file().with.contents.that.match(/\/\*!.*\@version.*\@link.*\@author.*\*\//s);
    done();
  });

  // Scripts.
  it('The JavaScript is correctly compiled in the `.tmp/scripts` folder.', function(done) {
    expect('test-website/.tmp/scripts/main.js').to.be.a.file().and.not.empty;
    done();
  });

  it('The JavaScript sourcemaps are created.', function(done) {
    expect('test-website/.tmp/scripts/main.js').to.be.a.file().with.contents.that.match(/sourceMappingURL/);
    done();
  });

  it('Copyright is injected in the JavaScript file.', function(done) {
    expect('test-website/.tmp/scripts/main.js').to.be.a.file().with.contents.that.match(/\/\*!.*\@version.*\@link.*\@author.*\*\//s);
    done();
  });

  // Templates.
  it('The HTML is correctly compiled in the `.tmp` folder.', function(done) {
    expect('test-website/.tmp/index.html').to.be.a.file().and.not.empty;
    done();
  });

  it('The assets are injected in the HTML file.', function(done) {
    expect('test-website/dist/styles/main.css').to.be.a.file().and.not.empty;
    expect('test-website/dist/scripts/main.js').to.be.a.file().and.not.empty;
    expect('test-website/dist/index.html').to.be.a.file().with.contents.that.match(/<link rel="stylesheet" href="styles\/main.css">/s);
    done();
  });

  // Fonts
  it('Google Fonts are downloaded.', function(done) {
    expect('test-website/dist/fonts/Indie_Flower-normal-400.woff').to.be.a.file().and.not.empty;
    expect('test-website/dist/fonts/fonts.css').to.be.a.file().and.not.empty;
    done();
  });

  it('Google Fonts are injected in the HTML file.', function(done) {
    expect('test-website/dist/index.html').to.be.a.file().with.contents.that.match(/<link rel="stylesheet" href="styles\/fonts.css">/s);
    done();
  });

  // Copy.
  it('The `.htaccess` files is copied to the `dist` folder.', function(done) {
    expect('test-website/dist/.htaccess').to.be.a.file().and.equal('test/templates/.htaccess');
    done();
  });
});
