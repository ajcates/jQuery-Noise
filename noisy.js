(function($) {
	$.fn.extend({
		noisy : function(params) {
			return $.extend({
				noiseMaker : $.extend({
					opacity : .05,
					width : 20,
					amount : 70,
					color: function() {
						return this.caller.css("background-color");
					},
					bringNoise : function() {
						var x, y,
			            	canvas = $("<canvas>", {width: this.width, height:this.width })[0],
			            	ctx = canvas.getContext("2d"),
			            	colorArr = (typeof(this.color) == "function" ?  this.color() : this.color).split(","),
			            	r = colorArr[0].replace("rgb(","").trim(), g = colorArr[1].trim(), b = colorArr[2].replace(")","").trim();
						for (x=0; x<canvas.width; x += 1) {
							for (y=0; y<canvas.height; y += 1) {
								ctx.fillStyle = "rgba(" + [
									Math.floor(Math.random() * r + this.amount), Math.floor(Math.random() * g + this.amount), Math.floor(Math.random() * b + this.amount),
									this.opacity
								].join(",") + ")";
								ctx.fillRect(x, y, 1, 1);
							}
			            }
			            return canvas.toDataURL("image/png");
					},
					go : function(caller) {
						this.caller = caller;
			            var noise = this.bringNoise();
			            return caller.css("background-image", function(i, val) {
			            	return "url("+noise+")" + ", " + val;
			            });
					}
				}, params)
			}).noiseMaker.go(this);
		}
	});
})(jQuery);