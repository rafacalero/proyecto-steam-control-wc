radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
function sensor2 () {
    distanciasensor2 = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P3,
    PingUnit.Centimeters
    )
    return distanciasensor2
}
function sensor1 () {
    distanciasensor1 = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    return distanciasensor1
}
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
let distanciasensor2 = 0
let distanciasensor1 = 0
distanciasensor1 = 0
distanciasensor2 = 0
let acumulado = 0
basic.forever(function () {
    radio.setGroup(1)
    if (acumulado >= 3) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
basic.forever(function () {
    distanciasensor1 = sensor1()
    distanciasensor2 = sensor2()
    if (distanciasensor1 > 40 && distanciasensor2 > 40) {
        acumulado += 1
    } else if (distanciasensor2 < 40 && distanciasensor1 > 40) {
        acumulado += -1
    } else {
        acumulado += 0
    }
    basic.showNumber(acumulado)
})
