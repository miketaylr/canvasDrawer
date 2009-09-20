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

_MT.CanvasClicker = function(options) {
	// grab canvas element
	var canvas = document.getElementById(options.id);
	
	if (canvas && canvas.getContext) {
		//and set its 2d context, after testing for support
		context = canvas.getContext("2d");

		// set props from options
		context.lineWidth = options.size || 4;
		context.strokeStyle = options.color || "#999";
		context.lineCap = options.lineCap || "round";
		context.pX = null;
		context.pY = null;

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
			hai: function(){
				console.log("o hai");
			}
		};
	};
};