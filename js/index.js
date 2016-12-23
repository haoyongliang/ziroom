$(function(){
	function banner(){
		var index = 1;
		var w = $('.ui-banner').width();
		var imageBox('.img-box');
		var pointBox = $('.pointe-box');
		function animateMove(){
			imageBox.animage({
				'transform':'translateX('+index*w+')',
				'-webkit-transform':'translateX('+index*w+')',
			});
		}
	}
});
