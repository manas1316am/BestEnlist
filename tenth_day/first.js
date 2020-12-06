Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
}

function getDates(startDate, stopDate) {
   var dateArray = new Array();
   var currentDate = startDate;
   while (currentDate <= stopDate) {
     dateArray.push(currentDate)
     currentDate = currentDate.addDays(1);
   }
   return dateArray;
 }

var dateArray = getDates(new Date(), (new Date()).addDays(2));
for (i = 0; i < dateArray.length; i ++ ) {
 console.log(dateArray[i]);
}


