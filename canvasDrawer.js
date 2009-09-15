/***
* @author Mike Taylor
* @copyright Copyright (c) 2009 Mike Taylor
* @license http://www.opensource.org/licenses/mit-license.php
* @version 0.0.1
*/

// namespace
var _MT = {};

(function() {
	
	_MT.CanvasDrawer = function(canvas_id) {
		// grab canvas element
		var canvas = document.getElementById(canvas_id);
		
		if (canvas.getContext) {
			//and set its 2d context, after testing for support
			var context = canvas.getContext("2d");

			// set up private context props for drawing.
			context.lineWidth = 2;
			context.lineCap = "round";
			context.lineJoin = "round";
			
			return _self = {
				
				up: function() {
					//draw a line up
					console.log("up");
				},

				right: function() {
					//draw a line to the right
					console.log("right");
				},

				down: function() {
					//draw a line down
					console.log("down");
				},

				left: function() {
					//draw a line to the left
					console.log("left");
				},

				clear: function() {
					//clear the canvas
					canvas.width = canvas.width
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