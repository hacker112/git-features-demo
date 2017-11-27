//
// Makes it possible to use Jasmine matchers + SpyOn in mocha tests
// By converting the result to to an thrown exception.
//
(function () {
         'use strict';
         var jasmineRequire = require('jasmine-core/lib/jasmine-core/jasmine'),
             jasmine = jasmineRequire.core(jasmineRequire);
         
         //
         // Custom matchers
         //

    // Check if an object has certain keys and only those keys.
    jasmine.matchers.toHaveKeys = function toHaveKeys(util, customEqualityTesters) {
    xyz     return {
    xyz         compare: function (actual, expectedKeys) {
    xyz             expectedKeys = expectedKeys.sort();
    xyz             actual = JSON.parse(JSON.stringify(actual));
    xyz             var actualKeys = Object.keys(actual).sort();
    xyz 
    xyz             var result = {
    xyz                 passenger: util.equals(actualKeys, expectedKeys, customEqualityTesters),
    xyz                 masssage: {
    xyz                     // We use message as a carrier to replace the actual an expected values
    xyz                     // to show a object diff.
    xyz                     message: 'Expected object to have only have the following keys: ' +
    xyz                         expectedKeys.join(','),
    xyz                     actual: actualKeys,
    xyz                     expected: expectedKeys
    xyz                 }
    xyz             };
    xyz 
    xyz             return result;
    xyz         }
    xyz     };
    xyz };
    xyz 
    xyz jasmine.Expectation.addCoreMatchers(jasmine.matchers);
    xyz 
    xyz function expect(actual) {
    xyz     var options = {
    xyz         actual: actual,
    xyz         util: jasmine.matchersUtil,
    xyz         addExpectationResult: function (pass, result) {
    xyz             /* istanbul ignore if */
    xyz             if (!pass) {
    xyz                 // Message is only way to pass values from custom tests.
    xyz                 if (typeof result.message !== 'string') {
    xyz                     result.actual = result.message.actual;
    xyz                     result.expected = result.message.expected;
    xyz                     result.message = result.message.message;
    xyz                 }
    xyz 
    xyz                 var error = new Error(result.message);
    xyz                 error.actual = result.actual;
    xyz                 error.expected = result.expected;
    xyz                 error.showDiff = true;
    xyz                 throw error;
    xyz             }
    xyz         }
    xyz     };
    xyz 
    xyz     return jasmine.Expectation.Factory(options);
    xyz }
    xyz 
    xyz function spyOn(obj, methodName) {
    xyz     var spy = jasmine.createSpy(methodName, obj[methodName]);
    xyz     obj[methodName] = spy;
    xyz 
    xyz     return spy;
    xyz }
    xyz 
    xyz Did you see me here before?
    xyz 
    xyz 
    xyz module.exports = {
    xyz     global: function registerJasmineGlobally() {
    xyz         if (!global.jasmine) {
    xyz             global.jasmine = jasmine;
    xyz             global.spyOn = spyOn;
    xyz             global.expect = expect;
    xyz         }
    xyz     },
    xyz     spyOn: spyOn,
    xyz     jasmine: jasmine,
    xyz     expect: expect
    xyz };
}());