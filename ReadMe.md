jQuery-Noise Plugin
===================
Written By the [Forrst](http://forrst.com) Users [@dhotson](http://forrst.com/people/dhotson) & [@ajcates](http://forrest.com/people/ajcates); contributor: [Alan Hogan](http://alanhogan.com/)
----------------------------------------------------------------------------------------------------------------------------------------------

This plugin will insert a semi transparent noise image into your elements `background-images`. The image is generated using canvas then exported out with `toDataURL()`.

Demo:
-----

There is a Demo.html file provided as well as a [demo on jsFiddle here](http://jsfiddle.net/aYQFD/).

How to use:
-----------

Include the script and jQuery like normal:
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
	<script type="text/javascript" src="noisy.js"></script>
	
Then after the dom is ready you can call just `noisy()` or pass it some parameters:

	$("body").noisy({opacity : .1});
	
Parameters:
-----------

- opacity
:	Takes a number between .0 and 1 and draws out the noise at that opacity.
- color
:	Used for tinting the noise a certain color. Takes a string formatted like "rgb(255,255,255)" or a function that returns a string like that. By default this returns the items current `background-color`.
- monochromatic
:	Whether the generated noise should be monochromatic (`true`) or not. If `false`, the red, green, and blue channels are randomized independently. Default: `false`.
- brightness
:	A number usually around 70 that adds some brightness to the colors so they aren't all dark.
- width
:	How wide you want the `background-image` tile set at. If your noise looks to uniform make this number bigger.

License: MIT (see the `License.md` file for more info)