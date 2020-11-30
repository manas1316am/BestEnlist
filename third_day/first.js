const repeated = (n) => {
    let arr = Array.from(String(n), Number);
    

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] == arr[j]){
                return "True";
            } else {
                return "False";
            }
        }
    }
}

console.log(repeated(3356))