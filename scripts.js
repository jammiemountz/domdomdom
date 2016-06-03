$( document ).ready(function() {

  var slide = 0;
  var maxSlide = 44;

  $("body").keydown(function(e) {
    if(e.keyCode == 37) { // left
      slide = slide - 1;
      updateSlide(slide);
    }
    else if(e.keyCode == 39) { // right
      slide = slide + 1;
      updateSlide(slide);
    }
  });

  function updateSlide(newSlide) {
    if (newSlide === 0) {
      slide = 44;
      updateSlide(slide);
      return;
    }
    if (newSlide === 45) {
      slide = 1;
      updateSlide(slide);
      return;
    }
    var stringPath = './img/' + newSlide + '.jpg';
    var img = $('<img>').attr('src', stringPath);
    $('.presentation').empty().append(img)
  }

});
