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

//about

function counterUp(item, end) {
  let index = 1;
  const counter = setInterval(() => {
    item.innerHTML = index;

    if (index == end) {
      clearInterval(counter);
    }
    index++;
  }, 50);
}
if (get_(".about__values")) {
  const count_item = getAll_(".about__values");
  counterUp(count_item[0], count_item[0].dataset.value);
  counterUp(count_item[1], count_item[1].dataset.value);
  counterUp(count_item[2], count_item[2].dataset.value);
  counterUp(count_item[3], count_item[3].dataset.value);
}
