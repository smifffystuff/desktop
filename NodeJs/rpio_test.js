var rpio = require('rpio');

rpio.open(3, rpio.OUTPUT, rpio.LOW);
rpio.open(5, rpio.OUTPUT, rpio.LOW);
rpio.open(7, rpio.OUTPUT, rpio.LOW);

console.log((Math.random() > 0.5))
for (var i = 0; i < 5000; i++) {
    
    rpio.write(3, (Math.random() > 0.5 ? 1 : 0));
    rpio.write(5, (Math.random() > 0.5 ? 1 : 0));
    rpio.write(7, (Math.random() > 0.5 ? 1 : 0));
    rpio.msleep(500);

    // rpio.write(3, 0);
    // rpio.msleep(500);
}