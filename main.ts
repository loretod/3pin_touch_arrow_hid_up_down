forever(function () {
    while (input.touchD0.isPressed()) {
        pixel.setColor(0xff0000)
        keyboard.functionKey(KeyboardFunctionKey.RightArrow, KeyboardKeyEvent.Down)
        pause(200)
        keyboard.functionKey(KeyboardFunctionKey.RightArrow, KeyboardKeyEvent.Up)
    }
    while (input.touchD1.isPressed()) {
        pixel.setColor(0x00ff00)
        keyboard.functionKey(KeyboardFunctionKey.LeftArrow, KeyboardKeyEvent.Down)
        pause(200)
        keyboard.functionKey(KeyboardFunctionKey.LeftArrow, KeyboardKeyEvent.Up)
    }
    while (input.touchD2.isPressed()) {
        pixel.setColor(0x0000ff)
        keyboard.functionKey(KeyboardFunctionKey.UpArrow, KeyboardKeyEvent.Down)
        pause(200)
        keyboard.functionKey(KeyboardFunctionKey.UpArrow, KeyboardKeyEvent.Up)
    }
})
