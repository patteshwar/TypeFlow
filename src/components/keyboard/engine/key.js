export function createKey(keyData) {

    const key = document.createElement("div");

    key.className = "key";

    key.dataset.code = keyData.code;

    key.dataset.type = keyData.type || "normal";

    key.style.setProperty("--units", keyData.units || 1);

    key.textContent = keyData.label;

    return key;

}