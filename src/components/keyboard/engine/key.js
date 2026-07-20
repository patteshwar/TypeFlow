export function createKey(keyData) {

    const key = document.createElement("div");

    key.className = "key";

    key.dataset.code = keyData.code;
    key.dataset.type = keyData.type || "normal";

    key.style.setProperty("--units", keyData.units || 1);

    const secondary = document.createElement("span");
    secondary.className = "key-secondary";
    secondary.textContent = keyData.secondary || "";

    const primary = document.createElement("span");
    primary.className = "key-primary";
    primary.textContent = keyData.primary || "";

    key.appendChild(secondary);
    key.appendChild(primary);

    return key;
}