export const KEYMAP = {

    // ==========================
    // LETTERS
    // ==========================

    KeyA: { primary: "A", secondary: "", outputs: ["a", "A"], type: "letter" },
    KeyB: { primary: "B", secondary: "", outputs: ["b", "B"], type: "letter" },
    KeyC: { primary: "C", secondary: "", outputs: ["c", "C"], type: "letter" },
    KeyD: { primary: "D", secondary: "", outputs: ["d", "D"], type: "letter" },
    KeyE: { primary: "E", secondary: "", outputs: ["e", "E"], type: "letter" },
    KeyF: { primary: "F", secondary: "", outputs: ["f", "F"], type: "letter" },
    KeyG: { primary: "G", secondary: "", outputs: ["g", "G"], type: "letter" },
    KeyH: { primary: "H", secondary: "", outputs: ["h", "H"], type: "letter" },
    KeyI: { primary: "I", secondary: "", outputs: ["i", "I"], type: "letter" },
    KeyJ: { primary: "J", secondary: "", outputs: ["j", "J"], type: "letter" },
    KeyK: { primary: "K", secondary: "", outputs: ["k", "K"], type: "letter" },
    KeyL: { primary: "L", secondary: "", outputs: ["l", "L"], type: "letter" },
    KeyM: { primary: "M", secondary: "", outputs: ["m", "M"], type: "letter" },
    KeyN: { primary: "N", secondary: "", outputs: ["n", "N"], type: "letter" },
    KeyO: { primary: "O", secondary: "", outputs: ["o", "O"], type: "letter" },
    KeyP: { primary: "P", secondary: "", outputs: ["p", "P"], type: "letter" },
    KeyQ: { primary: "Q", secondary: "", outputs: ["q", "Q"], type: "letter" },
    KeyR: { primary: "R", secondary: "", outputs: ["r", "R"], type: "letter" },
    KeyS: { primary: "S", secondary: "", outputs: ["s", "S"], type: "letter" },
    KeyT: { primary: "T", secondary: "", outputs: ["t", "T"], type: "letter" },
    KeyU: { primary: "U", secondary: "", outputs: ["u", "U"], type: "letter" },
    KeyV: { primary: "V", secondary: "", outputs: ["v", "V"], type: "letter" },
    KeyW: { primary: "W", secondary: "", outputs: ["w", "W"], type: "letter" },
    KeyX: { primary: "X", secondary: "", outputs: ["x", "X"], type: "letter" },
    KeyY: { primary: "Y", secondary: "", outputs: ["y", "Y"], type: "letter" },
    KeyZ: { primary: "Z", secondary: "", outputs: ["z", "Z"], type: "letter" },

    // ==========================
    // NUMBERS
    // ==========================

    Digit1: { primary: "1", secondary: "!", outputs: ["1", "!"], type: "number" },
    Digit2: { primary: "2", secondary: "@", outputs: ["2", "@"], type: "number" },
    Digit3: { primary: "3", secondary: "#", outputs: ["3", "#"], type: "number" },
    Digit4: { primary: "4", secondary: "$", outputs: ["4", "$"], type: "number" },
    Digit5: { primary: "5", secondary: "%", outputs: ["5", "%"], type: "number" },
    Digit6: { primary: "6", secondary: "^", outputs: ["6", "^"], type: "number" },
    Digit7: { primary: "7", secondary: "&", outputs: ["7", "&"], type: "number" },
    Digit8: { primary: "8", secondary: "*", outputs: ["8", "*"], type: "number" },
    Digit9: { primary: "9", secondary: "(", outputs: ["9", "("], type: "number" },
    Digit0: { primary: "0", secondary: ")", outputs: ["0", ")"], type: "number" },

    // ==========================
    // SYMBOLS
    // ==========================

    Backquote: { primary: "`", secondary: "~", outputs: ["`", "~"], type: "symbol" },
    Minus: { primary: "-", secondary: "_", outputs: ["-", "_"], type: "symbol" },
    Equal: { primary: "=", secondary: "+", outputs: ["=", "+"], type: "symbol" },

    BracketLeft: { primary: "[", secondary: "{", outputs: ["[", "{"], type: "symbol" },
    BracketRight: { primary: "]", secondary: "}", outputs: ["]", "}"], type: "symbol" },

    Backslash: { primary: "\\", secondary: "|", outputs: ["\\", "|"], type: "symbol" },

    Semicolon: { primary: ";", secondary: ":", outputs: [";", ":"], type: "symbol" },

    Quote: { primary: "'", secondary: "\"", outputs: ["'", "\""], type: "symbol" },

    Comma: { primary: ",", secondary: "<", outputs: [",", "<"], type: "symbol" },

    Period: { primary: ".", secondary: ">", outputs: [".", ">"], type: "symbol" },

    Slash: { primary: "/", secondary: "?", outputs: ["/", "?"], type: "symbol" },

    // ==========================
    // MODIFIERS
    // ==========================

    Tab: { primary: "Tab", secondary: "", outputs: [], type: "modifier" },

    CapsLock: { primary: "Caps", secondary: "", outputs: [], type: "modifier" },

    ShiftLeft: { primary: "Shift", secondary: "", outputs: [], type: "modifier" },
    ShiftRight: { primary: "Shift", secondary: "", outputs: [], type: "modifier" },

    ControlLeft: { primary: "Ctrl", secondary: "", outputs: [], type: "modifier" },
    ControlRight: { primary: "Ctrl", secondary: "", outputs: [], type: "modifier" },

    AltLeft: { primary: "Alt", secondary: "", outputs: [], type: "modifier" },
    AltRight: { primary: "Alt", secondary: "", outputs: [], type: "modifier" },

    MetaLeft: { primary: "Win", secondary: "", outputs: [], type: "modifier" },
    MetaRight: { primary: "Win", secondary: "", outputs: [], type: "modifier" },

    ContextMenu: { primary: "Menu", secondary: "", outputs: [], type: "modifier" },

    Enter: { primary: "Enter", secondary: "", outputs: [], type: "modifier" },

    Backspace: { primary: "Backspace", secondary: "", outputs: [], type: "modifier" },

    Space: { primary: "", secondary: "", outputs: [" "], type: "space" },

    // ==========================
    // FUNCTION KEYS
    // ==========================

    Escape: { primary: "Esc", secondary: "", outputs: [], type: "function" },

    F1: { primary: "F1", secondary: "", outputs: [], type: "function" },
    F2: { primary: "F2", secondary: "", outputs: [], type: "function" },
    F3: { primary: "F3", secondary: "", outputs: [], type: "function" },
    F4: { primary: "F4", secondary: "", outputs: [], type: "function" },
    F5: { primary: "F5", secondary: "", outputs: [], type: "function" },
    F6: { primary: "F6", secondary: "", outputs: [], type: "function" },
    F7: { primary: "F7", secondary: "", outputs: [], type: "function" },
    F8: { primary: "F8", secondary: "", outputs: [], type: "function" },
    F9: { primary: "F9", secondary: "", outputs: [], type: "function" },
    F10: { primary: "F10", secondary: "", outputs: [], type: "function" },
    F11: { primary: "F11", secondary: "", outputs: [], type: "function" },
    F12: { primary: "F12", secondary: "", outputs: [], type: "function" },

    // ==========================
    // NAVIGATION
    // ==========================

    Insert: { primary: "Ins", secondary: "", outputs: [], type: "navigation" },
    Delete: { primary: "Del", secondary: "", outputs: [], type: "navigation" },

    Home: { primary: "Home", secondary: "", outputs: [], type: "navigation" },
    End: { primary: "End", secondary: "", outputs: [], type: "navigation" },

    PageUp: { primary: "PgUp", secondary: "", outputs: [], type: "navigation" },
    PageDown: { primary: "PgDn", secondary: "", outputs: [], type: "navigation" },

    // ==========================
    // ARROWS
    // ==========================

    ArrowUp: { primary: "▲", secondary: "", outputs: [], type: "arrow" },
    ArrowDown: { primary: "▼", secondary: "", outputs: [], type: "arrow" },
    ArrowLeft: { primary: "◀", secondary: "", outputs: [], type: "arrow" },
    ArrowRight: { primary: "▶", secondary: "", outputs: [], type: "arrow" },

    // ==========================
    // SYSTEM
    // ==========================

    PrintScreen: { primary: "PrtSc", secondary: "", outputs: [], type: "system" },
    ScrollLock: { primary: "ScrLk", secondary: "", outputs: [], type: "system" },
    Pause: { primary: "Pause", secondary: "", outputs: [], type: "system" },

    // ==========================
    // NUMPAD
    // ==========================

    NumLock: { primary: "Num", secondary: "", outputs: [], type: "numpad" },

    NumpadDivide: { primary: "/", secondary: "", outputs: ["/"], type: "numpad" },
    NumpadMultiply: { primary: "*", secondary: "", outputs: ["*"], type: "numpad" },
    NumpadSubtract: { primary: "-", secondary: "", outputs: ["-"], type: "numpad" },
    NumpadAdd: { primary: "+", secondary: "", outputs: ["+"], type: "numpad" },

    NumpadEnter: { primary: "Enter", secondary: "", outputs: [], type: "numpad" },

    NumpadDecimal: { primary: ".", secondary: "", outputs: ["."], type: "numpad" },

    Numpad0: { primary: "0", secondary: "", outputs: ["0"], type: "numpad" },
    Numpad1: { primary: "1", secondary: "", outputs: ["1"], type: "numpad" },
    Numpad2: { primary: "2", secondary: "", outputs: ["2"], type: "numpad" },
    Numpad3: { primary: "3", secondary: "", outputs: ["3"], type: "numpad" },
    Numpad4: { primary: "4", secondary: "", outputs: ["4"], type: "numpad" },
    Numpad5: { primary: "5", secondary: "", outputs: ["5"], type: "numpad" },
    Numpad6: { primary: "6", secondary: "", outputs: ["6"], type: "numpad" },
    Numpad7: { primary: "7", secondary: "", outputs: ["7"], type: "numpad" },
    Numpad8: { primary: "8", secondary: "", outputs: ["8"], type: "numpad" },
    Numpad9: { primary: "9", secondary: "", outputs: ["9"], type: "numpad" }

};