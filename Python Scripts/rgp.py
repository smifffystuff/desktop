import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BOARD)

GPIO.setup(3, GPIO.OUT)
GPIO.output(3, True)
GPIO.setup(5, GPIO.OUT)
GPIO.output(5, True)
GPIO.setup(7, GPIO.OUT)
GPIO.output(7, True)

try:
    while (True):
        request = input("RGB-->")
        if (len(request) ==3):
            GPIO.output(3, int(request[0]))
            GPIO.output(5, int(request[1]))
            GPIO.output(7, int(request[2]))
            

except KeyboardInterrupt:    
    GPIO.cleanup()
