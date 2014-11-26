
$(document).ready(function() {
  
var numbers = [1,3,6,2,4,5];

//On click sort function
$("#btn1").click(function() {
  var bubbleSort = function() {
  var tmp;
    for (var i = 0; i < numbers.length; i += 1) {
        for (var j = i; j > 0; j -= 1) {
            if (numbers[j] < numbers[j - 1]) {
                tmp = numbers[j];
                numbers[j] = numbers[j - 1];
                numbers[j - 1] = tmp;
                }
            }
        }
    };
});

var numbers = (numbers);

var red, orange, yellow, green, blue, violet;
  
red = (numbers[0]);
orange = (numbers[1]);
yellow = (numbers[2]);
green = (numbers[3]);
blue = (numbers[4]);
violet = (numbers[5]);

// On click function to shuffle
$("#btn2").click(function() {
  function shuffle(numbers) {

  var m = numbers.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = numbers[m];
    numbers[m] = numbers[i];
    numbers[i] = t;
  }
  return numbers;
}
});
});