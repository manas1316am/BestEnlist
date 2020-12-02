function Vowel(astring) {
  this.astring = astring,
    this.avowel = function () {
      let n = astring.split("");
      var arr = new Array(
        "A",
        "E",
        "I",
        "O",
        "U",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f"
      );
      let sum = ""
      for(let i=0; i<n.length; i++){
          for(let j=0; j<arr.length; j++){
              if(n[i] === arr[j]){
                  sum = sum + n[i];
              }
          }
      }
      return sum;
    };
}

var person1 = new Vowel("aei");

console.log(person1.avowel())
