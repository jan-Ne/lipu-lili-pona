$(document).ready(function() {
  $(".dictionary p").each(function() {
    var overflowAmt = this.scrollWidth - this.clientWidth;
    var size = parseFloat($(this).css("font-size"));
    if (overflowAmt > 0){
      $(this).css("font-size", size - (overflowAmt * 0.1));
      if (overflowAmt > 0){
        var size = parseFloat($(this).css("font-size"));
        $(this).css("font-size", Math.floor((size - 0.1)*10)/10);
      }
    }
  });
});
