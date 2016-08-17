$(document).ready(function() {
  function factorializer(num) {
    var finalNum = 1;  // we need a variable to store what will become the final number
      for (i=num; i > 0; i--) { // we assign i the value of num, which is the number passed to the function
                                // we want to stop before i hits 0 and we want to minus 1 from i each time
        if (i > 1) { // we need to make sure i is never zero so we don't end up with a zero result
          if (i === num) {  // on the first iteration
            finalNum *= (i - 1) * i; // we multiply finalNum, which is currently 1,
          } else {
            finalNum *= (i - 1)
          }
        }
      }
    return finalNum;
  }
  $("form#factorialForm").submit(function(event) {
      var number1 = parseInt($("#number1").val());
      $(".factorial").text(factorializer(number1));

     event.preventDefault();
  })
})


// $("form#wordPuzzle").submit(function(event) {
//
//    event.preventDefault();
// })
