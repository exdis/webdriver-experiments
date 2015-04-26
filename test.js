var expect = require('chai').expect;
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');

test.describe('Simple test', function() {
    test.it('should work', function() {
        var driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();

        driver.get('http://127.0.0.1:3000');
        var element = driver.findElement(webdriver.By.id('text'));
        element.getText().then(function(text) {
            expect(text).to.equal('text');
        });
    });
});

