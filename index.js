var track = document.getElementById('track');

    var controlBtn = document.getElementById('play-pause');
    
    function playPause() {
        if (track.paused) {
            track.play();
            //controlBtn.textContent = "Pause";
            controlBtn.className = "pause";
        } else { 
            track.pause();
             //controlBtn.textContent = "Play";
            controlBtn.className = "play";
        }
    }
    
    controlBtn.addEventListener("click", playPause);
    track.addEventListener("ended", function() {
      controlBtn.className = "play";
    });


(function($){
    $(document).ready(function() {
    $("a[title]").style_my_tooltips({
    tip_follows_cursor:false,
    tip_delay_time:90,
    tip_fade_speed:600,
    attribute:"title"
    });
    });
    })(jQuery);
    
    function openAlytut(evt, alytutName) {
      var i, x, tablinks;
      x = document.getElementsByClassName("alytut");
      for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < x.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" tabzact", "");
      }
      document.getElementById(alytutName).style.display = "block";
      evt.currentTarget.className += " tabzact";
    }
