const repeated = (n) => {
    let arr = Array.from(String(n), Number);
    // length of array
    let size = arr.length;
    
    if(arr[size-1] === arr[size-2] ){
        return "True";
    }
    else {
        return "False";
    }
    
}

console.log(repeated(5655))