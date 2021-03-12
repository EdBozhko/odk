$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

$("#your-telephone--callback").click(function(){
  $(this).setCursorPosition(5);
}).mask("+38 (999) 999-99-99");

$("#your-telephone--calculation").click(function(){
  $(this).setCursorPosition(5);
}).mask("+38 (999) 999-99-99");

$("#your-telephone--download").click(function(){
  $(this).setCursorPosition(5);
}).mask("+38 (999) 999-99-99");

$("#your-telephone--cooperation").click(function(){
  $(this).setCursorPosition(5);
}).mask("+38 (999) 999-99-99");