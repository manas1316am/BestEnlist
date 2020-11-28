// get year
var today = new Date();
var yyyy = today.getFullYear();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');



const oneDay = 24 * 60 * 60 * 1000;
const firstDate = new Date(yyyy, mm, dd);
const secondDate = new Date(yyyy, 12, 25);

const diff = Math.round(Math.abs((firstDate - secondDate) / oneDay));

console.log(diff);