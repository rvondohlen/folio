// external js: masonry.pkgd.js

var spinLogo = function() {
  $(".sidebar-logo img").velocity({  rotateZ: "360deg" });
};


$(".grid-item").each(function() {
	var color = randomColor({ luminosity: 'dark', hue: 'monochrome', format: 'rgba', alpha: 0.35 });
	$(this).css("background-color", color );
});




$(window).on("load", function() {

  if( window.location.href )

    
    
    var string = window.location.href,
    substring = "tag";
    spinLogo();
    if (string.indexOf(substring) !== -1) {
        console.log("this is a tagged page");
        $('.sidebar-tag-list li.tag-link a').each(function() {
            if (string.indexOf(this.id)  !== -1) {
                console.log(this.id);
                console.log("and there's a match!");
                $(this).addClass("active");
            }
        });
        $('.sidebar-tag-list li.home-link').removeClass("hidden");
    } else {
        console.log("Welcome!");
    }


  setTimeout(function() {
	$('.grid').masonry({
	  itemSelector: ".grid-item",
	  columnWidth: 260,
	  gutter: 10,
	  fitWidth: true 
	});

	$(".grid-item").each(function(i) {
		var item = $(this);
		  setTimeout(function() {
		    item.toggleClass('visible');
		  }, 50*i);
	});
  }, 300);

  
  
});




$(".sidebar-logo").hover(function() {
  console.log("hovering");
  setTimeout(function(){spinLogo()}, 500);
});