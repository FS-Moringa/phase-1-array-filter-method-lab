// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }

  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
  }

  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
  }
  
  