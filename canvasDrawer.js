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

	_MT.CanvasDrawer = function(options) {
		// grab canvas element
		var canvas = document.getElementById(options.id);
		
		if (canvas && canvas.getContext) {
			//and set its 2d context, after testing for support
			var context = canvas.getContext("2d");

			// set props from options
			context.lineWidth = options.lineWidth || 4;
			context.strokeStyle = options.strokeStyle || "#999";
			context.lineCap = options.lineCap || "round";
			context.pX = options.pX || 40;
			context.pY = options.pY || 40;

			return {

				//generic move function
				move: function(changeX, changeY) {
					context.beginPath();
					context.moveTo(context.pX,context.pY);
					
					context.pX += changeX;
					context.pY += changeY;
					
					context.lineTo(context.pX,context.pY);
					context.stroke();
				},
				
				up: function() {
					this.move(0,-200);
					return this;
				},

				right: function() {
					this.move(200,0);
					return this;
				},

				down: function() {
					this.move(0,200);
					return this;
				},

				left: function() {
					this.move(-200,0);
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