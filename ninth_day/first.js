let sample = [1,2,3,4,5,2,6,8,8]

Array.prototype.begetduplicate = function() {
    sample.sort();

    const res = [];
    for(let i=0; i<sample.length; i++){
        if(sample[i] === sample[i+1]){
            res.push(sample[i])
        }
    }
    console.log(res);
}

sample.begetduplicate();