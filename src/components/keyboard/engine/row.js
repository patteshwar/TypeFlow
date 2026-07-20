import { createKey } from "./key.js";
import { createSpacer } from "./spacer.js";

export function createRow(rowData) {

    const row = document.createElement("div");

    row.className = "keyboard-row";

    rowData.forEach(item => {

        if ("spacer" in item) {
            row.appendChild(createSpacer(item.spacer));
        } else {
            row.appendChild(createKey(item));
        }

    });

    return row;
}