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

var x1 = document.getElementById("firstLe");
var x2 = document.getElementById("secLe");
var x3 = document.getElementById("thirdLe");
var x4 = document.getElementById("fourthLe");
var x5 = document.getElementById("fifthLe");
var x6 = document.getElementById("sixthLe");
var x7 = document.getElementById("sevLe");
var x8 = document.getElementById("eighLe");

var hint = document.getElementById("hint");
    
	var randomRiddle = Math.floor(Math.random() * 10); 
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
	} else {
	   var answer = riddle10;
	   x1.innerHTML = riddle10.charAt(0);
	   x2.innerHTML = riddle10.charAt(1);
	   x3.innerHTML = riddle10.charAt(2);
	   x4.innerHTML = riddle10.charAt(3);
	   x5.innerHTML = riddle10.charAt(4);
	   x6.innerHTML = riddle10.charAt(5);
	   x7.innerHTML = riddle10.charAt(6);
	   x8.innerHTML = riddle10.charAt(7); 
    };
	   var numOfTries = 0;
	   function numOfTriesMaker () {
	   numOfTries++;
	   return numOfTries;
	  };
	
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
	
	var czekin = false;
	if (wybor1 == documEleValue1) {
	   czekin = true;
	   x1.style.color='black';
	   document.getElementById("warn").innerHTML = "Good Choice!"; 
	 } if (wybor1 == documEleValue2) {
	   czekin = true;
	   x2.style.color='black';
	   document.getElementById("warn").innerHTML = "Good Choice!";
	 } if (wybor1 == documEleValue3) {
	   czekin = true;
	   x3.style.color='black';
	   document.getElementById("warn").innerHTML = "Good Choice!";
	 } if (wybor1 == documEleValue4) {
	   czekin = true;
	   x4.style.color='black';
	   document.getElementById("warn").innerHTML = "Good Choice!";
	 } if (wybor1 == documEleValue5) {
	   czekin = true;
	   x5.style.color='black';
	   document.getElementById("warn").innerHTML = "Good Choice!";
	 } if (wybor1 == documEleValue6) {
	   czekin = true;
	   x6.style.color='black';
	   document.getElementById("warn").innerHTML = "Good Choice!";
	 } if (wybor1 == documEleValue7) {
	   czekin = true;
	   x7.style.color='black';
	   document.getElementById("warn").innerHTML = "Good Choice!";
	 } if (wybor1 == documEleValue8) {
	   czekin = true;
	   x8.style.color='black';
	   document.getElementById("warn").innerHTML = "Good Choice!";
	 } 
	 if (czekin == false) {
	   document.getElementById("warn").innerHTML = "Wrong choice!"; 	 
	   switch (numOfTriesMaker()) {
	     case 1:
	       document.getElementById("hangman").src = "hangmanImages/wisielec2.png";
		 break;
	     case 2:
	       document.getElementById("hangman").src = "hangmanImages/wisielec3.png";
		   if (answer == riddle1) {
		     hint.innerHTML = "Not a militia person.";
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
		     hint.innerHTML = "Helps with clean air.";
			} else if (answer == riddle9) {
		     hint.innerHTML = "A kind of substance that likes to get the contact with an air";
			} else {	
		     hint.innerHTML = "Trying to break free from a restraint.";
			};
		 break;
	     case 3:
	       document.getElementById("hangman").src = "hangmanImages/wisielec4.png";
		 break;
	     case 4:
	       document.getElementById("hangman").src = "hangmanImages/wisielec5.png";
		 break;
	     default:
		   document.getElementById("hangman").src = "hangmanImages/wisielec6.png";
		   document.getElementById("warn").innerHTML = "You have lost the game!";
		   document.getElementById("warn").style.color = 'red';
		}	 
		
	 }
	 
}; 
