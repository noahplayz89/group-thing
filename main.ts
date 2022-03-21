basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(4, 2)
        led.plot(3, 3)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(4, 2)
        led.plot(3, 3)
    }
})
