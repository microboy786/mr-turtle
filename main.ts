input.onButtonPressed(Button.A, function () {
    turtle.forward(1)
})
input.onGesture(Gesture.ScreenUp, function () {
    turtle.back(1)
})
input.onButtonPressed(Button.AB, function () {
    turtle.turnLeft()
})
input.onButtonPressed(Button.B, function () {
    turtle.turnRight()
})
