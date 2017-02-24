
// // function jackhammer(boxNumber) {
// // alert("you win!!!");
// // }

// var click_times = 1
// function jackhammer () {
//   if (click_times === 5) {
//     alert("you win");
//   } else {
//     console.log("keep trying");
//     click_times++;
//   }
// }


var click = 1
var colors = ["black", "purple", "red", "green", "yellow"]

function changeColor(box){
  if (click === 1){
    box.style["background-color"] = colors[0];
    click++;
  } else if (click === 2) {
    box.style["background-color"] = colors[1];
    click++;
  }else if (click ===3){
    box.style["background-color"] = colors[2];
    click++;
  }else if (click === 4) {
    box.style["background-color"] = colors[3]
    click++;
  }else if (click === 5) {
    box.style["background-color"] = colors[4];
    alert("you win");
    click ++;
  }

}

  
