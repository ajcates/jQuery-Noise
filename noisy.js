(function($) {
	$.fn.extend({
		noisy : function(params) {
			return $.extend({
				noiseMaker : $.extend({
					opacity : .1,
					width : 20,
					brightness : 70,
					monochromatic : false,
					color: function() {
						return this.caller.css("background-color");
					},
					bringNoise : function() {
						var x, y,
			            	canvas = $("<canvas>", {width: this.width, height:this.width })[0],
			            	ctx = canvas.getContext("2d"),
			            	colorArr = ($.isFunction(this.color) ?  this.color() : this.color).replace(/(rgb\(|rgba\(|\))/gi, "").split(",").map($.trim),
			            	r = colorArr[0], g = colorArr[1], b = colorArr[2];
			            	console.log(colorArr);
			            if (this.monochromatic) {
				         	for (x=0; x<canvas.width; x += 1) {
				         	   	for (y=0; y<canvas.height; y += 1) {
					         	   	rand = Math.random();
				         	   		ctx.fillStyle = "rgba(" + [
				         	   			Math.floor(rand * r + this.brightness), 
				         	   			Math.floor(rand * g + this.brightness), 
				         	   			Math.floor(rand * b + this.brightness),
				         	   			this.opacity
				         	   		].join(",") + ")";
				         	   		ctx.fillRect(x, y, 1, 1);
				         	   	}
				         	}   
				        } else {
					        for (x=0; x<canvas.width; x += 1) {
						        for (y=0; y<canvas.height; y += 1) {
						        	ctx.fillStyle = "rgba(" + [
						        		Math.floor(Math.random() * r + this.brightness), 
						        		Math.floor(Math.random() * g + this.brightness), 
						        		Math.floor(Math.random() * b + this.brightness),
						        		this.opacity
						        	].join(",") + ")";
						        	ctx.fillRect(x, y, 1, 1);
						        }
						    }
				        }
			            return canvas.toDataURL("image/png");
					},
					go : function(caller) {
						this.caller = caller;
						if("HTMLCanvasElement" in window) {
							var noise = this.bringNoise();
							return caller.css("background-image", function(i, val) {
								return "url("+noise+")" + ", " + val;
							});
						} else {
							return caller.css("background-image");
						}
					}
				}, params)
			}).noiseMaker.go(this);
		}
	});
})(jQuery);