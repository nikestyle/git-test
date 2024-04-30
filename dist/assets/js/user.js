//add-class-to-header-when-scroll
let headerScroll = document.querySelector(".header");
if (headerScroll != null) {
   window.onscroll = function () { scrollFunction() };
   function scrollFunction() {
      if (document.body.scrollTop || document.documentElement.scrollTop) {
         headerScroll.classList.add("active-scroll");
      } else {
         headerScroll.classList.remove("active-scroll");
      }
   }
}

// //close-header-alarm-when-click
// let hdrBtnClose = document.querySelector('.js_close_info');
// let hdrInfo = document.querySelector('.header');
// hdrBtnClose.addEventListener("click", function () {
//    hdrInfo.classList.remove("active");
// });


//!<BURGER-MENU>
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android()
         || isMobile.BlackBerry()
         || isMobile.iOS()
         || isMobile.Opera()
         || isMobile.Windows()
      );
   }
};
if (isMobile.any()) {
   document.body.classList.add('_mobile');
} else {
   document.body.classList.add('_pc');
}

let menuArrows = document.querySelectorAll('.slide-menu__li');

menuArrows.forEach(btn => {
   btn.addEventListener("click", function () {
      for (var i = 0; i < menuArrows.length; i++) {
         if (menuArrows[i] != this)
            menuArrows[i].classList.remove("_active");
      }
      this.classList.toggle("_active");
   });
});

const iconMenu = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

//!
//!</BURGER-MENU>

//Slider
const swiper = new Swiper('.swiper', {

   watchOverflow: true,
   navigation: {
      nextEl: '.home__swiper-btn--next',
      prevEl: '.home__swiper-btn--prev',
   },
   // scrollbar: {
   //    el: '.swiper-scrollbar',
   // },
});

