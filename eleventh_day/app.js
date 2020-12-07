var value = document.getElementById("form1");

for (var i = 0; i < value.clientHeight; i++) {
  if (value.elements[i].value != "Submit") {
    console.log(value.elements[i].value);
  }
}

function change_bg() {

    value.style.color =  "#fff";
    
}