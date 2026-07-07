export function TypingArea() {
    return `
        <div class="typing-area">

            <p class="prompt">
                <span class="cursor"> </span>The quick brown fox jumps over the lazy dog.
            </p>

            <input
                class="typing-input"
                type="text"
                placeholder=" Start typing..."
                autocomplete="off"
                spellcheck="false"
            />

        </div>
    `;
}