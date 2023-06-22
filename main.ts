radio.setGroup(3)
radio.setTransmitPower(7)

radio.onReceivedNumber(function (receivedNumber: number) {
    let leftMotorSpeed = Math.floor(receivedNumber / 1000);
    let rightMotorSpeed = receivedNumber % 1000;
    PCAmotor.MotorRun(PCAmotor.Motors.M1, leftMotorSpeed);
    PCAmotor.MotorRun(PCAmotor.Motors.M4, rightMotorSpeed);
});

input.onButtonPressed(Button.AB, function () {
    PCAmotor.MotorStopAll();
});

