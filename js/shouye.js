$(document).ready(function(){
	// banner
	var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
	 autoplay: 5000
  }) 
	//侧边栏
	$('.icon-liebiao').click(function(){  /* 点击事件  ,点击图标 */
		$('.slide_mask').show();        //显示内容
		$('.sidebar').show().animate({          
			"width":"70%",
		})
	})
	$('.slide_mask').on('click',function(){
		$('.slide_mask').hide();     //显示     
		$('.sidebar').animate({
			"width":"0",
		},function(){
			$('.sidebar').hide()     //隐藏
		})
	})
})