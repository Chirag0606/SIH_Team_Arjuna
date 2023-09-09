(function ( $ ) {
         
    // store the slider in a local variable
    var $window = $(window),
    flexslider;
    
    // tiny helper function to add breakpoints
    function getGridSize() {
    return (window.innerWidth < 280) ? 1 :
    (window.innerWidth < 600) ? 2 :
    (window.innerWidth < 800) ? 2 :
    (window.innerWidth < 900) ? 2 : 5;
    }
    
    $window.on('load',function() {
    
        // Carouse2						
     $('#flexCarouse2').flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: 380,
            itemMargin: 25,
            minItems: 1,
            maxItems: 1,
            //slideshow: 1,
            move: 1,
            pausePlay: true,
            pauseText: 'Pause',
            playText: 'Play', 
            controlNav: false,
            start: function(slider){
              $('body').removeClass('loading');
              if (slider.pagingCount === 1) slider.addClass('flex-centered');
            }
          });
    
    });
    
}( jQuery ));    
    
    
(function ( $ ) {    
jQuery(window).on('load',function() {
// Slider						
    $('#flexSlider').flexslider({
        animation: "slide",
        pausePlay: true,
        controlNav: true,
        start: function(slider){
        $('body').removeClass('loading');
        }
    });
    $('#flexSlider1').flexslider({
        animation: "slide",
        controlNav: false,
        start: function(slider){
        $('body').removeClass('loading');
        }
    });
    $('#flexSlider2').flexslider({
        animation: "slide",
        controlNav: false,
        start: function(slider){
        $('body').removeClass('loading');
        }
    });    
    
    $('#contSlider1').flexslider({
        animation: "swing",
        controlNav: false,
        directionNav: false,
        direction: "vertical",
        easing:'linear',
        prevText: " ",
        nextText: " ", 
        minItems: 2,
        maxItems: 2,
        move: 2,
        itemMargin: 0,
        pausePlay: true,
        pauseOnHover: true,
        slideshowSpeed:1000,
        animationSpeed:10000,      
        
    });
    
    $('#contSlider2').flexslider({
        animation: "slide",
        controlNav: false,
        start: function(slider){
        $('body').removeClass('loading');
        }
    });   
    
    
// Carousel						
    $('#flexCarousel').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 200,
        itemMargin: 5,
        minItems: 2,
        maxItems: 6,
        slideshow: 1,
        move: 1,
        pausePlay: true,
        pauseText: 'Pause',
        playText: 'Play', 
        controlNav: false,
        start: function(slider){
            $('body').removeClass('loading');
            if (slider.pagingCount === 1) slider.addClass('flex-centered');
        }
        });
    
    
    // Carouse2						
    /*$('#flexCarouse2').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 320,
        itemMargin: 5,
        minItems: 2,
        maxItems: 3,
        slideshow: 1,
        move: 1,
        pausePlay: true,
        pauseText: 'Pause',
        playText: 'Play', 
        controlNav: false,
        start: function(slider){
            $('body').removeClass('loading');
            if (slider.pagingCount === 1) slider.addClass('flex-centered');
        }
        });*/
    
    
    
    $('#flexCarousel1').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 168,
        itemMargin: 20,
        minItems:1,
        maxItems: 4,
        slideshow: 1,
        move: 1,
        controlNav: false,
        start: function(slider){
            $('body').removeClass('loading');
            //if (slider.pagingCount === 1) slider.addClass('flex-centered');
        }
        });
    // breaking_news

    $('#breaking_news').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: true,
    directionNav: false,
    direction: "horizontal",
    slideshowSpeed: 7000,
    animationSpeed: 600,
        initDelay: 1000,
        pausePlay: true,
    pauseText: '',
    playText: '',
    pauseOnHover: false
    });

    // Gallery
        $('#galleryCarousel').flexslider({
        animation: "fade",
        controlNav: "thumbnails",
        start: function(slider){
            $('body').removeClass('loading');
        }
        });
		
		var queryArr = [];
		var queryArralt = [];
		$("#galleryCarousel ul.slides li div").each(function () {
			queryArr.push($(this).data('thumb'));
			
		 });
		 $("#galleryCarousel ul.slides li div img").each(function () {
			
			queryArralt.push($(this).attr('alt'));
		 });
		 $('.flex-control-thumbs li:nth-child(1) img').attr('src', queryArr[0]);
		 $('.flex-control-thumbs li:nth-child(2) img').attr('src', queryArr[1]);
		 $('.flex-control-thumbs li:nth-child(3) img').attr('src', queryArr[2]);
 
         $('.flex-control-thumbs li:nth-child(1) img').attr('alt', queryArralt[0]);
		 $('.flex-control-thumbs li:nth-child(2) img').attr('alt', queryArralt[1]);
		 $('.flex-control-thumbs li:nth-child(3) img').attr('alt', queryArralt[2]);
		// console.log($(".flex-control-thumbs li").length);
		//console.log(queryArralt); 
		
    });
}( jQuery )); 
jQuery(document).ready(function(){
    jQuery('figure img').ma5gallery({
        preload:true
    });
    
    jQuery('#socialTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'socialTab_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    
    jQuery('#feedTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'feedTab_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    
    jQuery('.resp-tabs-list li a').click(function(event){
                event.preventDefault();								 
            })

});
    
    var a = 0;
    jQuery(window).scroll(function() {
    
      var oTop = jQuery('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        jQuery('.count').each(function () {
        jQuery(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                jQuery(this).text(Math.ceil(now));
            }
        });
    });
        a = 1;
      }
    
    });

jQuery(document).ready(function(){
    jQuery('figure img').ma5gallery({
        preload:true
    });
});
(function ( $ ) {     
$(document).ready(function() {
    //Horizontal Tab
    $('#parentHorizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });

    // Child Tab
    $('#ChildVerticalTab_1').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true,
        tabidentify: 'ver_1', // The tab groups identifier
        activetab_bg: '#fff', // background color for active tabs in this group
        inactive_bg: '#fff', // background color for inactive tabs in this group
        active_border_color: '#c1c1c1', // border color for active tabs heads in this group
        active_content_border_color: '#5AB1D0' // border color for active tabs contect in this group so that it matches the tab head border
    });


        var videoPlayButton,
        videoWrapper = document.getElementsByClassName('video-wrapper')[0],
        video = document.getElementsByTagName('video')[0],
        videoMethods = {
            renderVideoPlayButton: function() {
                    if (videoWrapper.contains(video)) {
                    this.formatVideoPlayButton()
                    video.classList.add('has-media-controls-hidden')
                    videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                    videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
                    }
            },
            formatVideoPlayButton: function() {
                    videoWrapper.insertAdjacentHTML('beforeend', '\
                    <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                        <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                        <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                    </svg>\
                    ')
            },
            hideVideoPlayButton: function() {
                    video.play()
                    videoPlayButton.classList.add('is-hidden')
                    video.classList.remove('has-media-controls-hidden')
                    video.setAttribute('controls', 'controls')
            }
        }
        videoMethods.renderVideoPlayButton()
});
}( jQuery ));
// ====Tab scrolling text====
function changeClass(){    
    var x = document.getElementsByClassName("text-slide"); 
    var y = document.getElementsByClassName("scroll-text");                           
    x[0].classList.toggle ("pause");
    y[0].classList.toggle("scroll-left");                            
}
function changeClass01(){    
    var x = document.getElementsByClassName("text-slide01"); 
    var z = document.getElementsByClassName("scroll-text01");                              
    x[0].classList.toggle ("pause");
    z[0].classList.toggle("scroll-left");                             
}
function changeClass1(){    
    var x = document.getElementsByClassName("text-slide1"); 
    var z = document.getElementsByClassName("scroll-text-1");                              
    x[0].classList.toggle ("pause");
    z[0].classList.toggle("scroll-left");                             
}

(function ( $ ) { 
$(document).ready(function(){

  $(".main-menu>ul>li.btn-more-li a").keyup(function(){

    //$("#overflow_menu").show();
	  $(this).click();
  });
  
  $("ul.sub-nav-group >li.expanded").keyup(function(){
       $(this).children().last().addClass('open');
  });
  
	
	$("#overflow_menu > ul > li:last-child a").keydown(function(){
      $('.main-menu>ul>li.btn-more-li a').click();
    });
	
	
});
}( jQuery ));
// ===== Scroll to Top ==== 
(function ( $ ) { 
$(document).ready(function(){ 
    $(document).scroll(function() { 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800); 
        return false; 
    }); 
 });
 
$(".lang-dropdown-select-element").change(function() {
var newVal = $(this).val();
if (!confirm("You are about to change the language. Do you want to continue ?")) {
$(this).val($.data(this, 'val')); //set back
return;                           //abort!
}
//destroy branches
$.data(this, 'val', newVal);        //store new value for next time
});
  var lastValueLang = $('.lang-dropdown-select-element option:last-child').text('हिंदी');
 jQuery('.lang-dropdown-select-element').focus(function() {
        jQuery(this).attr('size',2);
        jQuery(this).css('height',"70px");
        jQuery(this).css('x-index',"1000");
    });
 
	$('.lang-dropdown-select-element').focus(function() {
        $(this).attr('size',4);
         jQuery(this).css('height',"70px");
        $(this).css('x-index',"1000");
    });
    $('.lang-dropdown-select-element').blur(function() {
        $(this).attr('size',1);
         jQuery(this).css('height',"70px");
        $(this).css('x-index',"0");
    });
	
 
}( jQuery ));

