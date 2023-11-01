$(document).ready(function(){
    $('.sidelist_pro').mousemove(function(){
	$(this).find('.i-list_pro').show();
	$(this).find('h3').addClass('hover_pro');
	});
	$('.sidelist_pro').mouseleave(function(){
	$(this).find('.i-list_pro').hide();
	$(this).find('h3').removeClass('hover_pro');
	});
	
	
	
	    $(".index-record_r .main").each(function() {
        var b = $(this);
        setInterval(function() {
            var c = b.find(".list:last");
            b.find(".list:last").remove();
            //b.find(".list:first").parent().prepend(c.css({height: 0}));
			b.prepend(c.css({height: 0}));
            c.animate({height: "110px"})
        }, 5000)
    });
});

			jQuery(function(){
				jQuery(".nav-mycart").hover(function(){
						jQuery("#mycart_01").removeClass("btn_mycart").addClass("btn_mycart_over");
						jQuery(".nav-mycart-box").css("display","block");
					},function(){
						jQuery("#mycart_01").removeClass("btn_mycart_over").addClass("btn_mycart");
						jQuery(".nav-mycart-box").css("display","none");
					});
			});


//slideUp

