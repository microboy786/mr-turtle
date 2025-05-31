input.onButtonPressed(Button.A, function () {
    turtle.turnLeft()
})
input.onButtonPressed(Button.AB, function () {
    turtle.back(1)
})
input.onButtonPressed(Button.B, function () {
    turtle.turnRight()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    turtle.forward(1)
})
basic.showString("its MR.TURTLE")
