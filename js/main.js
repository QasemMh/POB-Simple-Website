const get_ = (selector) => document.querySelector(selector);
const getAll_ = (selectors) => document.querySelectorAll(selectors);

//auto writing
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

//about animation number
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
  setTimeout(() => {
    counterUp(count_item[0], count_item[0].dataset.value);
    counterUp(count_item[1], count_item[1].dataset.value);
    counterUp(count_item[2], count_item[2].dataset.value);
    counterUp(count_item[3], count_item[3].dataset.value);
  }, 2000);
}

//loading page
document.addEventListener("DOMContentLoaded", function (event) {
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 1000);
});

//porto
if (get_(".grid figure")) {
  $(".grid figure").on("mousemove", function (e) {
    let x = e.pageX - $(this).offset().left;
    let y = e.pageY - $(this).offset().top;

    $(this).find("span").css({ top: y, left: x });
  });

  $(".grid figure").on("mouseout", function (e) {
    let x = e.pageX - $(this).offset().left;
    let y = e.pageY - $(this).offset().top;

    $(this).find("span").css({ top: y, left: x });
  });
}
