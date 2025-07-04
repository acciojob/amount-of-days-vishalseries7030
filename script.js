function daysOfAYear(year) {
  // Leap year logic
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366;
  } else {
    return 365;
  }
}

let input = prompt("Enter a year:");
let year = parseInt(input);

alert(daysOfAYear(year));


