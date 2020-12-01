const iteration = () => {
    
    for (var i = 1; i <= 100; i++) {
        var f = i % 3 == 0, b = i % 5 == 0;
        console.log(f ? b ? "BestEnlistreact" : "BestEnlist" : b ? "react" : i);
      }
}

iteration()