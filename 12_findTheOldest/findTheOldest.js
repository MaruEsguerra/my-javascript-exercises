const findTheOldest = function(people) {
    const person = people.sort((a, b) => {
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = new Date().getFullYear();
        } else if (b.yearOfDeath === undefined) {
            b.yearOfDeath = new Date().getFullYear();
        }

        const currentPerson = a.yearOfDeath - a. yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return nextPerson - currentPerson;
    });
    return person[0];
};

// Do not edit below this line
module.exports = findTheOldest;
