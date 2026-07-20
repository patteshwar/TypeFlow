import { Renderer } from "./renderer.js";
import { layouts } from "../layouts/index.js";

export class KeyboardEngine {

    constructor(options = {}) {

        this.layout = layouts[options.layout || "ansi"];

        this.renderer = new Renderer();
    }

    render() {
        return this.renderer.render(this.layout);
    }

}