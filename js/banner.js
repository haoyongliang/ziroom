/**
 * constructor 轮播图
 * param {options:Object} 参数设置
 * param {options.container} 轮播图容器
 * param {options.imgBox} 轮播图容器中装图片的容器
 * param {options.pointBox} 轮播图容器中装小圆点的容器
 */
function Banner(options) {
	this.index = 1;
	this.container = options.container;
	this.width = this.container.width();
	this.imgBox = options.imgBox;
	this.pointBox = options.pointBox;
	this.imgs = this.imgBox.children();
	this.points = this.pointBox.children();
	this.timmer = undefined;
	this.speed = undefined;
}
Banner.prototype = {
	constructor: Banner,
	//移动图片
	move: function() {
		var that = this;
		
		this.imgBox.animate({
			'transform': 'translateX(' + that.index * that.width * -1 + 'px)',
			'-webkit-transform':'translateX(' + that.index * that.width * -1 + 'px)',
			'transition':'all .7s',
			'-webkit-transition':'all .7s'
			
		}, 300, 'fadeIn', function() {
			if(that.index == 0) {
				that.index = that.imgs.size() - 1;
				
				that.imgBox.css('-webkit-transform','translateX(' + that.index * that.width * -1 + 'px)');
				that.imgBox.css('transform','translateX(' + that.index * that.width * -1 + 'px)');
				that.imgBox.css('-webkit-transition','none');
				that.imgBox.css('transition','none');
			}
			if(that.index >= that.imgs.size() - 1) {
				that.index = 1;
				that.imgBox.css('-webkit-transform','translateX(' + that.index * that.width * -1 + 'px)');
				that.imgBox.css('transform','translateX(' + that.index * that.width * -1 + 'px)');
				that.imgBox.css('-webkit-transition','none');
				that.imgBox.css('transition','none');
			}
			that.updatePoint();
		});

	},
	autoMove: function(speed) {
		speed = speed || 3000;
		var that = this;
		that.timmer = setInterval(function() {
			that.index++;
			that.move();
			
			
			
		}, speed);
	},
	//初始化小圆点,给小圆点添加自定义属性
	initPoint:function(){
		var that = this;
		for(var i=0; i<that.points.size(); i++){
			$(that.points[i]).attr('data-index',i);
		}
		$(that.points[that.index-1]).addClass('current');
	},
	updatePoint:function(){
		var that = this;
		for(var i=0; i<that.points.size(); i++){
			$(that.points[i]).removeClass('current');
		}
		console.log(that.index);
		$(that.points[that.index-1]).addClass('current');
	},
	//初始化轮播图
	init:function(autoPlay){
		this.index=1;
		this.initPoint();
		//先移动到第一张的界面.
		this.move();
		
//		
		if(autoPlay){
			this.autoMove();	
		}
		
		
	}
}