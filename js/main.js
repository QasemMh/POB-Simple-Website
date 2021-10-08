const get_ = (selector) => document.querySelector(selector);
const getAll_ = (selectors) => document.querySelectorAll(selectors);

//Swiper
// var swiper = new Swiper(".swiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

if (get_("#typed__target")) {
  const typed = new Typed("#typed__target", {
    stringsElement: "#typed-strings",
    typeSpeed: 70,
    loop: true,
    loopCount: 2,
    backSpeed: 40,
    smartBackspace: false,
    backDelay: 1500,
  });
}
//

let index = 1;
const data = setInterval(() => {
  if (index == get_(".about__values").dataset.value) {
    clearInterval(data);
  }

  get_(".about__values").innerHTML = index;
  index++;
}, 50);
