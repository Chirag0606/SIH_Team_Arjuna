(function() {

// Localize jQuery variable
var jQuery;

/******** Load jQuery if not present *********/
/*  Removed Version check  || window.jQuery.fn.jquery !== '1.10.1' */
if (window.jQuery === undefined) {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
        "https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              scriptLoadHandler();
          }
      };
    } else {
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    main();
}

/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQuery = window.jQuery.noConflict(true);
    // Call our main function
    main();
}

/******** Our main function ********/
function main() {
    jQuery(document).ready(function($) {
        var htmldata = '<style>.threeyears-main-content{width:1000px;margin:0 auto}.threeyears-overlay-bg{display:none;position:absolute;top:0;left:0;cursor:pointer;z-index:1000;background:#fff;background:rgba(0,0,0,.75)}.threeyears-overlay-content{display:none;background:#fff;width:90%;position:absolute;top:10%;left:10%;margin:5% 0 0 -5%;cursor:default;z-index:10001;border-radius:4px;box-shadow:0 0 5px rgba(0,0,0,.9)}.threeyears-close-btn{background:#000;border-radius:50%;color:#fff;cursor:pointer;font:700 20px/40px verdana;height:40px;position:absolute;right:-7px;text-align:center;top:-12px;width:40px;z-index:999}a.threeyears-close-btn{text-decoration:none}@media only screen and (min-width:0px) and (max-width:480px){.threeyears-overlay-content{width:96%;margin:0 2%;left:0}}</style><div class="threeyears-overlay-bg"></div>';
        /******* Load HTML *******/
        $('body').append(htmldata);

        // function to show our popups
function showPopup(whichpopup){

            var docHeight = $(document).height(); //grab the height of the page
            var winHeight = $(window).height();

            var scrollTop = $(window).scrollTop(); //grab the px value from the top of the page to where you're scrolling

            $('.threeyears-overlay-bg').show().css({'height' : docHeight}); //display your popup background and set height to the page height

            $('.threeyears-popup'+whichpopup).show().css({'top': scrollTop+20+'px'}); //show the appropriate popup and set the content 20px from the window top

$('#mygov').show().css({'height' : winHeight-280});

        }
        // function to close our popups
        function closePopup(){
            $('.threeyears-overlay-bg, .threeyears-overlay-content').hide(); //hide the overlay
            $('.threeyears-overlay-bg, .threeyears-overlay-content').empty(); // empty the overlay
        }

        // timer if we want to show a popup after a few seconds.
        //get rid of this if you don't want a popup to show up automatically
        setTimeout(function() {
            // Show popup3 after 2 seconds
            showPopup(3);
        }, 2000);


        // hide popup when user clicks on close button or if user clicks anywhere outside the container
        $('.threeyears-close-btn, .threeyears-overlay-bg').click(function(){
            closePopup();
        });

        // hide the popup when user presses the esc key
        $(document).keyup(function(e) {
            if (e.keyCode == 27) { // if user presses esc key
                closePopup();
            }
        });
    });
}


})(); // We call our anonymous function immediately

