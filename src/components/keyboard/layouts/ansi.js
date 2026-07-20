import { KEYMAP } from "../data/keymap";

const key = (code, units = 1) => ({
    code,
    units,
    ...KEYMAP[code]
});

const gap = (units) => ({ spacer: units });

export const ansiLayout = {
    id: "ansi",
    name: "ANSI Full Size",

    rows: [

        // ───────────────────────────────
        // Function Row
        // ───────────────────────────────

        [
            key("Escape"),

            gap(1),

            key("F1"),
            key("F2"),
            key("F3"),
            key("F4"),

            gap(1),

            key("F5"),
            key("F6"),
            key("F7"),
            key("F8"),

            gap(1),

            key("F9"),
            key("F10"),
            key("F11"),
            key("F12"),

            gap(1),

            key("PrintScreen"),
            key("ScrollLock"),
            key("Pause")
        ],

        // ───────────────────────────────
        // Number Row
        // ───────────────────────────────

        [
            key("Backquote"),

            key("Digit1"),
            key("Digit2"),
            key("Digit3"),
            key("Digit4"),
            key("Digit5"),
            key("Digit6"),
            key("Digit7"),
            key("Digit8"),
            key("Digit9"),
            key("Digit0"),

            key("Minus"),
            key("Equal"),

            key("Backspace", 2),

            gap(1),

            key("Insert"),
            key("Home"),
            key("PageUp"),

            gap(1),

            key("NumLock"),
            key("NumpadDivide"),
            key("NumpadMultiply"),
            key("NumpadSubtract")
        ],

        // ───────────────────────────────
        // QWERTY Row
        // ───────────────────────────────

        [
            key("Tab", 1.5),

            key("KeyQ"),
            key("KeyW"),
            key("KeyE"),
            key("KeyR"),
            key("KeyT"),
            key("KeyY"),
            key("KeyU"),
            key("KeyI"),
            key("KeyO"),
            key("KeyP"),

            key("BracketLeft"),
            key("BracketRight"),
            key("Backslash", 1.5),

            gap(.5),

            key("Delete"),
            key("End"),
            key("PageDown"),

            gap(.5),

            key("Numpad7"),
            key("Numpad8"),
            key("Numpad9"),
            key("NumpadAdd")
        ],

        // ───────────────────────────────
        // Home Row
        // ───────────────────────────────

        [
            key("CapsLock", 1.75),

            key("KeyA"),
            key("KeyS"),
            key("KeyD"),
            key("KeyF"),
            key("KeyG"),
            key("KeyH"),
            key("KeyJ"),
            key("KeyK"),
            key("KeyL"),

            key("Semicolon"),
            key("Quote"),

            key("Enter", 2.25),

            gap(4),

            key("Numpad4"),
            key("Numpad5"),
            key("Numpad6")
        ],

        // ───────────────────────────────
        // Bottom Letter Row
        // ───────────────────────────────

        [
            key("ShiftLeft", 2.25),

            key("KeyZ"),
            key("KeyX"),
            key("KeyC"),
            key("KeyV"),
            key("KeyB"),
            key("KeyN"),
            key("KeyM"),

            key("Comma"),
            key("Period"),
            key("Slash"),

            key("ShiftRight", 2.75),

            gap(1.16),

            key("ArrowUp"),

            gap(1),

            key("Numpad1"),
            key("Numpad2"),
            key("Numpad3"),

            key("NumpadEnter", 2.25)
        ],

        // ───────────────────────────────
        // Bottom Row
        // ───────────────────────────────

        [
            key("ControlLeft", 1.25),

            key("MetaLeft", 1.25),

            key("AltLeft", 1.25),

            key("Space", 6.25),

            key("AltRight", 1.25),

            key("MetaRight", 1.25),

            key("ContextMenu", 1.25),

            key("ControlRight", 1.25),

            gap(.5),

            key("ArrowLeft"),
            key("ArrowDown"),
            key("ArrowRight"),

            gap(.5),

            key("Numpad0", 2),

            key("NumpadDecimal")
        ]

    ]
};