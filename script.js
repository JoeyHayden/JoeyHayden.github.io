var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

$(document).ready(function() {
var numbers =[4,2,5,1,0,3];
console.log(numbers);

function bubbleSort(numbers)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < numbers.length-1; i++) {
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
 
console.log(numbers);


});