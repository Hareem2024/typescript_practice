/* eslint-disable @typescript-eslint/no-unused-vars */
export function isEven(num) {
    return num % 2 == 0;
}
export function isOdd(num) {
    return num % 2 == 1;
}
export class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b == 0)
            return 0;
        return a / b;
    }
    modulo(a, b) {
        return a % b;
    }
}
export class Cat {
    calories;
    name;
}
//# sourceMappingURL=main.js.map