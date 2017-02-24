function add(number){
  var printout = document.getElementById("printout");
  if (number==="Reset"){
    printout.innerHTML = 0;
  }else{
    printout.innerHTML = parseInt(printout.innerHTML) + number;
  }
  
}