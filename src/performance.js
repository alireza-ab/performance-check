'use strict'

const Performance = {}

let startCounter = 1;
let endCounter = 1;

const numbering = (number) => {
    let label;
    let c = number || startCounter;
    if (c == 1 || c % 10 == 1 && c != 11)
        label = c + 'st';
    else if (c == 2 || c % 10 == 2 && c != 12)
        label = c + 'nd';
    else if (c == 3 || c % 10 == 3 && c != 13)
        label = c + 'rd';
    else
        label = c + 'th';
    number ? endCounter++ : startCounter++;
    return label + ' code';
}

Performance.__proto__.start = function (label) {
    if (!label) {
        label = numbering();
    }
    this[label] = {
        start: {
            perf: typeof performance !== 'undefined' ? performance.now() : 'not supported!',
            date: new Date()
        },
    }
    console.time(label);
}

Performance.__proto__.end = function (label) {
    if (!label)
        label = numbering(endCounter);
    if (!this[label])
        return console.error('label "' + label + '" not exist!');
    this[label].end = {
        perf: typeof performance !== 'undefined' ? performance.now() : 'not supported!',
        date: new Date()
    };

    console.group('%c performance of ' + label + ':', 'background: #1E3B73;border-radius: 0.5em;color: white;font-weight: bold;padding: .2em .5em;');

    if (typeof performance !== 'undefined')
        console.log('performance interface: ' + (this[label].end.perf - this[label].start.perf) + 'ms');
    else
        console.log('performance interface: not supported!');

    console.log('Date library: ' + (this[label].end.date - this[label].start.date) + 'ms');

    console.timeEnd(label);

    console.groupEnd();
}

module.exports = Performance