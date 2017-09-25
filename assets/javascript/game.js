
$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //
  $('#randomNumber').text(Random);
  // Appending random number to the randomNumber id in the html doc
  //
  var blue= Math.floor(Math.random()*11+1)
  var blue2= Math.floor(Math.random()*11+1)
  var white= Math.floor(Math.random()*11+1)
  var purple= Math.floor(Math.random()*11+1)
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
      blue= Math.floor(Math.random()*11+1);
      blue2= Math.floor(Math.random()*11+1);
      white= Math.floor(Math.random()*11+1);
      purple= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
//adds the wins to the userTotal
function win(){
  wins++; 
  alert("V good");
  reset();
  $('#numberWins').text(wins);
 
}
//addes the losses to the userTotal
function loss(){
  losses++;
  alert ("You lose!");
  reset();
  $('#numberLosses').text(losses);
  
}
//Crystal Click
  $('#blue').on ('click', function(){
    userTotal = userTotal + blue;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          loss();
        }   
  })  
  $('#blue2').on ('click', function(){
    userTotal = userTotal + blue2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          loss();
        } 
  })  
  $('#white').on ('click', function(){
    userTotal = userTotal + white;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

          if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          loss();
        } 
  })  
  $('#purple').on ('click', function(){
    userTotal = userTotal + purple;
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