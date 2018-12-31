  function buttonLight() {
    document.getElementById("rozsuwacz").style.backgroundColor='hsl(55, 100%, 95%)';
    document.getElementById("navbar").style.color='black';
	document.getElementById("navbar").style.backgroundColor='hsl(55, 100%, 95%)';
	document.getElementById("bodybody").style.backgroundImage='url(https://images.pexels.com/photos/1092364/pexels-photo-1092364.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)';
	document.getElementById("buttonDark").style.display='block';
	document.getElementById("buttonLight").style.display='none';
}

function buttonDark() {
	document.getElementById("rozsuwacz").style.backgroundColor='black';
    document.getElementById("navbar").style.color='white';
	document.getElementById("navbar").style.backgroundColor='black';
	document.getElementById("bodybody").style.backgroundImage='url(https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)';
	document.getElementById("buttonLight").style.display='block';
	document.getElementById("buttonDark").style.display='none';
}

window.onload = function () {
	document.getElementById("userInput").focus();
};

window.onload = scrollTo(0, 0);

/*
document.getElementById("userInput").addEventListener("load", function () {
document.getElementById("userInput").autofocus =true;
}); */
var riddle1 = "CIVILIAN";
var riddle2 = "MIDNIGHT";
var riddle3 = "WILDLIFE";
var riddle4 = "SHOULDER";
var riddle5 = "ADDITION";
var riddle6 = "CHAMPION";
var riddle7 = "EVIDENCE";
var riddle8 = "WOODLAND";
var riddle9 = "VOLATILE";
var riddle10 = "STRUGGLE";
var riddle11 = "ABSENCE";
var riddle12 = "VEHICLE";
var riddle13 = "ONGOING";
var riddle14 = "COMMAND";

var x1 = document.getElementById("firstLe");
var x2 = document.getElementById("secLe");
var x3 = document.getElementById("thirdLe");
var x4 = document.getElementById("fourthLe");
var x5 = document.getElementById("fifthLe");
var x6 = document.getElementById("sixthLe");
var x7 = document.getElementById("sevLe");
var x8 = document.getElementById("eighLe");

    
	var randomRiddle = Math.floor(Math.random() * 14); 
	 if (randomRiddle == 0) {
	   var answer = riddle1;
	   x1.innerHTML = riddle1.charAt(0);
	   x2.innerHTML = riddle1.charAt(1);
	   x3.innerHTML = riddle1.charAt(2);
	   x4.innerHTML = riddle1.charAt(3);
	   x5.innerHTML = riddle1.charAt(4);
	   x6.innerHTML = riddle1.charAt(5);
	   x7.innerHTML = riddle1.charAt(6);
	   x8.innerHTML = riddle1.charAt(7);   
	} else if (randomRiddle == 1) {
	   var answer = riddle2;
	   x1.innerHTML = riddle2.charAt(0);
	   x2.innerHTML = riddle2.charAt(1);
	   x3.innerHTML = riddle2.charAt(2);
	   x4.innerHTML = riddle2.charAt(3);
	   x5.innerHTML = riddle2.charAt(4);
	   x6.innerHTML = riddle2.charAt(5);
	   x7.innerHTML = riddle2.charAt(6);
	   x8.innerHTML = riddle2.charAt(7); 
	} else if (randomRiddle == 2) {
	   var answer = riddle3;
	   x1.innerHTML = riddle3.charAt(0);
	   x2.innerHTML = riddle3.charAt(1);
	   x3.innerHTML = riddle3.charAt(2);
	   x4.innerHTML = riddle3.charAt(3);
	   x5.innerHTML = riddle3.charAt(4);
	   x6.innerHTML = riddle3.charAt(5);
	   x7.innerHTML = riddle3.charAt(6);
	   x8.innerHTML = riddle3.charAt(7); 
	} else if (randomRiddle == 3) {
	   var answer = riddle4;
	   x1.innerHTML = riddle4.charAt(0);
	   x2.innerHTML = riddle4.charAt(1);
	   x3.innerHTML = riddle4.charAt(2);
	   x4.innerHTML = riddle4.charAt(3);
	   x5.innerHTML = riddle4.charAt(4);
	   x6.innerHTML = riddle4.charAt(5);
	   x7.innerHTML = riddle4.charAt(6);
	   x8.innerHTML = riddle4.charAt(7); 	   
	} else if (randomRiddle == 4) {  
	   var answer = riddle5;
	   x1.innerHTML = riddle5.charAt(0);
	   x2.innerHTML = riddle5.charAt(1);
	   x3.innerHTML = riddle5.charAt(2);
	   x4.innerHTML = riddle5.charAt(3);
	   x5.innerHTML = riddle5.charAt(4);
	   x6.innerHTML = riddle5.charAt(5);
	   x7.innerHTML = riddle5.charAt(6);
	   x8.innerHTML = riddle5.charAt(7); 
    } else if (randomRiddle == 5) {
	   var answer = riddle6;
	   x1.innerHTML = riddle6.charAt(0);
	   x2.innerHTML = riddle6.charAt(1);
	   x3.innerHTML = riddle6.charAt(2);
	   x4.innerHTML = riddle6.charAt(3);
	   x5.innerHTML = riddle6.charAt(4);
	   x6.innerHTML = riddle6.charAt(5);
	   x7.innerHTML = riddle6.charAt(6);
	   x8.innerHTML = riddle6.charAt(7); 
    } else if (randomRiddle == 6) {
	   var answer = riddle7;
	   x1.innerHTML = riddle7.charAt(0);
	   x2.innerHTML = riddle7.charAt(1);
	   x3.innerHTML = riddle7.charAt(2);
	   x4.innerHTML = riddle7.charAt(3);
	   x5.innerHTML = riddle7.charAt(4);
	   x6.innerHTML = riddle7.charAt(5);
	   x7.innerHTML = riddle7.charAt(6);
	   x8.innerHTML = riddle7.charAt(7); 
    } else if (randomRiddle == 7) {
	   var answer = riddle8;
	   x1.innerHTML = riddle8.charAt(0);
	   x2.innerHTML = riddle8.charAt(1);
	   x3.innerHTML = riddle8.charAt(2);
	   x4.innerHTML = riddle8.charAt(3);
	   x5.innerHTML = riddle8.charAt(4);
	   x6.innerHTML = riddle8.charAt(5);
	   x7.innerHTML = riddle8.charAt(6);
	   x8.innerHTML = riddle8.charAt(7); 
    } else if (randomRiddle == 8) {
	   var answer = riddle9;
	   x1.innerHTML = riddle9.charAt(0);
	   x2.innerHTML = riddle9.charAt(1);
	   x3.innerHTML = riddle9.charAt(2);
	   x4.innerHTML = riddle9.charAt(3);
	   x5.innerHTML = riddle9.charAt(4);
	   x6.innerHTML = riddle9.charAt(5);
	   x7.innerHTML = riddle9.charAt(6);
	   x8.innerHTML = riddle9.charAt(7); 
    } else if (randomRiddle == 9) {
	   var answer = riddle10;
	   x1.innerHTML = riddle10.charAt(0);
	   x2.innerHTML = riddle10.charAt(1);
	   x3.innerHTML = riddle10.charAt(2);
	   x4.innerHTML = riddle10.charAt(3);
	   x5.innerHTML = riddle10.charAt(4);
	   x6.innerHTML = riddle10.charAt(5);
	   x7.innerHTML = riddle10.charAt(6);
	   x8.innerHTML = riddle10.charAt(7); 
    } else if (randomRiddle == 10) {
	   var answer = riddle11;
	   x1.innerHTML = riddle11.charAt(0);
	   x2.innerHTML = riddle11.charAt(1);
	   x3.innerHTML = riddle11.charAt(2);
	   x4.innerHTML = riddle11.charAt(3);
	   x5.innerHTML = riddle11.charAt(4);
	   x6.innerHTML = riddle11.charAt(5);
	   x7.innerHTML = riddle11.charAt(6); 
    } else if (randomRiddle == 11) {
	   var answer = riddle12;
	   x1.innerHTML = riddle12.charAt(0);
	   x2.innerHTML = riddle12.charAt(1);
	   x3.innerHTML = riddle12.charAt(2);
	   x4.innerHTML = riddle12.charAt(3);
	   x5.innerHTML = riddle12.charAt(4);
	   x6.innerHTML = riddle12.charAt(5);
	   x7.innerHTML = riddle12.charAt(6); 
    } else if (randomRiddle == 12) {
	   var answer = riddle13;
	   x1.innerHTML = riddle13.charAt(0);
	   x2.innerHTML = riddle13.charAt(1);
	   x3.innerHTML = riddle13.charAt(2);
	   x4.innerHTML = riddle13.charAt(3);
	   x5.innerHTML = riddle13.charAt(4);
	   x6.innerHTML = riddle13.charAt(5);
	   x7.innerHTML = riddle13.charAt(6); 	   
	} else {
	   var answer = riddle14;
	   x1.innerHTML = riddle14.charAt(0);
	   x2.innerHTML = riddle14.charAt(1);
	   x3.innerHTML = riddle14.charAt(2);
	   x4.innerHTML = riddle14.charAt(3);
	   x5.innerHTML = riddle14.charAt(4);
	   x6.innerHTML = riddle14.charAt(5);
	   x7.innerHTML = riddle14.charAt(6); 
    };
	
	 if (answer.length == 7) {
		 x8.style.display= 'none';
	 };
		
	   var numOfTries = 0;
	   function numOfTriesMaker () {
	   numOfTries++;
	   return numOfTries;
	  };

		var win8Letters = [1,1,1,1,1,1,1,1];   
        var win7Letters = [1,1,1,1,1,1,1]; 

function needUserInput() {	
    var wybor = document.getElementById("userInput").value;
    var wybor1 = wybor.toUpperCase();
	var documEleValue1 = document.getElementById("firstLe").innerHTML;
	var documEleValue2 = document.getElementById("secLe").innerHTML;
	var documEleValue3 = document.getElementById("thirdLe").innerHTML;
	var documEleValue4 = document.getElementById("fourthLe").innerHTML;
	var documEleValue5 = document.getElementById("fifthLe").innerHTML;
	var documEleValue6 = document.getElementById("sixthLe").innerHTML;
	var documEleValue7 = document.getElementById("sevLe").innerHTML;
	var documEleValue8 = document.getElementById("eighLe").innerHTML;
	var subButton = document.getElementById("subButton");
	var refresh = document.getElementById("refresh");
	var warn = document.getElementById("warn");
	var hint = document.getElementById("hint");
	var czekin = false;		

/*	
	if (typeof wybor1 != typeof "string") {
		alert("Wrong input type!");
	}
*/	
	if (wybor1 == documEleValue1) {
	   czekin = true;
	   win8Letters[0] = 2;
	   win7Letters[0] = 2;
	   x1.style.color='black';
	   warn.innerHTML = "Good Choice!";
       warn.style.color ='blue';	   
	 } if (wybor1 == documEleValue2) {
	   win8Letters[1] = 2;
	   win7Letters[1] = 2;
	   czekin = true;
	   x2.style.color='black';
	   warn.innerHTML = "Good Choice!";
       warn.style.color ='blue';	   
	 } if (wybor1 == documEleValue3) {
	   win8Letters[2] = 2;
	   win7Letters[2] = 2;
	   czekin = true;
	   x3.style.color='black';
	   warn.innerHTML = "Good Choice!";
       warn.style.color ='blue';	   
	 } if (wybor1 == documEleValue4) {
	   win8Letters[3] = 2;
	   win7Letters[3] = 2;
	   czekin = true;
	   x4.style.color='black';
	   warn.innerHTML = "Good Choice!";
       warn.style.color ='blue';	   
	 } if (wybor1 == documEleValue5) {
	   win8Letters[4] = 2;
	   win7Letters[4] = 2;
	   czekin = true;
	   x5.style.color='black';
	   warn.innerHTML = "Good Choice!";
       warn.style.color ='blue';	   
	 } if (wybor1 == documEleValue6) {
	   win8Letters[5] = 2;
	   win7Letters[5] = 2;
	   czekin = true;
	   x6.style.color='black';
	   warn.innerHTML = "Good Choice!";
       warn.style.color ='blue';	   
	 } if (wybor1 == documEleValue7) {
	   win8Letters[6] = 2;
	   win7Letters[6] = 2;
	   czekin = true;
	   x7.style.color='black';
	   warn.innerHTML = "Good Choice!";
       warn.style.color ='blue';	   
	 } if (wybor1 == documEleValue8 && answer.length == 8) {
	   win8Letters[7] = 2;
	   czekin = true;
	   x8.style.color='black';
	   warn.innerHTML = "Good Choice!";
       warn.style.color ='blue';	   
	 }
	 
	 if (czekin == false) {
	   document.getElementById("warn").innerHTML = "Wrong choice!"; 
       warn.style.color ='red';	   
	   switch (numOfTriesMaker()) {
	     case 1:
	       document.getElementById("hangman").src = "hangmanImages/wisielec1.jpg";
		 break;
	     case 2:
	       document.getElementById("hangman").src = "hangmanImages/wisielec2.jpg";
		 break;
	     case 3:
	       document.getElementById("hangman").src = "hangmanImages/wisielec3.jpg";
		 break;
	     case 4:
	       document.getElementById("hangman").src = "hangmanImages/wisielec4.jpg";
		   if (answer == riddle1) {
		      hint.innerHTML = "Not a military person.";
		    } else if (answer == riddle2) {
		      hint.innerHTML = "During the night.";		
			} else if (answer == riddle3) {
		      hint.innerHTML = "A kind of life, that goes wild.";			
			} else if (answer == riddle4) {
		      hint.innerHTML = "Helps you maintaining your arm.";			
			} else if (answer == riddle5) {
		      hint.innerHTML = "One of basic mathematic processes.";
			} else if (answer == riddle6) {
		      hint.innerHTML = "A friend of hero.";			
			} else if (answer == riddle7) {			
		      hint.innerHTML = "Something that Sherlock Holmes always likes to find";
			} else if (answer == riddle8) {	
		      hint.innerHTML = "Provides us with clean air.";
			} else if (answer == riddle9) {
		      hint.innerHTML = "A kind of substance that likes to be in touch with an air.";
			} else if (answer == riddle10) {	
		      hint.innerHTML = "Trying to break free from a restraint.";
			} else if (answer == riddle11) {
		      hint.innerHTML = "Lack of something.";
			} else if (answer == riddle12) {
		      hint.innerHTML = "A car, a tank or a bike.";
			} else if (answer == riddle13) {
		      hint.innerHTML = "E.g an event, that occurs right now, is an ..... event";
			} else { 
		      hint.innerHTML = "To give orders to someone.";			
			};
			
		 break;
	     case 5:
	       document.getElementById("hangman").src = "hangmanImages/wisielec5.jpg";
		 break;	
	     case 6:
	       document.getElementById("hangman").src = "hangmanImages/wisielec6.jpg";
		 break;		 
	     default:
		   document.getElementById("gameHangman").style.backgroundImage = 'linear-gradient(to bottom right, #ddd, #bbb, #999)';
		   document.getElementById("gameHangman").style.border = '5px outset #555';		 
		   document.getElementById("hangman").src = "hangmanImages/wisielec7.jpg";
		   document.getElementById("userInput").disabled = true;
		   warn.innerHTML = 'You have lost the game! <button value="Refresh Page" id="refresh" onclick="window.location.reload()">Try again!</button>';
		   warn.style.color = 'red'; 
           subButton.style.display ='none'; 
		   refresh.style.display ='inline-block';
		   
		}				
	 };		
        if (answer.length == 8) { 
        var winConditionIf8Letters = win8Letters.every(function(value) {return value == 2});		
          if (winConditionIf8Letters) {
		   warn.style.color = 'blue';
		   warn.innerHTML = 'CONGRATULATIONS! You have won the game! <button value="Refresh Page" id="refresh" onclick="window.location.reload()">Try again!</button>';	
		   document.getElementById("userInput").disabled = true;	
           subButton.style.display ='none';
		   refresh.style.display ='inline-block';			   
	      };		   
		};


        if (answer.length == 7) {
	    /* console.log('aaaaa', win7Letters); */
	    var winConditionIf7Letters = win7Letters.every(function(value) {return value == 2});			
		  if (winConditionIf7Letters) {
		   warn.style.color = 'blue';
		   warn.innerHTML = 'CONGRATULATIONS! You have won the game!';	
		   document.getElementById("userInput").disabled = true;
           subButton.style.display ='none';
		   refresh.style.display ='inline-block';	   
	      };		   
		};			
	  
}; 
