#blink.py
import time
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)

GPIO.setup(4, GPIO.OUT)

GPIO.output(4, True)
print("Light On")

time.sleep(1)
GPIO.output(4, False)
print("Light Off")

GPIO.cleanup()
print("blink.py finished!")
