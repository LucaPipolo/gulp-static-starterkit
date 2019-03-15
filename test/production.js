const chai = require('chai');
const expect = require('chai').expect;
const fs = require('chai-fs');
chai.use(fs);

describe('production', function () {
  // Styles.
  it('CSS file is minified.', function(done) {
    expect('test-website/dist/styles/main-07781b0850.min.css').to.be.a.file().and.have.contents.that.match(/\*\/(?!\n).*$/);
    done();
  });

  it('The CSS sourcemaps are NOT created.', function(done) {
    expect('test-website/.tmp/styles/main.css').to.be.a.file().with.contents.that.not.match(/sourceMappingURL/);
    done();
  });

  // Scripts.
  it('JavaScript file is minified.', function(done) {
    expect('test-website/dist/scripts/main-4705548f00.min.js').to.be.a.file().and.have.contents.that.match(/\*\/(?!\n).*$/);
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
