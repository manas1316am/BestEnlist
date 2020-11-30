const largest = () => {

    var cars = new Array(1, 2, 3, 5, 9, 10, 11);
    cars.sort(function(a, b){return b-a});
    const n = cars.length;
    return cars[1]

}

console.log(largest())