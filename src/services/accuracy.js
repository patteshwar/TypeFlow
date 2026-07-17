export function calculateAccuracy(correct, incorrect) {
    const total = correct + incorrect;

    if (total === 0) {
        return 100;
    }

    return Math.round((correct / total) * 100);
}