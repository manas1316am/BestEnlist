const squares = (num) => {
    let arr = Array.from(String(num), Number);
    var arr2 = new Array();
    

    for(let i=0; i<arr.length; i++){
        let square = arr[i]*arr[i];
        arr2.push(square);
    }
    return arr2.join('');
}

console.log(squares(1234))