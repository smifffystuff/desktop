import RPi.GPIO as GPIO
import time
print("Starting blink test")
GPIO.setwarnings(True)
GPIO.setmode(GPIO.BCM)
GPIO.setup(22, GPIO.OUT)
GPIO.output(22, True)
time.sleep(2)
GPIO.output(22, False)
GPIO.cleanup()
