input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Umbrella)
    pump.startDuration(Pump.RIGHT, 60, 7)
    basic.clearScreen()
})
