const numbers = [13, 42, 1337];
// Create a new array with the numbers doubled
//console.log('dubled', numbers.map(i => i * 2))

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
// create a new array with the first 3 letters of each day
//console.log('days', days.map(day => day.slice(0, 3)))

const people = [{
  first_name: 'CJ',
  last_name: 'R.'
}, {
  first_name: 'Brendan',
  last_name: 'Eich'
}, {
  first_name: 'Kyle',
  last_name: 'Simpson'
}, {
  first_name: 'Douglas',
  last_name: 'Crockford'
}];
// Create a new array with the string full name of each person
//console.log('people', people.map(i => i.first_name + ' ' + i.last_name))

const animals = [{
  'name': 'cat',
  'size': 'small'
}, {
  'name': 'dog',
  'size': 'small'
}, {
  'name': 'lion',
  'size': 'medium'
}, {
  'name': 'elephant',
  'size': 'big'
}];
// Create a new array with just the names of the animals

//console.log('animals', animals.map((value, index) => value.name))

const theNumbers = [4, 8, 15, 16, 23, 42];
// create a new array of objects with the properties value and index
//console.log('nums', theNumbers.map((val, key) => new Object(key, val)))

const starter = [2, 5, 10];
// Create a new array with each value multiplied by the next value
// The last value should be multiplied by the first value
// e.g. [2*5, 5*10, 10*2] == [10, 50, 20]

console.log(starter.reduce((a, b) => a + b))