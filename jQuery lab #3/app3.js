let upperKeyboard = ("#keyboard-upper-container");
let lowerKeyboard = ("#keyboard-lower-container");


$("#keyboard-upper-container").hide();
//when key is pressed down show upper and hide lower
$(document).keydown(function(event) {
  // shift is pressed
  if (event.which === 16) {
    $(upperKeyboard).show();
    $(lowerKeyboard).hide();
  }
});
// shift is released
$(document).keyup(function(event) {
  if (event.which === 16) {
    //lowercase is displayed
    $(lowerKeyboard).show();
    $(upperKeyboard).hide();
  }
});
// 

console.log ('end of script')