const convertToCelsius = function(fahrenheit) {
  let celsiusConversion = (5 / 9) * (fahrenheit - 32);
  let celsius = Math.round(celsiusConversion * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheitConversion = ((9 / 5) * celsius) + 32;
  let fahrenheit = Math.round(fahrenheitConversion * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
