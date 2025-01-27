const removeFromArray = function(array, ...numbers) {
    for (const number of numbers) {
        while (array.indexOf(number) !== -1) {
            const index = array.indexOf(number);
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
