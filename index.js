const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function returnFirstTwoDrivers(drivers) {
  var twoDrivers = [];
  twoDrivers.push(drivers[0]);
  twoDrivers.push(drivers[1]);
  return twoDrivers;
}

function returnLastTwoDrivers(drivers) {
  var lenDrivers = drivers.length;
  var lastTwoDrivers = [];
  var secondLast = lenDrivers - 2;
  var last = lenDrivers - 1;
  lastTwoDrivers.push(drivers[secondLast]);
  lastTwoDrivers.push(drivers[last]);
  return lastTwoDrivers;
}

function createFareMultiplier(num) {
  return function (value) {
    var result = num * value;
    return result;
  };
}
function fareDoubler(a) {
  var result = a * 2;
  return result;
}

function fareTripler(a) {
  var result = a * 3;
  return result;
}

const fareQuintupler = createFareMultiplier(5);
console.log(fareQuintupler(5));
console.log(fareDoubler(5));
console.log(fareTripler(6));

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
