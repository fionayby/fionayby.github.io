document.addEventListener("DOMContentLoaded", function() {
  var list = document.getElementsByTagName('img');
  for (var i = 0; i < list.length; i++) {
    (function(img) {
      img.addEventListener('click', function() {
        var fullscreen = document.createElement('div');
        fullscreen.className = "fullscreen";
        var fullscreen_content = document.createElement('fullscreen-content');
        fullscreen_content.className = "fullscreen-content";
        var new_img = img.cloneNode();
        fullscreen.addEventListener("click", function(){
          fullscreen.parentNode.removeChild(fullscreen);
        });
        fullscreen_content.appendChild(new_img);
        fullscreen.appendChild(fullscreen_content);
        document.body.appendChild(fullscreen);
      });
    })(list[i]);
  }
});
