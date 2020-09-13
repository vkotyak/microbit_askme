input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    randomNumber = randint(0, 3)
    if (randomNumber == 2) {
        basic.showString("YES!")
    } else if (randomNumber == 1) {
        basic.showString("NO (")
    } else {
        basic.showString("MAYBE")
    }
    basic.pause(500)
    basic.showString("ASK ME")
    basic.showString("?")
})
let randomNumber = 0
basic.showString("ASK ME")
basic.showString("?")
