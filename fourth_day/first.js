const getsign = (a,b,c) => {
    let num = a + b + c;
    let split_string = num.split(/(\d+)/);
    let sorted = split_string.sort()


    var n = sorted.includes("+");
    var m = sorted.includes("-")


    if(m == true && n == true){
        console.log("Both + and - included")
    } else if(m == true && n == false) {
        console.log("- presents")
    } else if(m == false && n == true){
        console.log("+ presents")
    } else{
        console.log("Welcome")
    }

}

getsign("1", "2", "7")
getsign("-1", "-2", "-7")
getsign("+1", "-2", "7")
getsign("+1", "2", "7")
