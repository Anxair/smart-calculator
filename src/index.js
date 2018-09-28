class SmartCalculator {

    constructor(initialValue) {
        this.expression = initialValue;
    }

    add(number) {
        this.expression += "+" + number;
        return this;
    }

    subtract(number) {
        this.expression += "-" + number;
        return this;
    }

    multiply(number) {
        this.expression += "*" + number;
        return this;
    }

    devide(number) {
        this.expression += "/" + number;
        return this;
    }

    pow(number) {
        this.expression += "^" + number;
        return this;
    }

    solution(expression) {
        let initPowArr = expression.match(/(([0-9]+\^)+[0-9])/g);
        let transformPowArr = [];
        if (initPowArr !== null) {
            for (let i = 0; i < initPowArr.length; i++) {
                let splitArr = initPowArr[i].split('^');
                for (let j = splitArr.length - 2; j >= 0; j--) {
                    splitArr[j] = ((Math.pow(parseInt(splitArr[j]), parseInt(splitArr[j + 1]))).toString());
                }
                transformPowArr.push(splitArr[0]);
            }
            for (let i = 0; i < transformPowArr.length; i++) {
                expression = expression.replace(/(([0-9]+\^)+[0-9])/, transformPowArr[i]);
            }
        }
        return eval(expression);
    }

    valueOf() {
        return this.solution(this.expression);
    }

}

module.exports = SmartCalculator;
