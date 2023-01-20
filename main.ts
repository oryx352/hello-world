enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    basic.showString("hi")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("whats up!")
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
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.clearScreen()
})
basic.showIcon(IconNames.Happy)
