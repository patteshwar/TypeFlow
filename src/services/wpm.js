let peakWPM = 0;
let totalWPM = 0;
let samples = 0;

export function calculateWPM(correctCharacters, elapsedSeconds) {
    if (elapsedSeconds <= 0) {
        return 0;
    }

    const words = correctCharacters / 5;
    const minutes = elapsedSeconds / 60;

    return Math.round(words / minutes);
}

export function updateAverageWPM(currentWPM) {
    samples++;
    totalWPM += currentWPM;

    return Math.round(totalWPM / samples);
}

export function updatePeakWPM(currentWPM) {
    if (currentWPM > peakWPM) {
        peakWPM = currentWPM;
    }

    return peakWPM;
}

export function resetWPM() {
    peakWPM = 0;
    totalWPM = 0;
    samples = 0;
}