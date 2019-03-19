/**
 * Test for getting started with Selenium.
 */
"use strict";



const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = webdriver.By;

let browser;


// Does not work with WSL!! Use cygwin



// Test suite
test.describe("rm2front", function() {
    test.beforeEach(function(done) {
        this.timeout(30000);
        browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).build();
            //withCapabilities(webdriver.Capabilities.chrome()).build();

        browser.get("http://localhost:8080/#/");
        done();
    });

    test.afterEach(function(done) {
        setTimeout(function() {
            browser.quit();
        }, 0);
        done();
    });


    function goToNavLink(target) {
        browser.findElement(By.linkText(target)).then(function(element) {
            element.click();
        });
    }

    function goToPartialNavLink(target) {
        browser.findElement(By.partialLinkText(target)).then(function(element) {
            element.click();
        });
    }

    function matchUrl(target) {
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith(target));
        });
    }

    function assertH1(target) {
        browser.findElement(By.css("h1")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, target);
            });
        });
    }

    function assertH2(target) {
        browser.findElement(By.tagName("h2")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, target);
            });
        });
    }

// Test case
    test.it("Test index", function(done) {

        browser.getTitle().then(function(title) {
            assert.equal(title, "Starsida - EkoEnergiBörsen");
        });

        browser.findElement(By.className("banderolltext")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "EkoEnergiBörsen");
            });
        });


        done();
    });


    test.it("Test go to Om", function(done) {
        // try use nav link

        browser.findElement(By.partialLinkText("Om")).then(setTimeout(function(element) {
            element.click()
        }, 1000))

        setTimeout(function() {
                browser.findElement(By.tagName("h2")).then(function(element) {
                        element.getText().then(function(text) {
                            assert.equal(text, "Bli rik på grön energi");
                        });
                    })
            }, 2000)


        done();

    });


    // test.it("Test go to Logga in", function(done) {
    //     // try use nav link
    //
    //     browser.findElement(By.partialLinkText("Logga in")).then(setTimeout(function(element) {
    //         element.click()
    //     }, 1000))
    //
    //     setTimeout(function() {
    //             browser.findElement(By.tagName("h1")).then(function(element) {
    //                     element.getText().then(function(text) {
    //                         assert.equal(text, "Logga in");
    //
    //                     });
    //                 })
    //         }, 2000)
    //
    //
    //     done();
    //
    // });


});
