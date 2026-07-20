import { createRow } from "./row.js";

export class Renderer {

    render(layout) {

        const keyboard = document.createElement("div");

        keyboard.className = "keyboard";

        layout.forEach(rowData => {
            keyboard.appendChild(createRow(rowData));
        });

        return keyboard;
    }

}