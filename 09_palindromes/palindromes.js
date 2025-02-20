const palindromes = function (word) {
    // \W matches any non-word character, including spaces. _ is technically alphanumeric
    // Regexes are enclosed in slashes than quotes in js
    const cleaned = word.toLowerCase().replace(/[\W_]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
