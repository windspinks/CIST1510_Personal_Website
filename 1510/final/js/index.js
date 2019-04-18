$(function() {
  $('.jcarousel').jcarousel({
    animation: {
      duration: 800,
      easing: 'linear',
      complete: function() {}
    },
    list: '.jcarousel-list',
    items: '.jcarousel-item',
    wrap: "circular"
    // return this.element().children().eq(0);
  });
});



setInterval(function() {
  $('.jcarousel').jcarousel('scroll', '+=1');
}, 4000);
