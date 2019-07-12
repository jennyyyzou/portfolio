/**************************************************
SCROLL TO TOP AFTER REFRESH
**************************************************/
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

/**************************************************
OVERLAY TOGGLE
**************************************************/
window.addEventListener("load", function(){
  var open = document.getElementById("overlay-open"),
      close = document.getElementById("overlay-close"),
      over = document.getElementById("overlay");

  open.addEventListener("click", function(){
    over.classList.add("show");
  });
  close.addEventListener("click", function(){
    over.classList.remove("show");
  });
  close.addEventListener("click", function(){
    over.classList.remove("show");
  });
});

/**************************************************
SMOOTH SCROLL
**************************************************/
$(document).ready(function(){
$("a").on("click",function(event){
  if(""!==this.hash){
    event.preventDefault();
    var hash=this.hash;
    $("html, body").animate({
      scrollTop:$(hash).offset().top},800,function(){
        window.location.hash=hash;
      });
    }
  });
});
