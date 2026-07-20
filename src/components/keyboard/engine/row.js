import { createKey } from "./key.js";

export function createRow(rowData) {

    const row = document.createElement("div");

    row.className = "keyboard-row";

    rowData.forEach(keyData => {
        row.appendChild(createKey(keyData));
    });

    return row;
}