// Code your solution here:
function driversWithRevenueOver(drivers, num) {
  return drivers.filter(driver => driver.revenue > num)
}

function driverNamesWithRevenueOver(drivers, num) {
  return driversWithRevenueOver(drivers, num).map(driver => driver["name"])
}

function exactMatch(drivers, attribute) {
  return drivers.filter(driver => driver[Object.keys(attribute)[0]] === attribute[Object.keys(attribute)[0]])
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(driver => driver["name"])
}
