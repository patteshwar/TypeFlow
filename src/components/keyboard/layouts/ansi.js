export const ansiLayout = [
    [
        { code: "Escape", label: "Esc", units: 1 },

        { spacer: 0.5 },

        { code: "F1", label: "F1", units: 1 },
        { code: "F2", label: "F2", units: 1 },
        { code: "F3", label: "F3", units: 1 },
        { code: "F4", label: "F4", units: 1 },

        { spacer: 0.5 },

        { code: "F5", label: "F5", units: 1 },
        { code: "F6", label: "F6", units: 1 },
        { code: "F7", label: "F7", units: 1 },
        { code: "F8", label: "F8", units: 1 },

        { spacer: 0.5 },
        
        { code: "F9", label: "F9", units: 1 },
        { code: "F10", label: "F10", units: 1 },
        { code: "F11", label: "F11", units: 1 },
        { code: "F12", label: "F12", units: 1 }
    ],

    // Number Row
    [
        { code: "Backquote", label: "`", units: 1 },
        { code: "Digit1", label: "1", units: 1 },
        { code: "Digit2", label: "2", units: 1 },
        { code: "Digit3", label: "3", units: 1 },
        { code: "Digit4", label: "4", units: 1 },
        { code: "Digit5", label: "5", units: 1 },
        { code: "Digit6", label: "6", units: 1 },
        { code: "Digit7", label: "7", units: 1 },
        { code: "Digit8", label: "8", units: 1 },
        { code: "Digit9", label: "9", units: 1 },
        { code: "Digit0", label: "0", units: 1 },
        { code: "Minus", label: "-", units: 1 },
        { code: "Equal", label: "=", units: 1 },
        { code: "Backspace", label: "Backspace", units: 2 }
    ],

    // QWERTY Row
    [
        { code: "Tab", label: "Tab", units: 1.5 },

        { code: "KeyQ", label: "Q", units: 1 },
        { code: "KeyW", label: "W", units: 1 },
        { code: "KeyE", label: "E", units: 1 },
        { code: "KeyR", label: "R", units: 1 },
        { code: "KeyT", label: "T", units: 1 },
        { code: "KeyY", label: "Y", units: 1 },
        { code: "KeyU", label: "U", units: 1 },
        { code: "KeyI", label: "I", units: 1 },
        { code: "KeyO", label: "O", units: 1 },
        { code: "KeyP", label: "P", units: 1 },

        { code: "BracketLeft", label: "[", units: 1 },
        { code: "BracketRight", label: "]", units: 1 },
        { code: "Backslash", label: "\\", units: 1.5 }
    ],

    // Home Row
    [
        { code: "CapsLock", label: "Caps", units: 1.75 },

        { code: "KeyA", label: "A", units: 1 },
        { code: "KeyS", label: "S", units: 1 },
        { code: "KeyD", label: "D", units: 1 },
        { code: "KeyF", label: "F", units: 1 },
        { code: "KeyG", label: "G", units: 1 },
        { code: "KeyH", label: "H", units: 1 },
        { code: "KeyJ", label: "J", units: 1 },
        { code: "KeyK", label: "K", units: 1 },
        { code: "KeyL", label: "L", units: 1 },

        { code: "Semicolon", label: ";", units: 1 },
        { code: "Quote", label: "'", units: 1 },

        { code: "Enter", label: "Enter", units: 2.25 }
    ],

    // Bottom Letter Row
    [
        { code: "ShiftLeft", label: "Shift", units: 2.25 },

        { code: "KeyZ", label: "Z", units: 1 },
        { code: "KeyX", label: "X", units: 1 },
        { code: "KeyC", label: "C", units: 1 },
        { code: "KeyV", label: "V", units: 1 },
        { code: "KeyB", label: "B", units: 1 },
        { code: "KeyN", label: "N", units: 1 },
        { code: "KeyM", label: "M", units: 1 },

        { code: "Comma", label: ",", units: 1 },
        { code: "Period", label: ".", units: 1 },
        { code: "Slash", label: "/", units: 1 },

        { code: "ShiftRight", label: "Shift", units: 2.75 }
    ],

    // Bottom Row
    [
        { code: "ControlLeft", label: "Ctrl", units: 1.25 },
        { code: "MetaLeft", label: "Win", units: 1.25 },
        { code: "AltLeft", label: "Alt", units: 1.25 },

        { code: "Space", label: "", units: 6.25 },

        { code: "AltRight", label: "Alt", units: 1.25 },
        { code: "MetaRight", label: "Win", units: 1.25 },
        { code: "ContextMenu", label: "Menu", units: 1.25 },
        { code: "ControlRight", label: "Ctrl", units: 1.25 }
    ]
];