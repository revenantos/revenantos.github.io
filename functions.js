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

var riddle1, riddle2, riddle3, riddle4, randomRiddle, firstLetter, secondLetter, thirdLetter, fourthLetter, fifthLetter, sixthLetter, seventhLetter, eightLetter;
var riddles = {
	riddle1: {
	firstLetter:"C", 
	secondLetter:"I", 
	thirdLetter:"V", 
	fourthLetter:"I", 
	fifthLetter:"L", 
	sixthLetter:"I", 
	seventhLetter:"A", 
	eightLetter:"N",
	fullRiddle1: function() {
		return this.firstLetter + this.secondLetter + this.thirdLetter + this.fourthLetter + this.fifthLetter + this.sixthLetter + this.seventhLetter + this.eightLetter;
		}
    },
  
	riddle2: {
	firstLetter:"M", 
	secondLetter:"I", 
	thirdLetter:"D", 
	fourthLetter:"N", 
	fifthLetter:"I", 
	sixthLetter:"G", 
	seventhLetter:"H", 
	eightLetter:"T",
	fullRiddle2: function() {
		return this.firstLetter + this.secondLetter + this.thirdLetter + this.fourthLetter + this.fifthLetter + this.sixthLetter + this.seventhLetter + this.eightLetter;
		}
	},
	
	riddle3: {
	firstLetter:"W", 
	secondLetter:"I", 
	thirdLetter:"L", 
	fourthLetter:"D", 
	fifthLetter:"L", 
	sixthLetter:"I", 
	seventhLetter:"F", 
	eightLetter:"E",
	fullRiddle3: function() {
		return this.firstLetter + this.secondLetter + this.thirdLetter + this.fourthLetter + this.fifthLetter + this.sixthLetter + this.seventhLetter + this.eightLetter;
		}
	},
	
	riddle4: {
	firstLetter:"S", 
	secondLetter:"H", 
	thirdLetter:"O", 
	fourthLetter:"U", 
	fifthLetter:"L", 
	sixthLetter:"D", 
	seventhLetter:"E", 
	eightLetter:"R",
	fullRiddle4: function() {
		return this.firstLetter + this.secondLetter + this.thirdLetter + this.fourthLetter + this.fifthLetter + this.sixthLetter + this.seventhLetter +  this.eightLetter;}
	}
}; 
	var docE1a1, docEla2, docEla3, docEla4, docEla5, docEla6, docEla7, docEla8;
	var docElb1, docElb2, docElb3, docElb4, docElb5, docElb6, docElb7, docElb8;
	var docElc1, docElc2, docElc3, docElc4, docElc5, docElc6, docElc7, docElc8;
	var docEld1, docEld2, docEld3, docEld4, docEld5, docEld6, docEld7, docEld8;
	var randomRiddle = Math.floor(Math.random() * 4);
	 if (randomRiddle == 0) {
	   document.getElementById("firstLe").innerHTML = riddles.riddle1.firstLetter;
	   document.getElementById("secLe").innerHTML = riddles.riddle1.secondLetter;
	   document.getElementById("thirdLe").innerHTML = riddles.riddle1.thirdLetter;
	   document.getElementById("fourthLe").innerHTML = riddles.riddle1.fourthLetter;
	   document.getElementById("fifthLe").innerHTML = riddles.riddle1.fifthLetter;
	   document.getElementById("sixthLe").innerHTML = riddles.riddle1.sixthLetter;
	   document.getElementById("sevLe").innerHTML = riddles.riddle1.seventhLetter;
	   document.getElementById("eighLe").innerHTML = riddles.riddle1.eightLetter;
	   
	   
	} else if (randomRiddle == 1) {
	   document.getElementById("firstLe").innerHTML = riddles.riddle2.firstLetter;
	   document.getElementById("secLe").innerHTML = riddles.riddle2.secondLetter;
	   document.getElementById("thirdLe").innerHTML = riddles.riddle2.thirdLetter;
	   document.getElementById("fourthLe").innerHTML = riddles.riddle2.fourthLetter;
	   document.getElementById("fifthLe").innerHTML = riddles.riddle2.fifthLetter;
	   document.getElementById("sixthLe").innerHTML = riddles.riddle2.sixthLetter;
	   document.getElementById("sevLe").innerHTML = riddles.riddle2.seventhLetter;
	   document.getElementById("eighLe").innerHTML = riddles.riddle2.eightLetter;
	} else if (randomRiddle == 2) {
	   document.getElementById("firstLe").innerHTML = riddles.riddle3.firstLetter;
	   document.getElementById("secLe").innerHTML = riddles.riddle3.secondLetter;
	   document.getElementById("thirdLe").innerHTML = riddles.riddle3.thirdLetter;
	   document.getElementById("fourthLe").innerHTML = riddles.riddle3.fourthLetter;
	   document.getElementById("fifthLe").innerHTML = riddles.riddle3.fifthLetter;
	   document.getElementById("sixthLe").innerHTML = riddles.riddle3.sixthLetter;
	   document.getElementById("sevLe").innerHTML = riddles.riddle3.seventhLetter;
	   document.getElementById("eighLe").innerHTML = riddles.riddle3.eightLetter;
	} else {
	   document.getElementById("firstLe").innerHTML = riddles.riddle4.firstLetter;
	   document.getElementById("secLe").innerHTML = riddles.riddle4.secondLetter;
	   document.getElementById("thirdLe").innerHTML = riddles.riddle4.thirdLetter;
	   document.getElementById("fourthLe").innerHTML = riddles.riddle4.fourthLetter;
	   document.getElementById("fifthLe").innerHTML = riddles.riddle4.fifthLetter;
	   document.getElementById("sixthLe").innerHTML = riddles.riddle4.sixthLetter;
	   document.getElementById("sevLe").innerHTML = riddles.riddle4.seventhLetter;
	   document.getElementById("eighLe").innerHTML = riddles.riddle4.eightLetter;
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
	   document.getElementById("firstLe").style.color='black';
	   document.getElementById("warn").innerHTML = "Good Choice!"; 
	 } if (wybor1 == documEleValue2) {
	   czekin = true;
	   document.getElementById("secLe").style.color='black';
	   document.getElementById("warn").innerHTML = "Good Choice!";
	 } if (wybor1 == documEleValue3) {
	   czekin = true;
	   document.getElementById("thirdLe").style.color='black';
	   document.getElementById("warn").innerHTML = "Good Choice!";
	 } if (wybor1 == documEleValue4) {
	   czekin = true;
	   document.getElementById("fourthLe").style.color='black';
	   document.getElementById("warn").innerHTML = "Good Choice!";
	 } if (wybor1 == documEleValue5) {
	   czekin = true;
	   document.getElementById("fifthLe").style.color='black';
	   document.getElementById("warn").innerHTML = "Good Choice!";
	 } if (wybor1 == documEleValue6) {
	   czekin = true;
	   document.getElementById("sixthLe").style.color='black';
	   document.getElementById("warn").innerHTML = "Good Choice!";
	 } if (wybor1 == documEleValue7) {
	   czekin = true;
	   document.getElementById("sevLe").style.color='black';
	   document.getElementById("warn").innerHTML = "Good Choice!";
	 } if (wybor1 == documEleValue8) {
	   czekin = true;
	   document.getElementById("eighLe").style.color='black';
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
		 break;
	     case 3:
	       document.getElementById("hangman").src = "hangmanImages/wisielec4.png";
		 break;
	     case 4:
	       document.getElementById("hangman").src = "hangmanImages/wisielec5.png";
		 break;
	     default:
		   document.getElementById("hangman").src = "wisielec6.png";
		   document.getElementById("warn").innerHTML = "You have lost the game!";
		}	 
		
	 }
	 
};

