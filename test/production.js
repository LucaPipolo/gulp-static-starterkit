const chai = require('chai');
const expect = require('chai').expect;
const chaifs = require('chai-fs');
const glob = require("glob");
chai.use(chaifs);

describe('production', function () {
  // Styles.
  it('CSS file is minified.', function(done) {
    checkMinification('styles', /main-[a-z0-9]{10}\.min\.css/);
    done();
  });

  it('The CSS sourcemaps are NOT created.', function(done) {
    expect('test-website/.tmp/styles/main.css').to.be.a.file().with.contents.that.not.match(/sourceMappingURL/);
    done();
  });

  // Scripts.
  it('JavaScript file is minified.', function(done) {
    checkMinification('scripts', /main-[a-z0-9]{10}\.min\.js/);
    done();
  });

  it('The JavaScript sourcemaps are NOT created.', function(done) {
    expect('test-website/.tmp/scripts/main.js').to.be.a.file().with.contents.that.not.match(/sourceMappingURL/);
    done();
  });

  // Images.
  it('Hash is added to the HTML image reference.', function(done) {
    expect('test-website/dist/rev-manifest.json').to.be.a.file().and.have.contents.that.match(/test.jpg/);
    expect('test-website/dist/index.html').to.be.a.file().with.contents.that.match(/test-05a23d27dc.jpg/s);
    done();
  });
});

/**
 * Checks if the file of the passed type is minified.
 *
 * @param {string} type
 *   The type of the passed file. Use 'styles' for CSS and 'scripts' for JS.
 * @param {object} regex
 *    The regular expression to test if the file is minified.
 */
function checkMinification(type, regex) {
  glob(`test-website/dist/${type}/main*`, function (er, filename) {
    expect(regex.test(filename)).to.be.true;
    expect(filename[0]).to.have.contents.that.match(/\*\/(?!\n).*$/);
  });
}
