var person = [
  {
    name: "manas",
    age: 20,
  },
  {
    name: "shiva",
    age: 27,
  },
];

Array.prototype.beAddObject = function(input) {
    person.forEach((item, i) => {
        item.country = input;
    })
    console.log(person) 
}

person.beAddObject("India")