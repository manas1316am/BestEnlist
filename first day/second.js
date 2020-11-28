const fifty = (a,b) => {
    if((a == 50 || b == 50) || (a + b == 50)){
        console.log("true");
    } else {
        console.log("False");
    }
}

fifty(50, 20);
fifty(20, 20);
fifty(50, 50);
fifty(30, 20);
