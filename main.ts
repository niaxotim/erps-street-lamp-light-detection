basic.forever(function () {
    if (Kitronik_LAMPbit.lightLevel() <= 512) {
        Kitronik_LAMPbit.lampLightLED(Kitronik_LAMPbit.DisplayLamp.On)
    } else {
        Kitronik_LAMPbit.lampLightLED(Kitronik_LAMPbit.DisplayLamp.Off)
    }
})
