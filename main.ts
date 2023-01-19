input.onButtonPressed(Button.A, function () {
    basic.showString("hi")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("bye")
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # # #
        . . . . #
        . . # # .
        . . . . .
        . . # . .
        `)
})
basic.showIcon(IconNames.Happy)
