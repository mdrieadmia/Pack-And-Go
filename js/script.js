// ======= Slick Slider Part Start =======//
// ====== Popular Slider  start ========
$('.popular_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    centerMode:true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode:false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
// ======== Country Slider Start ====
  $('.country_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    centerMode:true,
    dots:true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode:false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // ====== Testimonial Slider Part Start ==========
  $('.testimonial_text_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    dots:true,
    centerPadding: '0px',
  });
// -------- Slick Slider Part End -------//
// ======== Counter Part Start =======//
  $('.counter').counterUp({
    delay: 10,
    time: 2000
});
// -------- Counter Part End -------//
// ======= Sticky Navbar Part Start ==========//
let navbar = document.querySelector('.navbar');
window.addEventListener("scroll", ()=>{
  let scrolling  = this.scrollY;
  console.log(scrolling)
  if(scrolling > 100){
      navbar.classList.add("sticky_navbar");
  }
  else{
      navbar.classList.remove("sticky_navbar");
  }
})
// -------- Sticky Navbar Part End --------//
// ======= Aos animation Part Start ==========//
AOS.init();
// -------- Aos Animation Part End -------//