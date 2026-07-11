import { prompt } from "../utils/prompts.js";

export function initializeInputEngine() {
    const input = document.querySelector(".typing-input");
    const characters = document.querySelectorAll(".character");

    if (!input) return;

    characters[0].classList.add("current");

    input.addEventListener("input", (event) => {
        const typed = event.target.value;

        characters.forEach(character => {
            character.classList.remove("correct", "incorrect", "current");
        });

        typed.split("").forEach((letter, index) => {
            if (letter === prompt[index]) {
                characters[index].classList.add("correct");
            } else {
                characters[index].classList.add("incorrect");
            }
        });

        if (typed.length < characters.length) {
            characters[typed.length].classList.add("current");
        }
    });
}