while (true) {
    move(FORWARD, 5, SPEED_VERY_FAST);
    if ((getSurfaceColor() == #00ff00 || getSurfaceColor() == #ff0000) || (getSurfaceColor() == #000000 || getSurfaceColor() == #0000ff)) {
        for (var count = 0; count < 3; count++) {
            sayColor((getSurfaceColor()));
            setLEDColor(LED_TOP, (getSurfaceColor()));
            play(LAUGH);
            spin(LEFT);
        }
    }
    if ((getIrIntensity(LEFT_FRONT) >= 40 || getIrIntensity(RIGHT_FRONT) >= 40)) {
        move(BACKWARD, 10, SPEED_VERY_FAST);
        rotate(45, SPEED_MEDIUM);
    }
}