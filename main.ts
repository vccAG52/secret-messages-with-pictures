input.onButtonPressed(Button.A, function () {
    if (Password_count == 0) {
    	
    }
    if (Password_count == 1) {
    	
    }
    if (Password_count == 2) {
    	
    }
    if (Password_correct == 1) {
        MyImage = images.createBigImage(`
            . . # # . . # # . .
            . . # # . . # # . .
            . . . . . . . . . .
            . # . . . . . . # .
            . . # # # # # # . .
            `)
        radio.sendString("" + (MyImage))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Password_count == 0) {
        Password_count = 100
    }
    if (Password_count == 2) {
        Password_count = 100
    }
    if (Password_count == 3) {
        Password_correct = 1
        radio.setGroup(1235)
    }
    if (Password_correct == 1) {
        MyImage = images.createBigImage(`
            . . # # . . # # . .
            . . # # . . # # . .
            . . . . . . . . . .
            . # . . . . . . # .
            . . # # # # # # . .
            `)
        radio.sendString("" + (MyImage))
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onGesture(Gesture.Shake, function () {
    if (Password_count == 0) {
        Password_count = 100
    }
    if (Password_count == 2) {
        Password_count = 100
    }
    if (Password_count == 1) {
        Password_count = 100
    }
    if (Password_correct == 1) {
        MyImage = images.createBigImage(`
            . . # # . . # # . .
            . . # # . . # # . .
            . . . . . . . . . .
            . . # # # # # # . .
            . # . . . . . . # .
            `)
        radio.sendString("" + (MyImage))
        radio.sendString("Hi! How are you?")
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (Password_count == 0) {
        Password_count = 100
    }
    if (Password_count == 2) {
        Password_count = 100
    }
    if (Password_count == 1) {
        Password_count += 1
    }
    if (Password_correct == 1) {
        MyImage = images.createBigImage(`
            . . # # . . # # . .
            . . # # . . # # . .
            # . . . . . . . . #
            # . # . . . . # . #
            . . . # # # # . . .
            `)
        radio.sendString("" + (MyImage))
        radio.sendString("This is me, Violet.")
    }
})
let MyImage: Image = null
let Password_count = 0
let Password_correct = 0
Password_correct = 0
Password_count = 0
basic.showString("Password?")
basic.pause(100)
