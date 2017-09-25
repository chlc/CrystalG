
$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //
  $('#randomNumber').text(Random);
  // Appending random number to the randomNumber id in the html doc
  //
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  // Setting up random numbers for each jewel
  // Random number has to be between 1 - 12
  // 
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  //  Decaring variables for totals
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//Reset
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      number1= Math.floor(Math.random()*11+1);
      number2= Math.floor(Math.random()*11+1);
      number3= Math.floor(Math.random()*11+1);
      number4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
//adds the wins to the userTotal
function win(){
alert("V good");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}
//addes the losses to the userTotal
function loss(){
alert ("You lose!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}
//Crystal Click
  $('.blue').on ('click', function(){
    userTotal = userTotal + number1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          loss();
        }   
  })  
  $('.blue2').on ('click', function(){
    userTotal = userTotal + number2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          loss();
        } 
  })  
  $('.white').on ('click', function(){
    userTotal = userTotal + number3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

          if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          loss();
        } 
  })  
  $('.purple').on ('click', function(){
    userTotal = userTotal + number4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          loss();
        }
  });   
}); 