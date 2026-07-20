import "./styles/reset.css";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/button.css";
import "./styles/badge.css";
import "./styles/divider.css";
import "./styles/stats.css";
import "./styles/typing-area.css";

import { Button } from "./components/button";
import { Badge } from "./components/badge";
import { Divider } from "./components/divider";
import { Stats } from "./components/stats";
import { TypingArea } from "./components/typing-area";

import { Keyboard } from "./components/keyboard/keyboard";

import { initializeInputEngine } from "./services/input-engine";

document.querySelector("#app").innerHTML = `
<header>
    <div class="site-header">

        <div class="logo-placeholder">
            TF
        </div>

        <h1>TypeFlow</h1>

        <button class="settings-button">
            ⚙
        </button>

    </div>
</header>

<main>

    <div class="hero">

        <h2>Measure your typing speed:</h2>

        ${TypingArea()}

        ${Divider()}
    </div>

    <div class="stats-section">
        ${Stats()}
    </div>

    <div class="keyboard-section"></div>

</main>

<footer>
    <p>© 2026 TypeFlow</p>
</footer>
`;

const keyboardContainer = document.querySelector(".keyboard-section");

const keyboard = new Keyboard({
    layout: "ansi"
});

keyboardContainer.appendChild(keyboard.render());

initializeInputEngine();