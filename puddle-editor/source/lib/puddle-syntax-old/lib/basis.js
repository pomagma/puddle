'use strict';

var _ = require('lodash');
var assert = require('./assert');
var test = require('./test').suite('basis');

// this was copied from pomagma/src/language/skrj.json
var basis = {
    'BINARY': {
        'APP': 0.34,
        'COMP': 0.18
    },
    'NULLARY': {
        'A': 0.0014706292063274857,
        'B': 0.0802936340501919,
        'BOT': 0.01086656170627965,
        'C': 0.05922894396443991,
        'CB': 0.05632735749888164,
        'CI': 0.03825370203150625,
        'I': 0.02374282407764064,
        'J': 0.013014190521849024,
        'K': 0.015184730350639612,
        'P': 0.005439299807496911,
        'R': 0.013014190521849024,
        'S': 0.014747894704886794,
        'TOP': 0.01086656170627965,
        'U': 0.00037168459053155167,
        'V': 0.012334748254411805,
        'W': 0.0027803041848474147,
        'Y': 0.022062742821940824
    },
    'SYMMETRIC': {
        'JOIN': 0.05,
        'RAND': 0.05
    }
};

test('normalized', function () {
    var total = 0;
    _.each(basis, function (symbols) {
        _.each(symbols, function (weight) {
            total += weight;
        });
    });
    assert.close(total, 1.0);
});

module.exports = basis;