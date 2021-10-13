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

//theme switcher:
let closeSwitcher = get_("#hideSwitcher");
let showSwitcher = get_("#showSwitcher");
let switcherBody = get_("#switcher-main");

closeSwitcher.addEventListener("click", () => {
  switcherBody.style.marginLeft = "-500px";
  showSwitcher.style.marginLeft = "0px";
});

showSwitcher.addEventListener("click", () => {
  switcherBody.style.marginLeft = "0px";
  showSwitcher.style.marginLeft = "-500px";
});

let colorsBody = get_(".switcher__color");
let colorsSpan = getAll_(".switcher__color span");

colorsSpan.forEach((item) => {
  item.style.background = item.dataset.color;

  item.addEventListener("click", function () {
    document.documentElement.style.setProperty(
      "--main-color",
      item.dataset.color
    );

    //save to localstorage:
    localStorage.setItem("themeColor", item.dataset.color);
  });
});

let theme = getAll_(".switcher__content_theme h3")[0];
let theme2 = getAll_(".switcher__content_theme h3")[1];
let dark = true;

theme.addEventListener("click", () => {
  switchTheme(true);
});
theme2.addEventListener("click", () => {
  switchTheme(false);
});

if (localStorage.getItem("themeColor") != null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("themeColor")
  );
}

if (localStorage.getItem("theme") != null) {
  let isLight = localStorage.getItem("theme") == "light" ? true : false;
  switchTheme(isLight);
}

function switchTheme(light) {
  if (light) {
    document.documentElement.style.setProperty("--font-color", "#111");
    document.documentElement.style.setProperty("--main-bg", "#fff");
    document.documentElement.style.setProperty("--nav-color", "#ddd");
    document.documentElement.style.setProperty("--border-color", "#ddd");
    theme.classList.add("active");
    theme2.classList.remove("active");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.style.setProperty("--font-color", "#fff");
    document.documentElement.style.setProperty("--main-bg", "#111");
    document.documentElement.style.setProperty("--nav-color", "#2b2a2a");
    document.documentElement.style.setProperty("--border-color", "#252525");
    theme2.classList.add("active");
    theme.classList.remove("active");

    localStorage.setItem("theme", "dark");
  }
}
