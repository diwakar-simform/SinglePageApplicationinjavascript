// Image slider code starts here
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    direction: 'horizontal',

    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
    },

    loop: true,
  
    // pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
//Image slider code ends here 

// scroll function starts here
function scroll_to_services(){
  location.href="#myservices"
}

function scroll_to_imageslider(){
  location.href="#myimageslider"
}

function scroll_to_aboutus(){
  location.href="#myaboutus"
}

function scroll_to_home(){
  location.href="#myhome"
}
// scroll functions ends here