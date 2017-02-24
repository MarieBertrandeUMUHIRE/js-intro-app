var color = ["yellow", "orange", "black"]

function daylight(number){
  if (number=== 1){
    document.body.style["background-color"] = color[0];
    var title = document.getElementById("daylight-title");
    title.innerHTML = "Morning!";
  }else if (number === 2){
   document.body.style["background-color"] = color[1];
  var title = document.getElementById("daylight-title");
    title.innerHTML = "Afternoon!";
  }else if (number === 3){
    document.body.style["background-color"] = color[2];
    var title = document.getElementById("daylight-title");
    title.innerHTML = "Evening!";
    
  }
}