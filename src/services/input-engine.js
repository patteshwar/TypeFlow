import { prompt } from "../utils/prompts.js";
import { startTimer, resetTimer } from "./timer.js";

export function initializeInputEngine() {
    const input = document.querySelector(".typing-input");
    const characters = document.querySelectorAll(".character");
    const startButton = document.querySelector("#start-button");
    const typingArea = document.querySelector(".typing-area");
    const timeDisplay = document.querySelector("#time");

    if (!input || !startButton || !typingArea || !timeDisplay) return;

    // Show cursor at the first character
    characters[0].classList.add("current");

    // Keep the hidden input focused while typing
    typingArea.addEventListener("click", () => {
        if (!input.disabled) {
            input.focus();
        }
    });

    // Start a new typing session
    startButton.addEventListener("click", () => {
        // Reset input
        input.disabled = false;
        input.value = "";

        // Reset character styles
        characters.forEach((character) => {
            character.classList.remove("correct", "incorrect", "current");
        });

        characters[0].classList.add("current");

        // Reset timer display
        resetTimer((timeLeft) => {
            timeDisplay.textContent = `${timeLeft}s`;
        });

        // Focus hidden input
        input.focus();
        startButton.blur();
        startButton.disabled = true;

        // Start timer
        startTimer(
            (timeLeft) => {
                timeDisplay.textContent = `${timeLeft}s`;
            },
            () => {
                input.disabled = true;
                startButton.disabled = false;
            }
        );
    });

    // Handle typing
    input.addEventListener("input", (event) => {
        const typed = event.target.value;

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

        // Move cursor
        if (typed.length < characters.length) {
            characters[typed.length].classList.add("current");
        }
    });
}