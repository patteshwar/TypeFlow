export function Stats() {
    return `
        <div class="stats">

            <div class="stat">
                <span class="stat-label">Current</span>
                <span id="current-wpm" class="stat-value">0</span>
            </div>

            <div class="stat">
                <span class="stat-label">Average</span>
                <span id="average-wpm" class="stat-value">0</span>
            </div>

            <div class="stat">
                <span class="stat-label">Peak</span>
                <span id="peak-wpm" class="stat-value">0</span>
            </div>

            <div class="stat">
                <span class="stat-label">Time</span>
                <span id="time" class="stat-value">60s</span>
            </div>

            <div class="stat">
                <span class="stat-label">Accuracy</span>
                <span id="accuracy" class="stat-value">100%</span>
            </div>

            <div class="stat">
                <span class="stat-label">Characters</span>
                <span id="characters" class="stat-value">0/43</span>
            </div>

        </div>
    `;
}