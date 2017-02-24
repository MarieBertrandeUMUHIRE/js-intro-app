var box_click_1 = 0
var box_click_2 = 0
var box_click_3 = 0
function threebox() {
  if (box_click_1 > 0  && box_click_2 > 0 && box_click_3 > 0){
    alert("you win");
  }else if (box_click_1===0){
    console.log("keep trying");
    box_click_1++;
  }else if (box_click_2===0){
    console.log("keep trying");
    box_click_2++;
  }else if (box_click_3===0){
    console.log("keep trying");
    box_click_3++;
  }
}
