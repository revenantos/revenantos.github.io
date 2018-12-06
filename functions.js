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
