/* const musicOverworld = new Audio('Overworld.ogg');*/
const musicOverworld = new Audio("sound/Overworld.ogg")
const mario = document.querySelector('#mario');
mario.addEventListener('click', () => {	
  /* Recreate the effect by using Javascript to set our animation property to mario.  
  Create the one line of code that sets our custom animation keyframes to Mario using mario.style.setProperty('name-of-property OR key', 'values') */		
	mario.style.setProperty('animation', 'walkcycleright 300ms steps(3) 23.3, moveright 7s linear forwards');		
	
});

$(document).ready(function(){
	musicOverworld.loop = true;
	// jQuery - Event handler for onclick
	$("#onoffswitch").click(function(event){
		// Add/remove CSS class that moves the button
		$(".onoffswitch-inner").toggleClass("on");
		$(".onoffswitch-switch").toggleClass("on");
		if(musicOverworld.paused){
			musicOverworld.play();
		}else{
			musicOverworld.pause();
		}
	});
});