function Person(astring) {
    this.astring = astring,
    this.bespacify = function() {
       let n = astring.split("")
       let sum = "";
       for(let i=0; i<n.length; i++){
            sum = sum + " " + n[i];
       }
       return sum;
    }
}

var human = new Person("manas")

console.log(human.bespacify())