class Color {
    constructor(r, g, b, colorName) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.colorName = colorName;
    }
    greet() {
        return `Hello From ${this.colorName}`;
    }
    rgba(a = 1.0) {
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b}, ${a})`;
    }
}

const c1 = new Color(125, 120, 100, 'tomato');

