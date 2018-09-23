$(function(){
  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "images/gotslide.jpg",
    "images/breakingbadslide.jpg",
    "images/bandofbrothersslide.jpg",
    "images/sherlockslide.jpg",
    "images/strangerthingsslide.jpg",
    "images/friendsslide.jpg",
    "images/sacredgamesslide.jpg",
    "images/himymslide.jpg"
  ];

  var i = 0;

  setInterval(function(){
    i = (i+1) % images.length;
    galleryImage.fadeOut(function(){
        $(this).attr('src', images[i]);
        $(this).fadeIn();
    });
  }, 2000);

});
