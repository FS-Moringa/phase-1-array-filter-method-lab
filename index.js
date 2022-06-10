// Code your solution here


function findMatching(myArray, string) {
    return myArray.filter(
      (matchingName) => matchingName.toUpperCase() === string.toUpperCase()
    );
  }
  function fuzzyMatch(myArray, myString) {
    return myArray.filter(
      (matchingName) =>
        matchingName.toUpperCase().indexOf(myString.toUpperCase()) === 0
    );
  }
  function matchName(myArray, driverString) {
    return myArray.filter((record) => record.name === driverString);
  }