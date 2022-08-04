input.onButtonPressed(Button.A, function () {
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    basic.showLeds(`
        # . # # #
        # . # . #
        # # # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        . # # # #
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # . .
        # . # . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    basic.showLeds(`
        # # # . #
        # . . # .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(2000)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 100; index++) {
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
        basic.showLeds(`
            # . # # #
            # . # . #
            # # # . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # # # #
            . # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(5000)
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
        basic.showLeds(`
            # # # . #
            # . . # .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(2000)
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.GetReady)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
        basic.showLeds(`
            . . # # #
            # . # . #
            # . . . #
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(7000)
    }
})
input.onButtonPressed(Button.B, function () {
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    basic.showLeds(`
        . . # # #
        # . # . #
        # . . . #
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
