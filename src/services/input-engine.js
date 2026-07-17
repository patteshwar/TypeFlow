import { prompt } from "../utils/prompts.js";

import { 
    startTimer, 
    resetTimer, 
    getElapsedTime,
    pauseTimer,
    resumeTimer,
    getTimeLeft,
} from "./timer.js";

import {
    calculateWPM,
    updateAverageWPM,
    updatePeakWPM,
    resetWPM,
} from "./wpm.js";

import { calculateAccuracy } from "./accuracy.js";

export function initializeInputEngine() {
    const input = document.querySelector(".typing-input");
    const characters = document.querySelectorAll(".character");
    const typingArea = document.querySelector(".typing-area");
    const timeDisplay = document.querySelector("#time");

    let idleTimeout = null;

    if (!input || !typingArea || !timeDisplay) return;

    // Show cursor at the first character
    characters[0].classList.add("current");


typingArea.addEventListener("click", () => {

    // Already typing → just refocus
    if (!input.disabled) {
        input.focus();
        return;
    }

    // Enable typing
    input.disabled = false;
    input.value = "";

    // Reset prompt styling
    characters.forEach(character => {
        character.classList.remove(
            "correct",
            "incorrect",
            "current"
        );
    });

    characters[0].classList.add("current");

    // Reset stats
    resetTimer((timeLeft) => {
        timeDisplay.textContent = `${timeLeft}s`;
    });

    resetWPM();

    document.querySelector("#current-wpm").textContent = 0;
    document.querySelector("#average-wpm").textContent = 0;
    document.querySelector("#peak-wpm").textContent = 0;
    document.querySelector("#accuracy").textContent = "100%";
    
    document.querySelector("#characters").textContent =
    `0/${prompt.length}`;

    input.focus();

    startTimer(
        (timeLeft) => {
            timeDisplay.textContent = `${timeLeft}s`;
        },
        () => {
            input.disabled = true;
        }
    );

});
    // Handle typing
    input.addEventListener("input", (event) => {
    const typed = event.target.value;

    const typedLength = Math.min(typed.length, characters.length);

    if (typedLength > characters.length) {
        input.value = typed.slice(0, characters.length);
        return;
    }

    document.querySelector("#characters").textContent = `${typedLength}/${prompt.length}`;

    // Clear previous states
    characters.forEach((character) => {
        character.classList.remove("correct", "incorrect", "current");
    });

    // Validate typed characters
    typed.split("").forEach((letter, index) => {
        if (letter === prompt[index]) {
            characters[index].classList.add("correct");
        } else {
            characters[index].classList.add("incorrect");
        }
    });

    const correctCharacters = document.querySelectorAll(".character.correct").length;
    const incorrectCharacters = document.querySelectorAll(".character.incorrect").length;
    
    const accuracy = calculateAccuracy(correctCharacters, incorrectCharacters);
    document.querySelector("#accuracy").textContent = `${accuracy}%`;

    const elapsedTime = getElapsedTime();

    const currentWPM = calculateWPM(
        correctCharacters,
        elapsedTime
    );

    const averageWPM = updateAverageWPM(currentWPM);
    const peakWPM = updatePeakWPM(currentWPM);

        document.querySelector("#current-wpm").textContent = currentWPM;
        document.querySelector("#average-wpm").textContent = averageWPM;
        document.querySelector("#peak-wpm").textContent = peakWPM;

    // Move cursor
    if (typed.length < characters.length) {
        characters[typed.length].classList.add("current");
    }

    if (typed.length === characters.length) {
        pauseTimer();
        
        document.querySelector("#time").textContent = `${getTimeLeft()}s`;
        input.disabled = true;
    }

    clearTimeout(idleTimeout);

    resumeTimer(
        (timeLeft) => {
            timeDisplay.textContent = `${timeLeft}s`;
        },
        () => {
            input.disabled = true;
        }
    );

    idleTimeout = setTimeout(() => {
        pauseTimer();
    }, 2000);

    });
}