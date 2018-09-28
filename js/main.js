$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 200) { 
          $('.navbar').addClass('white-bg-nav');
          $('.navbar').removeClass('bg-transparent');
      } else {
          $('.navbar').removeClass('white-bg-nav');
          $('.navbar').addClass('bg-transparent');
      }
    });
});
function openNav() {
    document.getElementById("mobile-navigation").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("mobile-navigation").style.height = "0%";
  }