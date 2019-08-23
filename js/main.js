
var $btnMenu    = $(".btn-wrap");
var $btn        = $(".btn");
var $menu       = $(".nav-closed");
var $hrLine     = $(".hr-line-closed");
var $navLinks   = $(".link");
var $bgLines    = $(".background");
var $footer     = $(".footer");

// Menu
$btnMenu.on("click", function(e) {
    $menu.toggleClass("nav-open");
    $hrLine.toggleClass("hr-line-open");
    $navLinks.toggleClass("d-block");
    $navLinks.toggleClass("fadeInUp");
    $footer.toggleClass("d-none");

    setTimeout(function(){
        $btn.toggleClass("bg-light");
        $btnMenu.toggleClass("text-light");
    }, 1500)

});

// Parallax
var image = document.getElementsByClassName('ione');
new simpleParallax(image, {
    scale: 1.8,
    overflow: false
});

var image = document.getElementsByClassName('itwo');
new simpleParallax(image, {
    scale: 1.3,
    orientation: "left"
});

var image = document.getElementsByClassName('ithree');
new simpleParallax(image, {
    scale: 1.3
});


// Word by word fade in
var fadeInterval = 200
$('.h1').html(function(_, txt){
    var words= $.trim(txt).split(' ');
   return  '<span>' + words.join('</span> <span>') +'</span>';
}).find('span').each(function(idx, elem){
      $(elem).delay(idx * fadeInterval).fadeIn('slow');
});




  // Get a reference to "myhref".
  var myhref_1 = document.getElementById("myhref1");
  // Get a reference to "myfield".
  var slide = document.getElementById("slide");
  // Attach an event listener to "myhref", which gets notifier when "myhref" is clicked.
  myhref_1.addEventListener("click", function() {
      // "myhref" is click. So, uncheck "myfield"
      slide.checked = false;
  });