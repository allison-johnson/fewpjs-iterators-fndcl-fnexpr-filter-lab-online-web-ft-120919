// Code your solution here
function findMatching(arr, str) {
  return arr.filter(name => {
    return name.toUpperCase() === str.toUpperCase()
  });
}//findMatching

function fuzzyMatch(arr, str) {
  return arr.filter(name => {
    return name.toUpperCase().startsWith(str.toUpperCase())
  });
}//fuzzyMatch

function matchName(arr, str) {
  return arr.filter(driver => {
    return driver.name.toUpperCase() === str.toUpperCase()
  });
}//matchName