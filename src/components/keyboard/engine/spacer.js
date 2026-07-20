export function createSpacer(units) {

    const spacer = document.createElement("div");

    spacer.className = "keyboard-spacer";

    spacer.style.setProperty("--units", units);

    return spacer;

}