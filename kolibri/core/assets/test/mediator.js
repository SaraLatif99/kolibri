var assert = require('assert');

var mediator = require('../js/mediator/mediator.js');

describe('Mediator', function() {
    describe('object', function() {
        it('should be empty', function () {
            assert.deepEqual(mediator, {});
        });
    });
});
