/***
* @author Mike Taylor
* @copyright Copyright (c) 2009 Mike Taylor
* @license http://www.opensource.org/licenses/mit-license.php
* @version 0.1
*/

// namespace
var _MT = {};

_MT.CanvasClicker = function(options) {
	
	// grab canvas element
	var canvas = document.getElementById(options.id);
	var ctxt = canvas.getContext("2d");

	// set props from options
	ctxt.lineWidth = options.size || 4;
	ctxt.strokeStyle = options.color || "#999";
	ctxt.lineCap = options.lineCap || "round";
	ctxt.pX = null;
	ctxt.pY = null;

	return self = {
		
		//bind click events
		init: function() {
			//set pX and pY from first click
			$(canvas).one("click", self.set_anchor_point)
			
			//each click after draws line
			.click(self.draw_line);
		},
		
		//generic move function
		set_anchor_point: function(e) {
			ctxt.pX = e.pageX;
			ctxt.pY = e.pageY;
			e.preventDefault();
		},
		
		draw_line: function(e) {
			var moveX = e.pageX - ctxt.pX,
					moveY = e.pageY - ctxt.pY;

			self.move(moveX, moveY);
		},

		move: function(changeX, changeY) {
			ctxt.beginPath();
			ctxt.moveTo(ctxt.pX,ctxt.pY);

			ctxt.pX += changeX;
			ctxt.pY += changeY;

			ctxt.lineTo(ctxt.pX, ctxt.pY);
			ctxt.stroke();
		},
		
		draw_trex: function() {
			var trex = new Image();
			trex.src = 'trex.png';
			trex.addEventListener('load', function () {
				ctxt.drawImage(this, 0, 160);
			}, false);
		},
		
		write_stuff: function(text) {
			ctxt.font = 'normal 75px Yanone Tagesschrift';
			ctxt.fillStyle = '#369';
			ctxt.fillText(text, 480, 290);
		},
		
		hai: function(){
			console.log("ohai");
		}
	};
};