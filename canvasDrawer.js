/***
* @author Mike Taylor
* @copyright Copyright (c) 2009 Mike Taylor
* @license http://www.opensource.org/licenses/mit-license.php
* @version 0.0.1
*
* All drawings begin in top left corner of <canvas>
*/

// namespace
var _MT = _MT || {};

(function() {
	
	_MT.CanvasDrawer = function(canvas_id) {
		// grab canvas element
		var canvas = document.getElementById(canvas_id);
		
		if (canvas && canvas.getContext) {
			//and set its 2d context, after testing for support
			var context = canvas.getContext("2d");

			// set up private context props for drawing.
			context.lineWidth = 3;
			context.strokeStyle = "#369"
			context.lineCap = "round";
			context.lineJoin = "round";
			
			return {
				//initial position
				pX: 40,
				pY: 40,
					
				up: function() {
					context.beginPath();
					context.moveTo(this.pX,this.pY);
					
					//update target position
					this.pY -= 100;
					
					context.lineTo(this.pX,this.pY);
					context.stroke();
					
					return this;
				},

				right: function() {
					//draw a line to the right
					
					context.beginPath();
					context.moveTo(this.pX,this.pY);
					
					//update target position
					this.pX += 100;
					
					context.lineTo(this.pX,this.pY);
					context.stroke();
					
					return this;
				},

				down: function() {
					//draw a line down
					
					context.beginPath();
					context.moveTo(this.pX,this.pY);
					
					//update target position
					this.pY += 100;
					
					context.lineTo(this.pX,this.pY);
					context.stroke();

					return this;
				},

				left: function() {
					//draw a line to the left
					
					context.beginPath();
					context.moveTo(this.pX,this.pY);
					
					//update target position
					this.pX -= 100;
					
					context.lineTo(this.pX,this.pY);
					context.stroke();
					
					return this;
				},

				clear: function() {
					//clear the canvas
					canvas.width = canvas.width;
					
					return this;
				},

				save: function() {
					//save the canvas to an image/png data url
				},
				
				undo: function() {
					//undo ?
				}
			};
		};
	};
})();