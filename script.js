$(document).ready(function() {
    $(".nav-link").click(function(event) {
      event.preventDefault(); // Prevent default link behavior
  
      var url = this.href; // Get the URL of the link
      $("#page").fadeOut(500, function() { // Fade out the current page
        window.location = url; // Go to the URL of the link
      });
    });
  });
  $( document ).ready(function() {
    // Main variables
      var $aboutTitle = $('.about-myself .content h2');
      var $developmentWrapper = $('.development-wrapper');
      var developmentIsVisible = false;
  
  

  
    /*###### SKILLS SECTION ######*/
  
      var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;
  
      if((bottom_of_window > middle_of_developmentWrapper)&& (developmentIsVisible == false)){
  
        $('.skills-bar-container li').each( function(){
  
          var $barContainer = $(this).find('.bar-container');
          var dataPercent = parseInt($barContainer.data('percent'));
          var elem = $(this).find('.progressbar');
          var percent = $(this).find('.percent');
          var width = 0;
  
          var id = setInterval(frame, 15);
  
          function frame() {
            if (width >= dataPercent) {
                clearInterval(id);
            } else {
              width++;
              elem.css("width", width+"%");
              percent.html(width+" %");
            }
          }
        });
        developmentIsVisible = true;
      }
    }); // -- End window scroll --
