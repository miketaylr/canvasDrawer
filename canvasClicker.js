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
	canvas = document.getElementById(options.id).getContext("2d");

	// set props from options
	canvas.lineWidth = options.size || 4;
	canvas.strokeStyle = options.color || "#999";
	canvas.lineCap = options.lineCap || "round";
	canvas.pX = null;
	canvas.pY = null;
	//canvas.shadowColor = options.shadowColor || "#ccc";
	//canvas.shadowOffsetX = 4;
	//canvas.shadowOffsetY = 4;
	//canvas.shadowBlur = 10;

	return {
		//generic move function
		move: function(changeX, changeY) {
			canvas.beginPath();
			canvas.moveTo(canvas.pX,canvas.pY);

			canvas.pX += changeX;
			canvas.pY += changeY;

			canvas.lineTo(canvas.pX,canvas.pY);
			canvas.stroke();
		},
		hai: function(){
			console.log("o hai");
		}
	};
};