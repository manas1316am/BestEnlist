function Person() {}

Person.prototype.befindobject = function () {
    
  var sampleinput = [
    { name: "John", age: 26 },
    { name: "siva", age: 27 },
  ]
  
  let arr = new Array();

  for(let i=0; i<sampleinput.length; i++){
    arr.push(sampleinput[i].name);
  }
  return arr;

};

var person1 = new Person();

console.log(person1.befindobject()) 