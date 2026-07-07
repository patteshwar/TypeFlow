import "./styles/reset.css";
import "./styles/global.css";
import "./styles/layout.css";

import "./styles/button.css";
import "./styles/card.css";
import "./styles/badge.css";
import "./styles/divider.css";

import { Button } from "./components/button";
import { Card } from "./components/card";
import { Badge } from "./components/badge";
import { Divider } from "./components/divider";

document.querySelector("#app").innerHTML = `
<header>
    <h1>TypeFlow</h1>
</header>

<main>
    ${Card(`
        <h2>Measure your typing speed:</h2>

        ${Badge("Beta")}

        ${Divider()}

        ${Button("Start Typing")}
    `)}
</main>

<footer>
    <p>© 2026 TypeFlow</p>
</footer>
`;