function createCalculator(a) {
    return {
        add: (b) => a += b,
        sub: (b) => a -= b,
        mult: (b) => a *= b,
        div: (b) => a /= b,
        set: (b) => a = b,
    };
}

const calc = createCalculator(10);
