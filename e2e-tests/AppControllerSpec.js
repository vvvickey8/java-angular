'use strict';


describe('The application controller', function() {
var Item;
it('should automatically redirect to index page when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch('');
  });


});