let timeLeft = 60;
let timerId = null;

export function startTimer(onTick, onFinish) {
    if (timerId) return;

    timerId = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerId);
            timerId = null;
            onFinish();
            return;
        }

        timeLeft--;
        onTick(timeLeft);
    }, 1000);
}

export function resetTimer(onTick) {
    clearInterval(timerId);

    timerId = null;
    timeLeft = 60;

    onTick(timeLeft);
}

export function getTimeLeft() {
    return timeLeft;
}
export function getElapsedTime() {
    return 60 - timeLeft;
}