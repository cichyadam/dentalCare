//after scrolling 200px, navbar will get a background
$(document).ready(function() {
    let btn = $('#button');

    $(window).scroll(function() {
      if($(this).scrollTop() > 200) { 
          $('.navbar').addClass('white-bg-nav');
          $('.navbar').removeClass('bg-transparent');
      } else {
          $('.navbar').removeClass('white-bg-nav');
          $('.navbar').addClass('bg-transparent');
      }
      if ($(this).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    //scroll to top   
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html,body').animate({scrollTop:0}, '300');
    });
    
    

    let controller = new ScrollMagic.Controller();
    // build a scene
    let Scene01 = new ScrollMagic.Scene({
        triggerElement: '.stomatology',
        triggerHook: 0.9,
        reverse: !1 
    })
    .setClassToggle('.stomatology', 'fade-in')
    .setPin()
    .addTo(controller);

    let Scene02 = new ScrollMagic.Scene({
        triggerElement: '.endodencia',
        triggerHook: 0.9,
        reverse: !1
    })
    .setClassToggle('.endodencia','fade-in')
    .setPin()
    .addTo(controller);

    let Scene03 = new ScrollMagic.Scene({
        triggerElement: '.hygiena',
         triggerHook: 0.9,
            reverse: !1
    })
    .setClassToggle('.hygiena','fade-in')
    .setPin()
    .addTo(controller);

    let Scene04 = new ScrollMagic.Scene({
        triggerElement: '.protetika',
         triggerHook: 0.9,
            reverse: !1
    })
    .setClassToggle('.protetika','fade-in')
    .setPin()
    .addTo(controller);

    let Scene05 = new ScrollMagic.Scene({
        triggerElement: '.bielenie',
         triggerHook: 0.9,
            reverse: !1
    })
    .setClassToggle('.bielenie','fade-in')
    .setPin()
    .addTo(controller);

    let Scene06 = new ScrollMagic.Scene({
        triggerElement: '.spolupraca',
         triggerHook: 0.9,
            reverse: !1
    })
    .setClassToggle('.spolupraca','fade-in')
    .setPin()
    .addTo(controller);

});
//toggling class of burger menu -> open/close nav
let hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", () =>{
    if (!hamburger.classList.contains("is-active")){
        openNav(); 
    } else {
        closeNav();
    }
    hamburger.classList.toggle("is-active");
   
  });
// close the nav after click on anchor + remove active class from burger menu
    let link = document.querySelectorAll(".overlay-content a");
    link.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("is-active");
            closeNav();
        });
      });
   
function openNav() {
    document.getElementById("mobile-navigation").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("mobile-navigation").style.height = "0%";
  }