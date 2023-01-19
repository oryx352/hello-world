input.onButtonPressed(Button.A, function () {
    basic.showString("hi")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("bye")
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . # # # #
            . . . . #
            . . # # .
            . . . . .
            . . # . .
            `,10)
basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
basic.showIcon(IconNames.Happy)
