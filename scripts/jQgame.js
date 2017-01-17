$(document).ready(function() {

	var $screen_width = $( window ).width();
	var $screen_height = $( window ).height();
	$("html").css("width",$screen_width);
	$("html").css("height",$screen_height);

	$("div.container").css("width",$screen_width);
	$("div.container").css("height",$screen_height);
	console.log($screen_width);
	console.log($screen_height);



//animate background 
//$('.background').pan({fps: 30, speed: 5, dir: 'Right'});



$(".player").animateSprite({
    fps: 12,

    animations: {
        walkRight: [0,1,2,3,4,5,6,7],
        walkLeft: [15,14,13,12,11,10,9,8],
        jump: [0,1,2,3,4,5,6,7,8,9]
    },
    loop: true,
    complete: function(){
        // use complete only when you set animations with 'loop: false'
       
    }
});



    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$(".player").animateSprite('stop')
				$(".player").css("background-image", "url(\"Images/scott_stand_resized.gif\")")
				$("#background").removeClass("background_start")
				$("#background").addClass("background_stop")
				break;
			// Up Arrow Pressed
			case 38:
			 
				break;
			// Right Arrow Pressed
			case 39:
			$(".player").css("background-image", "url(\"Images/scottpilgrim_multiple.png\")")
			$(".player").animateSprite('play', 'walkRight')
			$("#background").removeClass("background_stop")
			$("#background").addClass("background_start")
			
				break;
			// Down Arrow Pressed
			case 40:
				//$('.player').animate({top: "+=10px"}, '500');
				break;

			// space key pressed
			case 32:
			$(".player").css("background-image", "url(\"Images/scott_jump.png\")")
			$(".player").animateSprite('play', 'jump')
			$(".player").delay(800).queue(function(nxt) {
	      		$(this).css("background-image", "url(\"Images/scottpilgrim_multiple.png\")");
	     		 nxt();
				});	
			
			$(".player").animateSprite('play', 'walkRight')
			break;
			// x key pressed 
			case 88:
			$(".player").animateSprite('stop')
			$(".player").css("background-image", "url(\"Images/scott_guitar.gif\")")
			$(".player").delay(800).queue(function(nxt) {
	      		$(this).css("background-image", "url(\"Images/scottpilgrim_multiple.png\")");
	     		 nxt();
				});	
			
			$(".player").animateSprite('play', 'walkRight')

			break;
			// Z key pressed
			case 90:
			$(".player").animateSprite('stop')
			$(".player").css("background-image", "url(\"Images/scott_attack.gif\")")
			$(".player").delay(800).queue(function(nxt) {
	      		$(this).css("background-image", "url(\"Images/scottpilgrim_multiple.png\")");
	     		 nxt();
				});	
			
			$(".player").animateSprite('play', 'walkRight')

			break;
		}
	});
});




















