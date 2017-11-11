const rpio = require('rpio');
const FauxMo = require('fauxmojs');

const ledPin = 7;
var timer;

rpio.open(ledPin, rpio.OUTPUT);

let fauxmo = new FauxMo(
    {
        ipAddress: '192.168.0.47',
        devices: [
            {
                name: 'shed',
                port: 11000,
                handler: (action) => {
                    console.log(`Action: ${action}`)
                    switch (action) {
                        case 'on':
                        flashLed();
                        //turnOn();
                        break;
                        case 'off':
                        turnOff(true);
                        break;
                        case 'blink':
                        flashLed();
                        break;
                    }
                }
            }
        ]
        
    }
)

console.log('Started.....');
// tornOn();
// rpio.sleep(1);
// turnOff();

let turnOn = () => {
    rpio.write(ledPin, rpio.HIGH);
}

let turnOff = (stopTimer) => {
    if (timer && stopTimer) {
        clearInterval(timer);
    }
    rpio.write(ledPin, rpio.LOW);
}

let flashLed = () => {
    console.log("Start Flash");
    timer = setInterval(()=>{
        console.log('Interval')
        turnOn();
        setTimeout(()=> {
            console.log('timeout')
            turnOff(false);
        }, 1000)
    }, 2000)
}