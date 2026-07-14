import { prompt } from "../utils/prompts.js";

export function TypingArea() {
    const characters = prompt
        .split("")
        .map(character => `<span class="character">${character}</span>`)
        .join("");

    return `
        <div class="typing-area">
            <p class="prompt">
                ${characters}
            </p>

            <input
                class="typing-input"
                type="text"
                autocomplete="off"
                spellcheck="false"
                disabled
            />
        </div>
    `;
}