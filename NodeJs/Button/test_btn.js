let rpio = require('rpio');

rpio.open(7, rpio.INPUT, rpio.PULL_UP);

let pollcp = () => {
    console.log('Pin 7 is currently set ', rpio.read(7));
};

rpio.poll(7, pollcp);

