$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 300;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

bubbly({
  colorStart: '#fff',
  colorStop: '#fff',
  blur: 1,
  compose: 'source-over',
  bubbleFunc:() => `hsla(${Math.random() * 120}, 120%, 90%, 1.8)`
});
