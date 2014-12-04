


$(document).ready(function() {
 
  //global variables 
  var circles = [0, 1, 2, 3, 4, 5];
 
  // On click function to shuffle
  // http://bost.ocks.org/mike/shuffle/
  $("#btn2").click(function() {
 
    var rand, tmp, i; 
 
    for (i = circles.length; i > 0; i--) {
 
      // select random index
      rand = Math.floor(Math.random() * i);
 
      // swap current with random
      tmp = circles[rand];
      circles[rand] = circles[i];
      circles[i] = tmp;
 
      // move element
      $('#' + rand).appendTo('#colorList');
    }
 
  });
 
  //On click sort function
  $("#btn1").click(function() {
 
    var tmp, i, j;
    for (i = 0; i < circles.length; i++) {
      for (j = i; j > 0; j--) {
        if (circles[j] < circles[j - 1]) {
          tmp = circles[j];
          circles[j] = circles[j - 1];
          circles[j - 1] = tmp;
        }
      }
      $('#' + i).appendTo('#colorList');
    }
  });
});