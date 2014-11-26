//http://shwuzzle.com/2013/09/06/bubble-sort-algorithm-in-javascript/

var numbers = [1,3,5,2,4];
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
    console.log(numbers);

    
$(document).ready(function() {

  document.getElementById('btn').onclick = function() {

}

document.getElementById('btn2').oncontextmenu = function() {

}

var colors["red", "orange", "yellow", "green", "blue", "violet"];

function bubbleSort(colors)
{
   var swapped;
   do {
       swapped = false;
       for (var i=0; i < colors.length-1; i++) {
           if (a[i] > a[i+1]) {
               var temp = a[i];
               a[i] = a[i+1];
               a[i+1] = temp;
               swapped = true; 
           }
       }
   } while (swapped); 
   console.log(swapped);
}

console.log(bubbleSort);

$(window).click(function('#button1') {
      
      $('#red').width(red.position);
      $('#orange').width(hare.position * 10 + 'px');
      $('#yellow').width(fish.position * 10 + 'px');
  });

});