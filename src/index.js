class SmartCalculator {

    constructor(initialValue) {
        this.array = [];
        this.array.push(initialValue);
        this.ind = 1;
        return this;
    }

    add(number) {
        this.array.push('+', number);
        this.ind = 1;

        return this;
    }

    subtract(number) {
        this.array.push('-', number);
        this.ind = 1;

        return this;
    }

    multiply(number) {
        this.array.push('*', number);
        this.ind = 1;
        return this;
    }

    devide(number) {
        this.array.push('/', number);
        this.ind = 1;

        return this;
    }

    pow(number) {

        this.array[this.array.length - this.ind] = 'Math.pow(' + this.array[this.array.length - this.ind] + ', ';
        this.array.splice(this.array.length - this.ind + 1);
        this.array.push(number);

        for(let i = 0; i < this.ind; i++)
            this.array.push(')');

        this.ind++;

        return this;

    }

    valueOf() {
        return eval(this.array.join(''));
    }

}

module.exports = SmartCalculator;
