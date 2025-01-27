const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    } else if (b > a) {
        for (let i = 0; i < b; i++) {
            sum = sum + (a + i);
        }
    } else {
        for (let i = 0; i < a; i++) {
            sum = sum + (b + i);
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
