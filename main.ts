input.onButtonPressed(Button.A, function () {
    m += -1
    if (m < 2) {
        m = 2
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(m)
})
input.onButtonPressed(Button.B, function () {
    m += 1
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, m))
})
let m = 0
m = 6
basic.forever(function () {
	
})
