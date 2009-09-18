/***
* @author Mike Taylor
* @copyright Copyright (c) 2009 Mike Taylor
* @license http://www.opensource.org/licenses/mit-license.php
* @version 0.0.1
*
* All drawings begin in top left corner of <canvas>
*/

// namespace
var _MT = {};

(function() {
	
	_MT.CanvasDrawer = function(options) {
		// grab canvas element
		var canvas = document.getElementById(options._id);
		
		if (canvas && canvas.getContext) {
			//and set its 2d context, after testing for support
			var context = canvas.getContext("2d");

			// set up private context props for drawing.
			context.lineWidth = options.lineWidth;
			context.strokeStyle = options.strokeStyle;
			
			return {
				//initial position
				pX: 40,
				pY: 40,
				
				//generic move function
				move: function(changeX, changeY) {
					context.beginPath();
					context.moveTo(this.pX,this.pY);
					
					this.pX += changeX;
					this.pY += changeY;
					
					context.lineTo(this.pX,this.pY);
					context.stroke();
					return this;
				},
				
				up: function() {
					this.move(0,-100);
				},

				right: function() {
					this.move(100,0);
				},

				down: function() {
					this.move(0,100);
				},

				left: function() {
					this.move(-100,0);
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