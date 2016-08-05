$(function() {
	$("#slidershow").carousel({
		interval : 2000
	});
	$("#slidershow a.left").click(function() {
		$(".carousel").carousel("prev");
	});
	$("#slidershow a.right").click(function() {
		$(".carousel").carousel("next");
	});
	$("#button1").click(function(){
        $("#slidershow").carousel("1");
     });
	$(".start-slide").click(function(){
        $("#slidershow").carousel('cycle');
     });
     // 停止轮播
     $(".pause-slide").click(function(){
        $("#slidershow").carousel('pause');
     });
     // 循环轮播到上一个项目
     $(".prev-slide").click(function(){
        $("#slidershow").carousel('prev');
     });
     // 循环轮播到下一个项目
     $(".next-slide").click(function(){
        $("#slidershow").carousel('next');
     });
     // 循环轮播到某个特定的帧 
     $(".slide-one").click(function(){
        $("#slidershow").carousel(0);
     });
     $(".slide-two").click(function(){
        $("#slidershow").carousel(1);
     });
     $(".slide-three").click(function(){
        $("#slidershow").carousel(2);
     });
     $(".slide-four").click(function(){
         $("#slidershow").carousel(3);
      });
     $(".slide-five").click(function(){
         $("#slidershow").carousel(4);
      });
     $(".slide-six").click(function(){
         $("#slidershow").carousel(5);
      });
     
     
     
     
     $("#slidershow_1").carousel({
 		interval : 2000
 	});
 	$("#slidershow_1 a.left").click(function() {
 		$(".carousel").carousel("prev");
 	});
 	$("#slidershow_1 a.right").click(function() {
 		$(".carousel").carousel("next");
 	});
});