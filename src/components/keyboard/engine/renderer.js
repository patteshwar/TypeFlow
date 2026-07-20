import { createRow } from "./row.js";

export class Renderer {

    render(layout) {

    const keyboard = document.createElement("div");

    keyboard.className = "keyboard";

    layout.rows.forEach((rowData) => {

        const row = createRow(rowData);

        keyboard.appendChild(row);

    });

    return keyboard;
}

}