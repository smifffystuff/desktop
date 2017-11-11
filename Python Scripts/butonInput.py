#buttonImput.py
import RPi.GPIO as GPIO
from time import sleep

GPIO.setmode(GPIO.BCM)

sleepTime = .1

lightPin = 4
buttonPin = 17

GPIO.setup(lightPin, GPIO.OUT)
GPIO.setup(buttonPin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.output(lightPin, False)

try:    
    while True:
        GPIO.output(lightPin, not GPIO.input(buttonPin))
        sleep(sleepTime)
finally:
    GPIO.output(lightPin, False)
    GPIO.cleanup()
