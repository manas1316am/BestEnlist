var sampleInput = [
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
    sampleInput.forEach((item, i) => {
        item.country = input;
    })
    console.log(sampleInput) 
}

sampleInput.beAddObject("India")