// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray) {
  const newArray = driversArray;
   return newArray.slice(0,2);
}

const returnLastTwoDrivers = function(driversArray) {
  const newArray = driversArray;
  return newArray.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
