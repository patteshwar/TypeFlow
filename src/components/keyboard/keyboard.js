import "./keyboard.css";

import { KeyboardEngine } from "./engine/keyboard-engine.js";

export class Keyboard {

    constructor(options = {}) {

        this.engine = new KeyboardEngine(options);

    }

    render() {

        return this.engine.render();

    }

}