   var person;
  function Name() {
   person=window.prompt("Please enter your name");

    }
var inputVal;
var computer=["rock","paper","scissors"];
function game(){
    
    var number=Math.floor(Math.random() * 3);
    $('#userChoice').text(inputVal);
    $('#computerChoice').text(computer[number]);
    
    if(inputVal === computer[number]){
        $('#result').text("It is a tie");
        
    
    } else if((inputVal === 'rock' && computer[number] === 'scissors') || 
    (inputVal === 'paper' && computer[number] === 'rock') || 
    (inputVal === 'scissors' && computer[number] === 'paper')) {
        $('#result').text(person + ' Wins');
    }else if((inputVal === 'rock' && computer[number] === 'paper') || 
    (inputVal === 'paper' && computer[number] === 'scissors') || 
    (inputVal === 'scissors' && computer[number] === 'rock')){
        $('#result').text('Computer Wins');
    }
}

$('#shoot').click(function() {
    inputVal = $("#input").val();
    if(inputVal === ''){
        alert("You didn't input anything");
    }else if(inputVal != 'rock' && inputVal != 'paper' && inputVal != 'scissors'){
        alert("Not a valid input");
        
        
    }else{
        game();
    }

    

    
    
    

    

});

