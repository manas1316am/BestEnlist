var person = [
    {
      name: "manas",
      age: 20,
      country: "India"
    },
    {
      name: "shiva",
      age: 27,
      country: "Shiva"
    },
  ];
  
  Array.prototype.remove = function() {
      person.map((item, i) => {
  
          delete item.country;
      })
      console.log(person) 
  }
  
  person.remove()