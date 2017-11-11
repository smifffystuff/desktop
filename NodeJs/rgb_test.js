let gpio = require('rpi-gpio');

gpio.setMode('mode_rpi');

gpio.destroy();
// gpio.setup(3, gpio.DIR_OUT, write)
// gpio.setup(5, gpio.DIR_OUT, write)
// gpio.setup(7, gpio.DIR_OUT, write)

// function write() {
//     console.log("write called")
// }

// gpio.write(3, false, (err) => {
//     if (err)throw err;
//     console.log("written to port")
// })
// gpio.write(5, false, (err) => {
//     if (err)throw err;
//     console.log("written to port")
// })
// gpio.write(7, false, (err) => {
//     if (err)throw err;
//     console.log("written to port")
// })

